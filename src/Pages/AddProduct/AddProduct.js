import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import React from 'react';
import axios from 'axios';
import { useForm, Controller } from "react-hook-form";



const AddProduct= () => {
    const { control, handleSubmit, reset } = useForm({
        defaultValues: {
           name:'',
           description:'',
           url:'',
           price:''
          }
      });
    const onSubmit = data => {
        axios.post("http://localhost:5000/products", data)
        .then(res=>{
        
            if(res.data.insertedId){
               alert('Product Added Successfully')
                reset()
              }
            
        })
    }


    return (
        <Container sx={{ flexGrow: 1 }} >
<Typography
 sx={{textAlign:'center', my:5, fontWeight: 600, color:'purple'}} variant="h3" component="div" gutterBottom>
       ADD A PRODUCT
      </Typography>
      <Grid sx={{my:5}}container spacing={2}>
      <Grid item  xs={12} md={6}>
      <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="name"
        type='text'
        control={control}
        render={({ field }) =><TextField { ...field }  sx={{width:"75%", m:1}} label="Name" variant="outlined" />  }
      />
      <Controller
        name="description"
        type='text'
        control={control}
        render={({ field }) =><TextField { ...field } sx={{width:"75%", m:1}} label="Description" variant="outlined" />  }
      />
      <Controller
        name="url"
        type='text'
        control={control}
        render={({ field }) =><TextField { ...field }  sx={{width:"75%", m:1}} label="Image URL" variant="outlined" />  }
      />
      <Controller
        name="price"
        type='number'
        control={control}
        render={({ field }) =><TextField { ...field }  sx={{width:"75%", m:1}} label="Price" variant="outlined" />  }
      />

      <Button variant='contained'
      type="submit" 
      color={'secondary'}
sx={{width:"75%", m:1,  }}>
    Add A PRODUCT
</Button>
       
      </form>
          </Grid>  
      <Grid item  xs={12} md={6}>
      {/* <img style={{width:'400px', height:'400px', borderRadius:'5px'} } src={banner} alt="" /> */}
      </Grid>
      </Grid>
        </Container>
    );
};

export default AddProduct;