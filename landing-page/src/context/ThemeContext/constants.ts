import { Theme, Themes } from './types'

import theme1Light from '@ricardoaruiz/design-tokens/dist/css/marca-a/tema-1/light.css'
import theme1Dark from '@ricardoaruiz/design-tokens/dist/css/marca-a/tema-1/dark.css'
import theme2Light from '@ricardoaruiz/design-tokens/dist/css/marca-a/tema-2/light.css'
import theme2Dark from '@ricardoaruiz/design-tokens/dist/css/marca-a/tema-2/dark.css'

export const themes: Themes = {
    'tema-1light': theme1Light,
    'tema-1dark': theme1Dark,
    'tema-2light': theme2Light,
    'tema-2dark': theme2Dark,
}

export const defaultTheme = {
    brand: 'marca-1',
    themeName: 'tema-1',
    mode: 'dark'
} as Theme