import { useTheme } from '../context/ThemeContext'
import { Header } from '../sections/Header'
import { HomeBanner } from '../sections/HomeBanner'

import './App.scss'

function App() {
  const { theme } = useTheme()

  return (
    <div
      brand={theme.brand}
      theme={theme.themeName}
      mode={theme.mode}
      className="pt-24"
    >
      <Header />
      <HomeBanner />
    </div>
  )
}

export default App
