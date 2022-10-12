import fs from "node:fs/promises";

export async function readFile(filePath: string) {
  const data = await fs.readFile(filePath, { encoding: "utf-8" });
  return data.split("\r\n");
}
