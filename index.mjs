import path from "node:path";

export function getInklecateBinaryPath() {
  if (process.platform === "win32") {
    return path.resolve(import.meta.dirname, "bin", "windows", "inklecate.exe");
  }
  if (process.platform === "darwin") {
    return path.resolve(import.meta.dirname, "bin", "mac", "inklecate");
  }
  return path.resolve(import.meta.dirname, "bin", "linux", "inklecate");
}
