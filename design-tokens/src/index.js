const path = require('path')
const { getBrands } = require('./brand')
const { buildTokens } = require('./build')

getBrands().forEach(async (current) => {
    const buildPath = {
        css: path.join('dist','css',current.dest, path.sep)
    }

    await buildTokens({ current, buildPath })
})