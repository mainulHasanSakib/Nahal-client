import React from 'react';
import Footer from '../../../Shared/Footer/Footer';
import Navigation from '../../../Shared/Navigation/Navigation';

import Products from '../Product/Products';
import About from './About';
import Banner from './Banner';


const Home = () => {
    return (
        <div>
           <Navigation/>
           <Banner/>
           <About/>
           <Products/>
           
           <Footer/>
           
        </div>
    );
};

export default Home;