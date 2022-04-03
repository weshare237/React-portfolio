import logo from './logo.svg'
import './App.scss'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path='/' element={<Layout />} />
      </Routes>
    </React.Fragment>
  )
}

export default App
