const path = require('path')
const fs = require('fs')

const getDirectories = (dirPath) => {
    return fs.readdirSync(path.resolve(__dirname, dirPath)).map(folder => folder)
}

const getBrands = () => {
    const BRANDS = [{
        source: path.resolve(__dirname, '..', 'tokens', 'globals', '**', '*.json'),
        dest: '',
        filename: 'globals',
        brand: '',
        theme: '',
        mode: ''
    }]

    getDirectories(path.resolve('tokens', 'brands')).forEach(brand => {
        getDirectories(path.resolve('tokens', 'brands', brand)).forEach(theme => {
            getDirectories(path.resolve('tokens', 'brands', brand, theme)).forEach(mode => {
                BRANDS.push({
                    source: path.resolve(__dirname, '..', 'tokens', 'brands', brand, theme, mode, '**', '*.json'),
                    dest: path.join(brand, theme),
                    filename: mode,
                    brand,
                    theme,
                    mode
                })
            })
        })
    })

    return BRANDS

}

module.exports = { getBrands }