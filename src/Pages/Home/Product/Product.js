import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';

const Product = ({product}) => {
    
    return (
        <Grid  item sm={12} md={4} >
              <Card sx={{ maxWidth: 345, height:600 }}>
      <CardMedia
        component="img"
        alt="NAHAL"
        height="240"
        image={product.url}
      />
      <CardContent sx={{  height:300 }}>
        <Typography sx={{textAlign:'center', mt:3, fontWeight: 600,height:100, color:'purple'}} gutterBottom variant="h4" component="div">
         Perfume: {product.name}
        </Typography>
        <Typography sx={{textAlign:'center',  fontWeight: 400, color:'purple'}} gutterBottom variant="h6" component="div">
         Price:${product.price}
        </Typography>
        <Typography sx={{textAlign:'justify', }} variant="body2" color="text.secondary">
          {product.description}
        </Typography>
      </CardContent>
      <CardActions>
        
      <Button variant='outlined'
      type="submit" 
      color={'secondary'}
      sx={{width:"50%", m:1,  }}>
            BUY NOW
        </Button>
      </CardActions>
    </Card>
        </Grid>
    );
};

export default Product;