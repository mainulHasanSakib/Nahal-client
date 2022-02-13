import { Box,  Container,  Grid, Typography } from '@mui/material';
import React from 'react';
import banner from '../../../Images/banner.jpg'
const bannerBg={
    background: `url(${banner})`,
    backgroundSize:'cover',
    height:800
  }


const Banner = () => {
    return (
        <Box style={bannerBg}  sx={{ flexGrow: 1 }}>


      
         
      <Typography sx={{textAlign:'center', py:5, fontWeight: 600, color:'purple'}} variant="h1" component="div" gutterBottom>
        WELCOME TO NAHAL
      </Typography>
      <Container>
         <Grid container spacing={2}>
          <Grid  item xs={12} md={6}>
          <Typography sx={{textAlign:'center',py:5, fontWeight: 600, color:'purple' }} variant="h3" component="div" gutterBottom>
          THE QUALITY OF BEES,<br/>OUR CHARACTERISTICS 
      </Typography>
          
        </Grid> 
        </Grid> 
      </Container>
      

        </Box>
    );
};

export default Banner;