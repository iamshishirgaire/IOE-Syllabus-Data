import { Database } from "bun:sqlite";
import fs from "fs";

// Define the structure of the JSON data
export interface Subject {
  subjectName: string;
  content: string;
}

export interface Semester {
  semesterName: string;
  subjects: Subject[];
  electives: Subject[];
}

export interface Faculty {
  facultyName: string;
  semesters: Semester[];
}

// Function to build and populate the SQLite database
export function createAndPopulateDatabase(
  jsonFilePath: string,
  dbFilePath: string
) {
  // Read the JSON file
  const jsonData = fs.readFileSync(jsonFilePath, "utf-8");
  const faculties: Faculty[] = JSON.parse(jsonData);

  // Initialize the SQLite database
  const db = new Database(dbFilePath);

  // Create the tables if they don't exist
  db.run(`
    CREATE TABLE IF NOT EXISTS faculty (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL
    )
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS semester (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      faculty_id INTEGER,
      FOREIGN KEY(faculty_id) REFERENCES faculty(id)
    )
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS subject (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      content TEXT NOT NULL,
      semester_id INTEGER,
      faculty_id INTEGER,
      FOREIGN KEY(semester_id) REFERENCES semester(id),
      FOREIGN KEY(faculty_id) REFERENCES faculty(id)
    )
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS elective (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      content TEXT NOT NULL,
      semester_id INTEGER,
      faculty_id INTEGER,
      FOREIGN KEY(semester_id) REFERENCES semester(id),
      FOREIGN KEY(faculty_id) REFERENCES faculty(id)
    )
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS offline (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      type TEXT CHECK(type IN ('note', 'question')) NOT NULL,
      path TEXT NOT NULL,
      fileId TEXT NOT NULL
    )
  `);

  // Insert data from the JSON into the SQLite database
  faculties.forEach((faculty) => {
    // Insert faculty
    const facultyStmt = db.prepare("INSERT INTO faculty (name) VALUES (?)");
    const facultyResult = facultyStmt.run(faculty.facultyName);
    const facultyId = facultyResult.lastInsertRowid;

    faculty.semesters.forEach((semester) => {
      // Insert semester
      const semesterStmt = db.prepare(
        "INSERT INTO semester (name, faculty_id) VALUES (?, ?)"
      );
      const semesterResult = semesterStmt.run(semester.semesterName, facultyId);
      const semesterId = semesterResult.lastInsertRowid;

      semester.subjects.forEach((subject) => {
        // Insert subject
        const subjectStmt = db.prepare(
          "INSERT INTO subject (name, content, semester_id, faculty_id) VALUES (?, ?, ?, ?)"
        );
        subjectStmt.run(
          subject.subjectName,
          subject.content,
          semesterId,
          facultyId
        );
      });

      semester.electives.forEach((elective) => {
        // Insert elective
        const electiveStmt = db.prepare(
          "INSERT INTO elective (name, content, semester_id, faculty_id) VALUES (?, ?, ?, ?)"
        );
        electiveStmt.run(
          elective.subjectName,
          elective.content,
          semesterId,
          facultyId
        );
      });
    });
  });

  // Close the database connection
  db.close();
}
