import React, { useState } from 'react'
import styled from 'styled-components'

export const Todos = (props) => {
    const[ state, setState]= useState("")
    console.log(state);

    function inputHandle (e){
        setState(e.target.value) 
    }

    function buttonHandle(){
        const obj={
            name:state,
            id:Math.random(),
        }
        props.onSave(obj)
        setState("")

    }
  return (
    <div>
        <InputStyle value={state} onChange={inputHandle} type="text" />
        <ButtonStyle onClick={buttonHandle}>ADD</ButtonStyle>
    </div>
  )
}
const InputStyle = styled.input`
    padding: 10px;
    outline :none ;
    width: 250px;
    
`

const ButtonStyle = styled.button`
    padding: 10px;
    background-color: green;
    width: 90px;
    color: white;
`