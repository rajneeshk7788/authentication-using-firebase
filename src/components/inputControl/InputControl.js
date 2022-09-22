import React from 'react'
import classes from './InputControl.module.css'

const InputControl = (props) => {
  return (
    <div className={classes.container}>
        {props.label && <label>{props.label}</label>}
        <input type="text" {...props}/>
    </div>
  )
}

export default InputControl