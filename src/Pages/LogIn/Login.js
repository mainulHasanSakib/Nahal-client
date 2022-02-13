import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React from 'react';
import { useForm, Controller } from "react-hook-form";
import UseAuth from '../../Hooks/useAuth';
import {  useLocation, useHistory } from "react-router-dom";
import Navigation from '../../Shared/Navigation/Navigation';
import about from '../../Images/about.jpg'
import { NavLink } from 'react-router-dom';
const Login = () => {
  const location= useLocation()
    const history = useHistory();
  const {user, loginUser,AuthError, isLoading}=UseAuth();
    const { control, handleSubmit , reset} = useForm({
        defaultValues: {
          email: '',
          password:''
        }
      });
      const onSubmit = data =>  {
        loginUser(data.email, data.password, location, history )
         reset()   
      }
    
    return (
      <>
      <Navigation/>
        <Container sx={{ flexGrow: 1 }} >
        <Typography sx={{textAlign:'center', my:5, fontWeight: 600, color:'purple'}} variant="h3" component="div" gutterBottom>
        LOG IN
      </Typography>
    <Grid sx={{my:5}}container spacing={2}>
  <Grid sx={{mt:5}} item xs={12} md={6}>
  {!isLoading && <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="email"
      
        control={control}
        render={({ field }) =><TextField sx={{width:"75%", m:1}}  {...field} id="outlined-basic"   type="email" label="Email" variant="outlined" /> }
      />
      <Controller
        name="password"
        
        control={control}
        render={({ field }) =><TextField 
        sx={{width:"75%", m:1}}  {...field} 
        id="outlined-password-input"
        label="Password"
        type="password" /> }
      />
      
      <Button variant='contained'
      type="submit" 
      color="secondary"
     sx={{width:"75%", m:1 }}>
    Log In
</Button>
    </form>}
    <NavLink
                            style={{ textDecoration: 'none' }}
                            to="/register">
                            <Button variant="text">New User? Please Register</Button>
                        </NavLink>
    {isLoading && <CircularProgress />}
{user?.email && <Alert severity="info">Congratulation! Logged In SuccessFully.</Alert>}
{AuthError && <Alert severity="error">{AuthError}</Alert>}
  </Grid>
  <Grid  item sm={12} md={6} >
                  <img  style={{width:'450px', height:'450px', borderRadius:'5px'} } src={about} alt="Nahal" />
                  </Grid>
               
  </Grid>
  

  </Container>
  </>  
    );
};

export default Login;