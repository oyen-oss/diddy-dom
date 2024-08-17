export function isPopulatedArray<T>(
  value: T[] | undefined,
): value is [T, ...T[]] {
  return Array.isArray(value) && value.length > 0;
}
