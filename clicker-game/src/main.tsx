import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter as Router } from 'react-router-dom'
import { GameProvider } from './components/model/GameContext.tsx'
import { UserDataProvider } from './components/model/UserDataContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <UserDataProvider>
        <GameProvider>
          <App />
        </GameProvider>
      </UserDataProvider>
    </Router>
  </React.StrictMode>
)
