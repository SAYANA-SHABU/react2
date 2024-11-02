import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
const Usertable = () => {
var [user,SetUser]=useState([])
axios.get("https://jsonplaceholder.typicode.com/users")
.then((response)=>{
    SetUser(response.data)
    console.log(user)
})
  return (
    <div>
        <TableContainer sx={{border:'2px solid black',borderRadius:'9px'}}>
            <Table>
                <TableHead>
                    <TableRow >
                        <TableCell sx={{fontSize:'32px',fontFamily:'Bernard MT Condensed'}} >Name</TableCell>
                        <TableCell sx={{fontSize:'32px',fontFamily:'Bernard MT Condensed'}}>E-mail</TableCell>
                        <TableCell sx={{fontSize:'32px',fontFamily:'Bernard MT Condensed'}}>City</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {user.map((val)=>{ //mapfunction
                    return(
                    <TableRow>
                        <TableCell sx={{fontFamily:'Century Schoolbook',fontSize:'19px'}}>{val.name}</TableCell>
                        <TableCell sx={{fontFamily:'Century Schoolbook',fontSize:'19px'}}>{val.email}</TableCell>
                        <TableCell sx={{fontFamily:'Century Schoolbook',fontSize:'19px'}}>{val.address.city}</TableCell>
                    </TableRow>
                    )
                })

                }
                </TableBody>
            </Table>
        </TableContainer>
    </div>
  )
}

export default Usertable