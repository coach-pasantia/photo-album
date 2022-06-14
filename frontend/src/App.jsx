/* React */
import React from 'react'

/* React Router DOM */
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

/* Styles */
import './App.css'

/* Components */
import Navbar from './components/Navbar'

/* Containers */
import Home from './containers/Home'

function App () {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App
