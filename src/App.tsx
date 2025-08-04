import { useState } from 'react'
import { PockemonPrev } from './components/PokemonPrev'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <PockemonPrev />
    </div>
  )
}

export default App
