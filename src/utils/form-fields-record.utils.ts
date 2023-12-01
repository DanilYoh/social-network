export const formFieldsRecord = <
  K extends string,
  T extends HTMLSelectElement | HTMLInputElement
>(
  fields: T[]
) => Object.fromEntries(fields.map((e) => [e.name, e])) as Record<K, T>;
