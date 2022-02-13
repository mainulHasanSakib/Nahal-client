import { Container, Grid,  Typography } from '@mui/material';
import React from 'react';
import about from '../../../Images/about.jpg'
const About = () => {
    return (
     
        
        <Container   sx={{ flexGrow: 1, borderRadius: "5px" }}>
             <Typography sx={{textAlign:'center', my:5, fontWeight: 600, color:'purple'}} variant="h2" component="div" gutterBottom>
        ABOUT US
      </Typography>
      <Grid sx={{my:5, py:5}} container spacing={5}>
               
               <Grid style={{ textAlign:'justify', color:'purple'}} item xs={12} md={6}>
                 
               <Typography sx={{ fontWeight: 600, color:'purple' }} variant="h4" component="div" gutterBottom>
        How We Run
      </Typography>
      <Typography  variant="h5" sx={{my:3, color:'black'}}component="div" gutterBottom>
      Nahal means bee. Our identity is hidden in our name. After collecting the good from the crowd of thousands of adulterants, Nahal started the activity with the responsibility of delivering it to the dear customer; It is like a bee that reaches us after extracting honey from thousands of flowers. We are leading the way in all aspects of life starting from Sunnah Lifestyle, Food and Key Knowledge. Currently "Nahal Perfume" is one of our richest projects. "Nahal Perfume" is in the top position of love of all customers at home and abroad.
      </Typography>
                 
               </Grid>
              
                  <Grid  item sm={12} md={6} >
                  <img  style={{width:'450px', height:'450px', borderRadius:'5px'} } src={about} alt="Nahal" />
                  </Grid>
               
             </Grid>
        </Container>
            
        
    );
};

export default About;