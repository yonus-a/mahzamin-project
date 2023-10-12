export default function uniqueFilename(file: File, name: string) {
  return {
    name: Date.now() + "_" + name.replaceAll(" ", "_"),
    file,
  };
}
