import React, { useState } from 'react';
import { Container, Grid, Typography } from '@mui/material';
import { useEffect } from 'react';
import Product from './Product';

const Products = () => {
    const[products, setProducts]=useState([]);
    useEffect(()=>{
        fetch('https://afternoon-falls-48322.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    },[])
    return (
        <Container  sx={{ flexGrow: 1 }}>
            <Typography sx={{textAlign:'center', my:5, fontWeight: 600, color:'purple'}} variant="h3" component="div" gutterBottom>
      OUR PERFUME
      </Typography>
      <Grid sx={{my:5, py:5}} container spacing={2}>
      
{
    products.map(product=><Product
         key={product._id}
                  product={product}>
    </Product>
    )
}
     
      </Grid>
        </Container>
    );
};

export default Products;