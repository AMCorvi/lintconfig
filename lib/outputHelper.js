const config = require('../index.js')

/**
 *  template string for various object properties
 *
 * @param {array} arr array of eslint-config property keys
 * @returns {array} of Strings
 */
function createKeyStrings (arr) {
  if (!Array.isArray(arr)) return 'parameter mustbe array'

  return arr.map(
    x =>
      `AMConfig.${x} = Object.assign(AMConfig.${x}, {
          /* Insert Overriding Eslint ${x} Here */
})
`
  )
}

function configText () {
  let keys = Object.keys(config)
  return 'const AMConfig = require("@amcorvi/eslint-config")\n\n'.concat(
    createKeyStrings(keys)
      .join('\n')
      .concat('module.export = AMConfig')
  )
}

module.exports = {__createKeyStrings: createKeyStrings
  ,configText:         configText()}
