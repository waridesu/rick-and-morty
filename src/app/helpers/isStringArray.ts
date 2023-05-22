export function isStringArray(array: any[]): array is string[] {
  return array.length > 0 && array.every(item => typeof item === 'string');
}
