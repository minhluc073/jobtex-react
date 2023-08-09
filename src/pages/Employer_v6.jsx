import React from 'react';
import PropTypes from 'prop-types';
import Header2 from '../components/header/Header2';
import Map from '../components/map';
import EmpSec1 from '../components/employer/EmpSec1';
import dataEm from '../assets/fakeData/dataEmployers';
import Footer from '../components/footer';

Employer_v6.propTypes = {
    
};

function Employer_v6(props) {
    return (
        <div>
            <Header2 />
            <Map />
            <EmpSec1 data={dataEm} className='inner-employer-section-three' />
            <Footer />
            
        </div>
    );
}

export default Employer_v6;