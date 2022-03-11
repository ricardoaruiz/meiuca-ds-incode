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
    >
      <Header />
      
      <div className="main-container">
        <TestComponent theme='primary' />
      </div>
      

      <div className="
        main-container
        container 
        mt-8

        grid 
        grid-cols-1 
        gap-1 

        md:gap-2 
        md:grid-cols-6

        lg:gap-3 
        lg:grid-cols-12
      ">
        <div>01</div>
        <div>02</div>
        <div>03</div>
        <div>04</div>
        <div>05</div>
        <div>06</div>
        <div>07</div>
        <div>08</div>
        <div>09</div>
        <div>10</div>
        <div>11</div>
        <div>12</div>
      </div>

      {/* https://tailwindcss.com/docs/grid-template-rows#arbitrary-values */}
      <div className="
        main-container
        container 

        mt-8

        grid 
        gap-1 
        grid-cols-[repeat(auto-fit,_minmax(100px,_auto))]
      ">
        <div className="col-span-2">01</div>
        <div>02</div>
        <div className="col-span-2">03</div>
        <div>04</div>
        <div>05</div>
        <div>05</div>
        <div>06</div>
      </div>
    </div>
  )
}

export default App