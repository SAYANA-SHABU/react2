import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'

const Newtable = () => {
var[use,SetUse]=useState([])
axios.get("https://jsonplaceholder.typicode.com/posts")
.then((res)=>{
    SetUse(res.data)
    console.log(use)

})
  return (
    <div>
        <TableContainer sx={{border:'2px solid black',borderRadius:'9px'}}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell sx={{fontSize:'32px',fontFamily:'Bernard MT Condensed'}}>UserId</TableCell>
                        <TableCell sx={{fontSize:'32px',fontFamily:'Bernard MT Condensed'}}>Id</TableCell>
                        <TableCell sx={{fontSize:'32px',fontFamily:'Bernard MT Condensed'}}>Title</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {use.map((valu)=>{
                        return(
                    <TableRow>
                        <TableCell sx={{fontFamily:'Century Schoolbook',fontSize:'19px'}}>{valu.userId}</TableCell>
                        <TableCell sx={{fontFamily:'Century Schoolbook',fontSize:'19px'}}>{valu.id}</TableCell>
                        <TableCell sx={{fontFamily:'Century Schoolbook',fontSize:'19px'}}>{valu.title}</TableCell>
                    </TableRow>
                        )
                    })}
                
                </TableBody>
            </Table>
        </TableContainer>
    </div>
  )
}

export default Newtable