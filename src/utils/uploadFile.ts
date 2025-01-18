import { writeFile } from "fs/promises";
import path from "path";

export default async function uploadFile(
  file: File,
  filename: string,
  pathToUpload: string
) {
  const buffer = Buffer.from(await file.arrayBuffer());

  try {
    await writeFile(path.join(process.cwd(), pathToUpload, filename), buffer);
    return true;
  } catch (e) {
    // console.log(e);
    return false;
  }
}
