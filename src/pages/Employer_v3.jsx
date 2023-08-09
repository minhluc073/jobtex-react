import React from 'react';
import PropTypes from 'prop-types';
import Header2 from '../components/header/Header2';
import Breadcrumb from '../components/breadcrumb';
import EmpSec3 from '../components/employer/EmpSec3';
import dataEm from '../assets/fakeData/dataEmployers';
import Footer from '../components/footer';

Employer_v3.propTypes = {
    
};

function Employer_v3(props) {
    return (
        <div>
            <Header2 />
            <Breadcrumb title='Employers' />
            <EmpSec3 data={dataEm} />
            <Footer />
            
        </div>
    );
}

export default Employer_v3;