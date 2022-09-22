import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import InputControl from '../inputControl/InputControl'
import classes from './SignUp.module.css'
import {createUserWithEmailAndPassword, updateProfile} from 'firebase/auth'
import { auth } from '../../firebase'


 const LogIn = () => {
  const navigate = useNavigate()

  const [values,setValues]=useState({
    name:'',
    email:'',
    pass:''

  })

  const [errorMsg,setErrorMsg]=useState()
  const [submitButtonDesable,setSubmitButtonDesable]=useState(false)

  const handleSubmit=()=>{
    if(!values.name || !values.email || !values.pass){
      setErrorMsg("All Field are required")
    }else{

      setErrorMsg(" ")
      setSubmitButtonDesable(true);
      createUserWithEmailAndPassword(auth, values.email,values.pass)
      .then(async(res)=>{
        setSubmitButtonDesable(false)
        const user=res.user
        await updateProfile(user,{
          displayName:values.name})
          navigate('/login',{replace:true})
        console.log(user);
      }).catch((err)=>{
        setSubmitButtonDesable(false)
        setErrorMsg(err.message)
      })
    }

  }

  return (
    <div className={classes.container}>
      <div className={classes.container_item} >
        <h1>Sign Up Page</h1>
        <InputControl label="Name" placeholder="Enter Name"
        onChange={(e)=>setValues((prev)=>({...prev,name:e.target.value}))}/>
        <InputControl label="Email" placeholder="Enter Eamil Address"
        onChange={(e)=>setValues((prev)=>({...prev,email:e.target.value}))}/>
        <InputControl label="Password" placeholder="Enter Password"
        onChange={(e)=>setValues((prev)=>({...prev,pass:e.target.value}))}/>
        <div className={classes.footer}>
          <b>{errorMsg}</b>
          <button onClick={()=>handleSubmit()} disabled={submitButtonDesable}>SignUp</button>
          <p>
            Already have an account?{" "}
            <span>
              <Link to="/login">Login</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default LogIn