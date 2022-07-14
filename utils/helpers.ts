export function pick(
  obj: { [key: string]: any },
  keys: string[]
): { [key: string]: any } {
  return Object.assign(
    {},
    ...keys.map((key) => {
      if (obj && Object.prototype.hasOwnProperty.call(obj, key)) {
        return { [key]: obj[key] };
      }
    })
  );
}
