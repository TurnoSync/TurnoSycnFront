import reactLogo from '/assets/react.svg'
import typescriptLogo from '/assets/typescript.svg'
import '@css/App.css'

function App() {
  return (
    <>
      <div>
        <h1>TurnoSync</h1>
        <h2>Desarrollado con React y TypeScript</h2>
        <a href="https://react.dev" target="_blank noopener">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://www.typescriptlang.org/docs/" target="_blank noopener">
          <img src={typescriptLogo} className="logo" alt="React logo" />
        </a>
      </div>
    </>
  )
}

export default App
