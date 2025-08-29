import React from 'react'
import './Button.css'

const Button = (props) => {
  return (
    <button className='btn' onClick={props.getdata}>Click to get a joke</button>
  )
}

export default Button