const path = require('path')
const fs = require('fs')

/**
 * Represents JSON folders
 * This JSONS has all variations of design tokens
 */
const FOLDER = {
    TOKENS: 'tokens',
    GLOBALS: 'globals',
    BRANDS: 'brands'
}

/**
 * Return all folders by a initial path
 * @param {*} dirPath 
 * @returns array with child folders
 */
const getDirectories = (dirPath) => {
    return fs.readdirSync(path.resolve(__dirname, dirPath)).map(folder => folder)
}

// getBrands Function Return sample
// [
//     {
//       source: '/media/rick/Arquivos/cursos/Meiuca/Design System/DS/design-tokens/tokens/globals/**/*.json',
//       dest: '',
//       filename: 'globals',
//       brand: '',
//       theme: '',
//       mode: ''
//     },
//     {
//       source: '/media/rick/Arquivos/cursos/Meiuca/Design System/DS/design-tokens/tokens/brands/marca-a/tema-1/dark/**/*.json',
//       dest: 'marca-a/tema-1',
//       filename: 'dark',
//       brand: 'marca-a',
//       theme: 'tema-1',
//       mode: 'dark'
//     },
//     {
//       source: '/media/rick/Arquivos/cursos/Meiuca/Design System/DS/design-tokens/tokens/brands/marca-a/tema-1/light/**/*.json',
//       dest: 'marca-a/tema-1',
//       filename: 'light',
//       brand: 'marca-a',
//       theme: 'tema-1',
//       mode: 'light'
//     }
// ]

/**
 * Return an array with all jsons tokens that will be use to generate tokens in each platform
 * @returns array with all jsons tokens
*/
const getBrands = () => {
    const BRANDS = [{
        source: path.resolve(__dirname, '..', FOLDER.TOKENS, FOLDER.GLOBALS, '**', '*.json'),
        dest: '',
        filename: 'globals',
        brand: '',
        theme: '',
        mode: ''
    }]

    getDirectories(path.resolve(FOLDER.TOKENS, FOLDER.BRANDS)).forEach(brand => {
        getDirectories(path.resolve(FOLDER.TOKENS, FOLDER.BRANDS, brand)).forEach(theme => {
            getDirectories(path.resolve(FOLDER.TOKENS, FOLDER.BRANDS, brand, theme)).forEach(mode => {
                BRANDS.push({
                    source: path.resolve(__dirname, '..', FOLDER.TOKENS, FOLDER.BRANDS, brand, theme, mode, '**', '*.json'),
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