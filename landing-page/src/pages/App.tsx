import { TestComponent } from '@ricardoaruiz/design-system-team'
import { useTheme } from '../context/ThemeContext'
import { Header } from '../sections/Header'

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
      
    </div>
  )
}

export default App