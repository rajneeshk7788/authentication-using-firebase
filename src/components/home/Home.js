import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { auth } from '../../firebase'
import classes from './Home.module.css'


const Home = () => {
  const [userName, setUserName] = useState('');


  useEffect(() => {
    // const data={<Link to='/login'>Click here to Login</Link>}
    // console.log(`auth `, auth);
    if (auth?.currentUser?.displayName) {
      setUserName(auth.currentUser.displayName)
    }
  }, [])
  return (
    <div className={classes.container}>
      <h1>{userName ? `Welcome  ${userName}` : <Link to='/login'>Click here to Login</Link> }</h1>
    </div>
  )
}

export default Home