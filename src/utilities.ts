export const removeUndefinedValuesFromObj = <T>(
  inputObject: T
): {
  [K in keyof T]-?: Exclude<T[K], undefined>;
} => {
  const result: {
    [K in keyof T]-?: Exclude<T[K], undefined>;
  } = {} as any;

  // eslint-disable-next-line
  for (const key in inputObject) {
    if (inputObject[key] !== undefined) {
      result[key as keyof T] = inputObject[key] as any;
    }
  }

  return result;
};
