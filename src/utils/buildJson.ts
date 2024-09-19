import fs from "fs";
import path from "path";
import type { Faculty, Semester, Subject } from "./buildSqlite";

export function buildJsonFromFolder(folderPath: string) {
  const result: Faculty[] = [];

  const items: string[] = fs.readdirSync(folderPath);

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

function buildSemesters(folderPath: string): Semester[] {
  const result: Semester[] = [];

  const items: string[] = fs.readdirSync(folderPath);

  items.forEach((item) => {
    const fullPath = path.join(folderPath, item);
    const { name } = path.parse(item);

    if (fs.statSync(fullPath).isDirectory()) {
      const res = buildSubjects(fullPath);
      result.push({
        semesterName: name,
        subjects: res.regularSubjects,
        electives: res.electiveSubjects,
      });
    }
  });

  return result;
}

function buildSubjects(folderPath: string): {
  regularSubjects: Subject[];
  electiveSubjects: Subject[];
} {
  const regularSubjects: Subject[] = [];
  const electiveSubjects: Subject[] = [];

  const items: string[] = fs.readdirSync(folderPath);

  items.forEach((item) => {
    const fullPath = path.join(folderPath, item);
    const { name, ext } = path.parse(item);

    // Check if the folder is an elective (starts with "e" followed by a number)
    //if it is folder and is elective loop through the files in the folder and add them to the electiveSubjects array
    if (fs.statSync(fullPath).isDirectory() && /^e\d+$/i.test(name)) {
      const items: string[] = fs.readdirSync(fullPath);

      items.forEach((item) => {
        const fp = path.join(fullPath, item);
        const { name, ext } = path.parse(item);

        if (fs.statSync(fp).isFile()) {
          const subject = {
            subjectName: name,
            content: fs.readFileSync(fp, "utf-8"),
          };

          electiveSubjects.push(subject);
        }
      });
    }

    if (fs.statSync(fullPath).isFile()) {
      const subject = {
        subjectName: name,
        content: fs.readFileSync(fullPath, "utf-8"),
      };

      regularSubjects.push(subject);
    }
  });

  return { regularSubjects, electiveSubjects };
}
