import { objectToParams } from '../../src/utils/index'

describe('test Object to params', () => {
  it('{a: 1, b: 2}', () => {
    expect(objectToParams({ a: 1, b: 2 })).toBe('a=1&b=2')
  })
})
