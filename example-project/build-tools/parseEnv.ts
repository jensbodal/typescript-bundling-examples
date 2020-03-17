/**
 * @param key string
 * @param defaultValue boolean
 * @return (boolean | string)
 */
const parseEnv = (key: string, defaultValue: boolean | string = false) => {
  const value: string | boolean = process.env[key] as string | boolean;

  if (value === true || value === false) {
    return value;
  }

  if (!value) {
    return defaultValue;
  }

  if (value === 'true' || value === 'false') {
    return value === 'true';
  }

  return value;
}

export { parseEnv };
