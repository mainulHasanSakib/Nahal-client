import { Container, Typography } from '@mui/material';
import axios from 'axios';
import React from 'react';

import { useForm } from "react-hook-form";
const AddAdmin = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        
        
        axios.put('https://afternoon-falls-48322.herokuapp.com/users/admin', data)
        .then(res =>{
         
            if(res.data.modifiedCount){
                alert('Admin added successfully')
                reset()
            }
        })
            
            }
        
    
    return (
        <Container sx={{ flexGrow: 1 }} >

<Typography
 sx={{textAlign:'center', my:5, fontWeight: 600, color:'purple'}} variant="h3" component="div" gutterBottom>
       ADD ADMIN
      </Typography>

        <form onSubmit={handleSubmit(onSubmit)}>
      
                    <input  type="email" placeholder="Type Admin Email" {...register("email")} /> <br/>
                    <input  value="Make Admin" type="submit" /><br/>
    </form>    
        </Container>
        
        
        
        
        
    );

}

export default AddAdmin;