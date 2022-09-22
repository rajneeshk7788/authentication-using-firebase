import React, {useEffect, useState} from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './home/Home'
import SignUp from './signup/SignUp'
import LogIn from './login/LogIn'
import { auth } from '../firebase'

const AllRouters = () => {
const [userName, setUserName] = useState('');
console.warn(userName);

  useEffect(() => {
    auth.onAuthStateChanged((user)=>{
      if(user){
        setUserName(user.display)
      }else{
        setUserName(" ")
      }
      console.log(user);
    })
  }, [])
  
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home name = {userName}/>}/>
            <Route path='/signup' element={<SignUp/>}/>
            <Route path='/login' element={<LogIn/>}/>
        </Routes>
    </div>
  )
}

export default AllRouters