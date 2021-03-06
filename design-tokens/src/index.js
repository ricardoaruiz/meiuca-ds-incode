const path = require('path')
const { getBrands } = require('./brand')
const { buildTokens } = require('./build')
const { registerFilters, registerFormats } = require('./config')

registerFilters()
registerFormats()

getBrands().forEach(async (current) => {
    const buildPath = {
        css: path.join('dist','css',current.dest, path.sep),
        scss: path.join('dist','scss',current.dest, path.sep)
    }

    await buildTokens({ current, buildPath })
})