export type QuerifySerializer = (key: string, value: string | number | boolean | undefined | null) => string;

const defaultSerializeTransform: QuerifySerializer = (key, value) => `${key}=${value}`;

export function querify(
  obj: object,
  prefix?: string,
  serializer: QuerifySerializer = defaultSerializeTransform
): string {
  let qs: string[] = [], prop: string;

  for (prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      const key = prefix ? `${prefix}[${prop}]` : prop;
      const val = obj[prop];

      qs.push(
        (val !== null && typeof val === "object")
          ? querify(val, key)
          : serializer(key, val)
      );
    }
  }

  return qs.join('');
}
