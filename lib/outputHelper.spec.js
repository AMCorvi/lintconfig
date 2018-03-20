const config = require('../index.js')
const co = require('./outputHelper.js')

test('"config" import exports expected keys', function () {
  expect(config).toEqual(
    expect.objectContaining({
      rules:         expect.any(Object)
      ,env:           expect.any(Object)
      ,parserOptions: expect.any(Object)
      ,plugins:       expect.any(Array)
    })
  )
})

test('Produce array of strings', function () {
  let func = co.__createKeyStrings(Object.keys(config))
  let arrayOfString = [expect.any(String)]
  expect(func).toEqual(expect.arrayContaining(arrayOfString))
  expect(func).toMatchSnapshot()
})

test(".configText is string", () => {
  expect(co.configText).toEqual(expect.any(String))
} )
