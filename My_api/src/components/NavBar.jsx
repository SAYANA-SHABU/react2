import { AppBar, Button, Grid, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'


const NavBar = () => {
  return (
    <div>
       
            
            <AppBar sx={{background: 'rgb(19,64,96)',
                background:' linear-gradient(90deg, rgba(19,64,96,1) 0%, rgba(113,181,137,1) 52%, rgba(36,81,87,1) 100%)'}}>
            <Toolbar>
            <Grid container spacing={1}>
            <Grid item xs={1}>
                <Typography sx={{fontFamily:'Bernard MT Condensed',fontSize:'38px'}}>My_Api</Typography>
                </Grid>
                <Grid item xs={8}>
                    </Grid>
                <Grid item xs={1}>
             <Link to='/t1'><Button variant='contained' sx={{backgroundColor:'white',color:'black',marginTop:'10px'}}>API USER-I</Button></Link>
               </Grid>
               <Grid item xs={1}>
            <Link to='/t2'> <Button variant='contained' sx={{backgroundColor:'white',color:'black',marginTop:'10px'}}>API USER-II</Button></Link>
               </Grid>
               <Grid item xs={1}>
             <Link to='/t3'><Button variant='contained' sx={{backgroundColor:'white',color:'black',marginTop:'10px'}}>Listmap</Button></Link>
               </Grid>
               </Grid>
            </Toolbar>
        </AppBar>
        
       <br></br><br></br>
    </div>
  )
}

export default NavBar