import React from 'react';
import PropTypes from 'prop-types';
import Header2 from '../components/header/Header2';
import Footer from '../components/footer';
import Breadcrumb from '../components/breadcrumb';

AboutUs.propTypes = {
    
};

function AboutUs(props) {
    return (
        <div>
            <Header2 />
            <Breadcrumb title='About Us' />

            <Footer />
            
        </div>
    );
}

export default AboutUs;