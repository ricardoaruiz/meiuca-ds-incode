import { TestComponent } from '@ricardoaruiz/design-system-team'

import './App.scss'

function App() {
  return (
    <div>
      <TestComponent theme='primary' />

      <div className="container grid grid-cols-12 gap-x-1 md:gap-x-2 lg:gap-x-3">
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
    </div>
  )
}

export default App