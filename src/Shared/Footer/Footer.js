import React from 'react';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Box, Container, Divider } from '@mui/material';
const Footer = () => {
    return (
        <Box sx={{backgroundColor:'purple', borderRadius: "5px"}}>

            <Container> 
            <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
            <Typography sx={{textAlign:'left', my:5, fontWeight: 600, color:'whitesmoke'}} variant="h5" component="div" gutterBottom>
      NAHAL
      </Typography>
            <Typography sx={{textAlign:'justify',  fontWeight: 300, color:'whitesmoke'}} variant="h6" component="div" gutterBottom>
            Nahal means bee. Our identity is hidden in our name. After collecting the good from the crowd of thousands of adulterants, Nahal started the activity with the responsibility of delivering it to the dear customer
      </Typography>
        </Grid>
        <Divider orientation="vertical" flexItem>
    ***
  </Divider>
            <Grid item xs={12} md={4}>
            <Typography sx={{textAlign:'right', mt:5, fontWeight: 500, color:'whitesmoke'}} variant="h5" component="div" gutterBottom>
            CONTACT US
      </Typography>
            <Typography sx={{textAlign:'right',  mt:5, fontWeight: 300, color:'whitesmoke'}} variant="h6" component="div" gutterBottom>
           We Are Available in 24/7/365
      </Typography>
            <Typography sx={{textAlign:'right',  fontWeight: 300, color:'whitesmoke'}} variant="h6" component="div" gutterBottom>
           Phone: +880 1812345678
      </Typography>
            <Typography sx={{textAlign:'right',  fontWeight: 300, color:'whitesmoke'}} variant="h6" component="div" gutterBottom>
          Email: worldsurviver@gmail.com
      </Typography>
        </Grid>
            </Grid>
            <Divider />

            <Grid sx={{justifyContent:'center'}} container spacing={2}>
            <Typography sx={{textAlign:'center', mt:5, fontWeight: 400, color:'whitesmoke'}} variant="h6" component="div" gutterBottom>
            ©Developed By: Mainul Hasan Sakib || 2022-23
      </Typography>
                </Grid>
            </Container>
            
        </Box>
    );
};

export default Footer;