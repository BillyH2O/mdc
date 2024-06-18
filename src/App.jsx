import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import LoginPage from './components/pages/LoginPage'
import { Route, Routes } from 'react-router-dom'
import ErrorPage from './components/pages/ErrorPage'
import Logo from './components/Logo'
import LandingPage from './components/pages/LandingPage'
import Dashboard from './components/pages/Dashboard'

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage/>} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/dashboard/:username" element={<Dashboard/>} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  )
}

export default App;
