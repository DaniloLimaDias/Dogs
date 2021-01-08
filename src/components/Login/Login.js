import React from 'react'
import {Routes, Route} from 'react-router-dom'
import LoginForm from './LoginForm'
import LoginCreate from './LoginCreate'
import LoginPasswordLost from './LoginPasswordLost'
import LoginPasswordReset from './LoginPasswordReset'

const Login = () => {
  return (
    <div>
     <Routes>
        <Route path="criar" element={<LoginCreate/>}/>
        <Route path="perdeu" element={<LoginPasswordLost/>}/>
        <Route path="resetar" element={<LoginPasswordReset/>}/>
        <Route path="/" element={<LoginForm/>}/>
     </Routes>
    </div>
  )
}

export default Login
