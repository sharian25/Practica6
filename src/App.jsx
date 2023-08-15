import { useState } from 'react'
import Calcular from './components/Calcular'
import './App.css'


function App() {
  const [result, setResult] = useState(0)

  return (
    <>
    <h1>🔻CALCULATOR🔻</h1>
    <h1>{result}</h1>
      <Calcular
      result = {result}
      setResult={setResult}
      
      />
    </>
  )
}

export default App
