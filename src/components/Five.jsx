import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material'
import React, { useState } from 'react'

const Five = () => {
    var [inputs,setInputs]=useState([]);
    var [data,setData]=useState([]);

    const inputHandler=(e)=>{
        setInputs({...inputs,[e.target.name]:e.target.value})
        console.log(inputs)
    }
    const btnClicked=()=>{
        setData((data)=>[...data,inputs])  
        console.log(data)
    }
  return (
    <div style={{margin:'5%'}}>
        <TextField variant='outlined' label='Name' name='sname' onChange={inputHandler}/> &nbsp;
        <TextField variant='outlined' label='Age' name='age' onChange={inputHandler}/>
        <br /><br />
        <TextField variant='outlined' label='Place' name='place' onChange={inputHandler}/> &nbsp;
        <TextField variant='outlined' label='Phone No' name='phoneno' onChange={inputHandler}/>
        <br /><br />
        <Button variant='contained' onClick={btnClicked}>Submit</Button>
        <TableContainer style={{margin:'5%'}}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Age</TableCell>
                        <TableCell>Place</TableCell>
                        <TableCell>Phone No</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {data.map((v,i)=>{
                        return (
                        <TableRow key={i}>
                            <TableCell>{v.sname}</TableCell>
                            <TableCell>{v.age}</TableCell>
                            <TableCell>{v.place}</TableCell>
                            <TableCell>{v.phoneno}</TableCell>
                        </TableRow>)
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    </div>
  )
}

export default Five
