import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = (props) => {
  return (
    <>
      <div className='nav'>
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to='signup'>SignUp</Link>
        </div>
        <div>
          <Link to='login'>LogIn</Link>
        </div>
      </div>
     
    </>
  )
}

export default NavBar