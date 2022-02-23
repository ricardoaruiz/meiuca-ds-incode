const StyleDictionaryPackage = require('style-dictionary')
const { registerConfig } = require('./config')

const buildTokens = async ({ current, buildPath}) => {
    const StyleDictionary = StyleDictionaryPackage.extend
        (registerConfig(current, buildPath)
    )

    StyleDictionary.buildAllPlatforms()
}

module.exports = { buildTokens }