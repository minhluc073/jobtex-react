import React from 'react';
import PropTypes from 'prop-types';
import Header2 from '../components/header/Header2';
import Breadcrumb from '../components/breadcrumb';
import Footer from '../components/footer';
import ShopS1 from '../components/shop/ShopS1';
import dataProduct from '../assets/fakeData/dataProduct';

Shop.propTypes = {
    
};

function Shop(props) {
    return (
        <div>
            <Header2 />

            <Breadcrumb title='Shop' />

            <ShopS1 data={dataProduct} />

            <Footer />
            
        </div>
    );
}

export default Shop;