import React from 'react'

const button = ({color,text,onClick}) => {
  return (
    <button style= {{backgroundColor: color}} className="btn" onClick={onClick}>{text}</button>
  )
}


export default button