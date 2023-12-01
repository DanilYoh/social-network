export const allPropertiesToStringUtils = <
  T extends string,
  O extends Record<T, PropertyKey> = Record<T, PropertyKey>
>(
  obj: O
) =>
  Object.fromEntries(
    Object.entries(obj).map(([key, value]) => [key, String(value)])
  ) as Record<T, string>;
