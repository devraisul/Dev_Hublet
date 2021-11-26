import React from 'react';
import Contact from '../../Contact/Contact';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';
import Reviews from '../Review/Reviews';

const Home = () => {
    return (
        <div>
            <Header/>
           <Banner></Banner>
           <Products></Products>
           <Reviews/>
           <Contact></Contact>
           <Footer></Footer>
        </div>
    );
};

export default Home;