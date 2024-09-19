import path from "path";
import { buildJsonFromFolder } from "./utils/buildJson";
import { createAndPopulateDatabase } from "./utils/buildSqlite";

export function main() {
  const dataFolderPath = path.join(__dirname, "../faculties");
  const jsonFilePath = path.join(__dirname, "../syllabus.json");
  const dbFilePath = path.join(__dirname, "../app.db");

  buildJsonFromFolder(dataFolderPath);

  createAndPopulateDatabase(jsonFilePath, dbFilePath);
}

try {
  main();
  console.log("Build completed successfully");
} catch (error) {
  console.error("Build failed:", error);
  process.exit(1);
}
