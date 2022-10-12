import path from "node:path";
import { readFile } from "../common/utils";
import { submarinePower } from "./day-03";

const fileName = "input.txt";
const filePath = path.join(__dirname, fileName);

(async () => {
  const diagReport = await readFile(filePath);
  const result = await submarinePower(diagReport);

  console.log(result);
})();
