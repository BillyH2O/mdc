import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import LoginPage from './components/pages/LoginPage'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      {/*<Route path="*" element={<NotFoundPage />} />*/}
    </Routes>
  )
}

export default App;
