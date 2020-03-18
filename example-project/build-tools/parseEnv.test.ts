import { parseEnv } from './parseEnv';

describe('parseEnv', () => {
  const originalEnv = process.env;

  beforeEach(() => {
    process.env = { ...originalEnv };
  });

  afterEach(() => {
    process.env = originalEnv;
  });

  it('parses boolean true', () => {
    (process.env as any).foo = true;
    expect(parseEnv('foo')).toEqual(true);
  });

  it('parses boolean false', () => {
    (process.env as any).foo = false;
    expect(parseEnv('foo')).toEqual(false);
  });

  it('parses string "true"', () => {
    process.env.foo = 'true';
    expect(parseEnv('foo')).toEqual(true);
  });

  it('parses string "false"', () => {
    process.env.foo = 'false';
    expect(parseEnv('foo')).toEqual(false);
  });

  it('parses string value', () => {
    process.env.foo = 'bar';
    expect(parseEnv('foo')).toEqual('bar');
  });

  it('returns default value if environment variable not set', () => {
    expect(parseEnv('foo', 'baz')).toEqual('baz');
  });

  it('returns false for default value if environment variable not set and no default value provided', () => {
    expect(parseEnv('foo')).toEqual(false);
  });
});
