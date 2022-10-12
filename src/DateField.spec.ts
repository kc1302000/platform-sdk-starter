import { ChronoDateCast, DateField } from './DateField'
describe('Cast Function tests ->', () => {
  const makeCastAssert = (castFn: any) => {
    const assertFn = (raw: any, output: any): void => {
      expect(castFn(raw)).toBe(output)
    }
    return assertFn
  }
  const makeCastAssertException = (castFn: any) => {
    const assertFn = (raw: any, error: string): void => {
      expect(() => {
        castFn(raw)
      }).toThrow(error)
    }
    return assertFn
  }

  const assertThrow = makeCastAssertException(ChronoDateCast)
    const assertDC = (raw: any, output: any): void => {
      expect(ChronoDateCast(raw)).toStrictEqual(output)
    }


  test('DateCast handles null cases', () => {
    // eventually I want this 2500 test file from pandas to be our goal for DWIM date parsing
    // https://github.com/pandas-dev/pandas/blob/main/pandas/tests/tools/test_to_datetime.py
    assertDC(undefined, null)
    assertDC(null, null)
    assertDC('', null)
  })

  // test('DateCast handles real dates', () => {
  //   const dString = '2022-07-30'
  //   const d = new Date(dString)
  //   assertDC(dString, d)
  // })

  // test('DateCast handles error cases', () => {  
  //   assertThrow(
  //     '2022-07-35',
  //     "'2022-07-35' parsed to 'Invalid Date' which is invalid"
  //   )
  //   assertThrow('foo', "'foo' parsed to 'Invalid Date' which is invalid")
  //   assertThrow(1 / 0, "Infinity parsed to 'Invalid Date' which is invalid")

  // })

  test('pandas date functions', () => {
    const dString = '2009-02-17T17:00:00.000Z'
    const d = new Date(dString)

    assertDC("02/17/2009", d) //"MM/DD/YY" #Month-Day-Year with leading zeros
    assertDC("17/02/2009", d) //"DD/MM/YY" #Day-Month-Year with leading zeros (
    assertDC("2009/02/17", d) //"YY/MM/DD" #Year-Month-Day with leading zeros
    assertDC("February 17, 2009", d) //"Month D, Yr" Month name-Day-Year with no leading zeros
    assertDC("2/17/2009", d), //"M/D/YY"#Month-Day-Year with no leading zeros
    assertDC("17/2/2009", d), //"D/M/YY"#Day-Month-Year with no leading zeros
    assertDC("2009/2/17", d), //"YY/M/D"#Year-Month-Day with no leading zeros
    assertDC(" 2/17/2009", d) //"bM/bD/YY" #Month-Day-Year with spaces instead of leading zeros
    assertDC("17Feb2009", d) // "DDMonYY" #Day-Month abbreviation-Year with leading zeros

  })

  test('instantiate DateField', () => {
    const d = DateField()
    console.log(d)
    expect(1).toBe(1)
  })
  

})
