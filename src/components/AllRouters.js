import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './home/Home'
import SignUp from './signup/SignUp'
import LogIn from './login/LogIn'

const AllRouters = () => {

  
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/signup' element={<SignUp/>}/>
            <Route path='/login' element={<LogIn/>}/>
        </Routes>
    </div>
  )
}

export default AllRouters