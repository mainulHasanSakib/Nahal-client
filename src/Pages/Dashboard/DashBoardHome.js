import { Container, Typography } from '@mui/material';
import React from 'react';

const DashBoardHome = () => {
    return (
       
        <Container sx={{ flexGrow: 1 }} >
        <Typography sx={{textAlign:'center', my:5, fontWeight: 600, color:'purple'}} variant="h3" component="div" gutterBottom>
      WELCOME TO DASHBOARD
      </Typography>
      </Container>
    );
};

export default DashBoardHome;