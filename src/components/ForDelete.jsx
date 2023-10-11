import React from 'react'

const ForDelete = (props) => {
  return (
    <div>
        <h1> {props.name} </h1>
        <button onClick={()=>{props.onDelete(props.id)}}>Delete</button>
    </div>
  )
}

export default ForDelete