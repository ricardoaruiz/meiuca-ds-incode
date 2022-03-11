export type ThemeProviderProps = {
  brand?: string
  themeName?: string
  mode?: string
}

export type ThemeProviderData = {
  theme: Theme
  changeTheme: (theme: Theme) => void
}

export type Theme = {
  brand: string
  themeName: string
  mode: string
}

export type Themes = {
  [key: string]: string
}
