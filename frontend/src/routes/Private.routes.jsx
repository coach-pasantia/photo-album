/* React */
import React from 'react'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({ component: RouterComponent }) => {
  const isAuthenticated = true

  return (
    isAuthenticated ? <RouterComponent /> : <Navigate to='/login' />
  )
}

export default PrivateRoute
