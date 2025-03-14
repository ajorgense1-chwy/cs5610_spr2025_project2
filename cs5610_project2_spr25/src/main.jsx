import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import TicTacToe from './TicTacToe.jsx'
import TicTacToeProvider from './TicTacToeProvider.jsx'

//  return App()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TicTacToeProvider>
      <TicTacToe />
    </TicTacToeProvider>
  </StrictMode>,
)
