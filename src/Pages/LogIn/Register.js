import React from 'react';
import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import { useForm, Controller } from "react-hook-form";
import UseAuth from '../../Hooks/useAuth';
import {  useLocation, useHistory } from "react-router-dom";
import Navigation from '../../Shared/Navigation/Navigation';
import about from '../../Images/about.jpg'
const Register = () => {
  const {user,  registerUser,AuthError, isLoading}=UseAuth();
  const location= useLocation()
  const history = useHistory();

    const { control, handleSubmit, reset } = useForm({
        defaultValues: {
          name:'',
          email: '',
          password:''
        }
      });
      const onSubmit =(data ,e) => {
        registerUser( data.email, data.password, data.name, location, history)
        e.preventDefault();
         reset()  
         
      }
      
    return (<>
    <Navigation/>
        <Container sx={{ flexGrow: 1 }} >
        <Typography sx={{textAlign:'center', my:5, fontWeight: 600, color:'purple'}} variant="h3" component="div" gutterBottom>
       REGISTER
      </Typography>
    <Grid sx={{my:5}}container spacing={2}>
  <Grid sx={{mt:5}} item xs={12} md={6}>
 {!isLoading && <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="name"
        control={control}
        render={({ field }) =><TextField {...field}   sx={{width:"75%", m:1}} type="text" label="Name" variant="outlined" /> }
      />
      <Controller
        name="email"
        control={control}
        render={({ field }) =><TextField {...field} sx={{width:"75%", m:1}} type="email" label="Email" variant="outlined" /> }
      />
      <Controller
        name="password"
        control={control}
        render={({ field }) =><TextField {...field} sx={{width:"75%", m:1}} type="password" label="Password" variant="outlined"
       /> }
      />
      
      <Button variant='contained'
      type="submit" 
      color="secondary"
    sx={{width:"75%", m:1 }}>
    Register
</Button>
    </form>
 
 } 
    {isLoading && <CircularProgress />}
{user?.email && <Alert severity="info">Congratulation! Account Created SuccessFully.</Alert>}
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

export default Register;