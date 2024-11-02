import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'

const Listmap = () => {
    var[data,setdata]=useState("")
    var[inp,setinp]=useState(["ICT"])
    const intput=(e)=>{
        setdata(e.target.value)
        console.log(data)
    }
    const add=()=>{
        setinp([...inp,data])//spread operator
        console.log(inp)
        setdata("")
    }
  return (
    <div><br></br>
       <TextField variant='filled' label="Enter your name" onChange={intput} value={data}/><br></br><br></br>
       <Button variant='contained' onClick={add}>Submit</Button>
       <ul>
        {inp.map((v)=>{
            return(
                <li>{v}</li>
            )
        })}
       </ul>
    </div>
  )
}

export default Listmap