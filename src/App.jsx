import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Gyveneth Ruzhanne Bartolaba</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Clickable Count Up to {count}
        </button>
        <p>
          Web System and Development
        </p>
      </div>
      <p className="read-the-docs">
        Vite + React Demo Repo
      </p>
    </>
  )
}

export default App
