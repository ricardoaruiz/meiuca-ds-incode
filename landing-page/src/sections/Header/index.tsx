import React from 'react'
import { useTheme } from '../../context/ThemeContext'

import '@ricardoaruiz/design-system-core/dist/components/header'

import './styles.scss'

export const Header = () => {
  const { theme, changeTheme } = useTheme()

  const handleThemeChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const newTheme = { ...theme, themeName: event.target.value }
      changeTheme(newTheme)
    },
    [changeTheme, theme]
  )

  const handleModeChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const newTheme = { ...theme, mode: event.target.value }
      changeTheme(newTheme)
    },
    [changeTheme, theme]
  )

  return (
    <div className="grid grid-cols-12">
      <div className="col-span-12">
        <ds-header>
          <div className="container-options">
            <div className="container-options__group">
              <label>
                <input
                  type="radio"
                  id="themeOption"
                  name="themeOption"
                  value="tema-1"
                  checked={theme.themeName === 'tema-1'}
                  onChange={handleThemeChange}
                />{' '}
                Tema 1
              </label>
              <label>
                <input
                  type="radio"
                  id="themeOption"
                  name="themeOption"
                  value="tema-2"
                  checked={theme.themeName === 'tema-2'}
                  onChange={handleThemeChange}
                />{' '}
                Tema 2
              </label>
            </div>
            <div className="container-options__group">
              <label>
                <input
                  type="radio"
                  id="modeOption"
                  name="modeOption"
                  value="light"
                  checked={theme.mode === 'light'}
                  onChange={handleModeChange}
                />{' '}
                Light
              </label>
              <label>
                <input
                  type="radio"
                  id="modeOption"
                  name="modeOption"
                  value="dark"
                  checked={theme.mode === 'dark'}
                  onChange={handleModeChange}
                />{' '}
                Dark
              </label>
            </div>
          </div>
        </ds-header>
      </div>
    </div>
  )
}
