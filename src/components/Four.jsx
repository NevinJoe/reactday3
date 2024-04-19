import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'

const Four = () => {
    var t=[{name:"Nevin",age:20,place:"Angamaly"},
    {name:"Alwin",age:20,place:"Puliyanam"},
    {name:"Melbin",age:20,place:"Thrissur"}]
  return (   
    <div>
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Age</TableCell>
                        <TableCell>Place</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {t.map((value,index)=>{
                        return <TableRow key={index}>
                            <TableCell>{value.name}</TableCell>
                            <TableCell>{value.age}</TableCell>
                            <TableCell>{value.place}</TableCell>
                        </TableRow>
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    </div>
  )
}

export default Four
