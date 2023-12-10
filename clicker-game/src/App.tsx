import "sanitize.css"
import Top from './components/page/Top/Top'
import "./App.css"
import Synopsis from "./components/page/Synopsis/Synopsis"
import HowToPlay from "./components/page/HowToPlay/HowToPlay"
import { Routes, Route } from "react-router-dom"
import Game from "./components/page/Game/Game"
import Ending from "./components/page/Ending/Ending"
import PrivateRoute from "./components/functional/PrivateRoute"

function App() {
  return (
    <>
      <div className="app-background">
        <Routes>
          <Route path="/" element={<Top />}/>
          <Route path="/synopsis" element={<Synopsis />}/>
          <Route path="/howToPlay" element={<HowToPlay />}/>
          <Route path="/game" element={<Game />}/>
          <Route path="/ending" element={
            <PrivateRoute
              isAuthenticated={false}
              path="/"
            >
              <Ending />
            </PrivateRoute>
          } />
        </Routes>
      </div>
    </>
  )
}

export default App
