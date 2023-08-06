export function generate_UniqueId(prefix) {
  const timestamp = Date.now().toString(36);
  const randomPart = Math.random().toString(36).substr(2, 10);
  return `${prefix}-${timestamp}-${randomPart}`;
}
