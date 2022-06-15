/* React */
import React from 'react'
import { Routes, Route } from 'react-router-dom'

/* Styles */
import './styles/App.css'

/* Components */
import Navbar from '../components/Navbar'

/* Containers */
import Home from '../containers/Home'

/* Routes */
import PrivateRoute from './Private.routes'

function App () {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<PrivateRoute component={Home} />} />
        <Route exact path='/login' element={<h1>Login Please</h1>} />
      </Routes>
    </>
  )
}

export default App
