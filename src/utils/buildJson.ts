import fs from "fs";
import path from "path";
import type { Faculty, Semester, Subject, Elective } from "./buildSqlite";

// Main function to build JSON from folder
export function buildJsonFromFolder(folderPath: string) {
  const result: Faculty[] = [];

  const items = fs.readdirSync(folderPath);

  items.forEach((item) => {
    const fullPath = path.join(folderPath, item);
    const { name } = path.parse(item);

    if (fs.statSync(fullPath).isDirectory()) {
      result.push({
        facultyName: name,
        semesters: buildSemesters(fullPath),
      });
    }
  });

  const outputFilePath = path.join(__dirname, "../../syllabus.json");
  fs.writeFileSync(outputFilePath, JSON.stringify(result, null, 2));
}

// Function to build semesters from folder
function buildSemesters(folderPath: string): Semester[] {
  const result: Semester[] = [];

  const items = fs.readdirSync(folderPath);

  items.forEach((item) => {
    const fullPath = path.join(folderPath, item);
    const { name } = path.parse(item);

    if (fs.statSync(fullPath).isDirectory()) {
      const { regularSubjects, electiveGroups } =
        buildSubjectsAndElectives(fullPath);
      result.push({
        semesterName: name,
        subjects: regularSubjects,
        electives: electiveGroups,
      });
    }
  });

  return result;
}

// Function to build subjects and electives from folder
function buildSubjectsAndElectives(folderPath: string): {
  regularSubjects: Subject[];
  electiveGroups: Elective[];
} {
  const regularSubjects: Subject[] = [];
  const electiveGroups: Elective[] = [];

  const items = fs.readdirSync(folderPath);

  items.forEach((item) => {
    const fullPath = path.join(folderPath, item);
    const { name, ext } = path.parse(item);

    if (fs.statSync(fullPath).isDirectory()) {
      // Check if folder is an elective group (e.g., e1, e2, e3)
      if (/^e\d+$/i.test(name)) {
        const electiveSubjects = buildSubjects(fullPath);
        electiveGroups.push({
          electiveGroup: name,
          electives: electiveSubjects,
        });
      } else {
        // Process directories that are not elective groups
        const {
          regularSubjects: subjects,
          electiveGroups: nestedElectiveGroups,
        } = buildSubjectsAndElectives(fullPath);
        regularSubjects.push(...subjects);
        electiveGroups.push(...nestedElectiveGroups);
      }
    } else if (fs.statSync(fullPath).isFile()) {
      // If file is not in an elective group folder
      if (!/^e\d+$/i.test(path.dirname(fullPath))) {
        const subject = {
          subjectName: name,
          content: fs.readFileSync(fullPath, "utf-8"),
        };
        regularSubjects.push(subject);
      }
    }
  });

  return { regularSubjects, electiveGroups };
}

// Helper function to build subjects from a folder
function buildSubjects(folderPath: string): Subject[] {
  const subjects: Subject[] = [];
  const items = fs.readdirSync(folderPath);

  items.forEach((item) => {
    const fullPath = path.join(folderPath, item);
    const { name } = path.parse(item);

    if (fs.statSync(fullPath).isFile()) {
      const subject = {
        subjectName: name,
        content: fs.readFileSync(fullPath, "utf-8"),
      };
      subjects.push(subject);
    }
  });

  return subjects;
}
