import React from 'react'
import { defaultTheme, themes } from './constants'
import { Theme, ThemeProviderData, ThemeProviderProps } from './types'

const ThemeContext = React.createContext({} as ThemeProviderData)

/**
 * Theme Provider
 * @param param0
 * @returns
 */
export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  brand = defaultTheme.brand,
  themeName = defaultTheme.themeName,
  mode = defaultTheme.mode,
  children,
}) => {
  const [currentTheme, setCurrentTheme] = React.useState<Theme>({
    brand,
    themeName,
    mode,
  })

  /**
   * Change the theme
   */
  const changeTheme = React.useCallback((theme: Theme) => {
    const themeStyle = document.querySelector('#theme-style')

    if (themeStyle) themeStyle.innerHTML = ''

    const currTheme = themes[`${theme.themeName}${theme.mode}`]
    themeStyle?.appendChild(document.createTextNode(currTheme))

    setCurrentTheme(theme)
  }, [])

  /**
   * Add an empty style tag on document head
   * This tag will receive current stylesheet theme
   */
  React.useEffect(() => {
    const tagStyle = document.createElement('style')
    tagStyle.setAttribute('type', 'text/css')
    tagStyle.setAttribute('id', 'theme-style')
    document.head.appendChild(tagStyle)
    changeTheme({
      brand,
      themeName,
      mode,
    })
  }, [brand, changeTheme, mode, themeName])

  /**
   * Context values
   */
  const themeValue: ThemeProviderData = {
    theme: currentTheme,
    changeTheme,
  }

  return (
    <ThemeContext.Provider value={themeValue}>
      {themeValue.theme && children}
    </ThemeContext.Provider>
  )
}

/**
 * Hook to enable access context on child components
 * @returns
 */
export const useTheme = () => {
  const context = React.useContext(ThemeContext)
  return context
}
