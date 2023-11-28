import "sanitize.css"
import Top from './components/page/Top/Top'
import "./App.css"
import Synopsis from "./components/page/Synopsis/Synopsis"
import HowToPlay from "./components/page/HowToPlay/HowToPlay"
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <>
      <div className="app-background">
        <Routes>
          <Route path="/" element={<Top />}/>
          <Route path="/synopsis" element={<Synopsis />}/>
          <Route path="/howToPlay" element={<HowToPlay />}/>
        </Routes>
      </div>
    </>
  )
}

export default App
