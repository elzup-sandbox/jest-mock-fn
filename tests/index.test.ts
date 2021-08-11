import * as m from '../src/hello'
import { doubleDouble } from '../src/helloDouble'

describe('index', () => {
  let spy: jest.SpyInstance

  beforeAll(() => {
    spy = jest.spyOn(m, 'hello').mockReturnValue('mocked')
  })

  // afterEach(() => {
  //   spy.mockClear();
  // });

  test('mocking', () => {
    expect(doubleDouble()).toMatchInlineSnapshot(`
Array [
  "mocked",
  "mocked",
]
`)
  })
})
