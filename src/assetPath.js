export function assetPath(path) {
  const baseUrl = import.meta.env?.BASE_URL ?? "/mercury-lab/";
  return `${baseUrl}${path.replace(/^\/+/, "")}`;
}
