import { buildQueryParams } from '../../../src/lib/tools/BuildQueryParams';

describe('buildQueryParams', () => {
  const params = {
    a: 1,
    b: 2
  };

  it('should return an array of strings', () => {
    const result = buildQueryParams(params);
    expect(result).toBeInstanceOf(Array);
  });

  it('should return all the keys and values of the params object', () => {
    const result = buildQueryParams(params);
    expect(result).toEqual([
      ['a', '==', 1],
      ['b', '==', 2]
    ]);
  });

  it('should return an empty array if the params object is empty', () => {
    const result = buildQueryParams({});
    expect(result).toEqual([]);
  });
});
