import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const One = () => {
    var [data,setData]=useState()
    var [text,setText]=useState()
    const inputHandler=(e)=>{
        setData(e.target.value)
    }
    const btnClicked=()=>{
        setText(data)
    }
  return (
    <div style={{margin:'10%'}}>
        <Typography variant='h3'>{text}</Typography>
        <TextField variant='outlined' label='Name' onChange={inputHandler}/>
        <br />
        <br />
        <Button variant='contained' onClick={btnClicked}>Click</Button>
    </div>
  )
}

export default One
