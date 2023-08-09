import React from 'react';
import PropTypes from 'prop-types';
import Header2 from '../components/header/Header2';
import Breadcrumb from '../components/breadcrumb';
import EmpSec4 from '../components/employer/EmpSec4';
import dataEm from '../assets/fakeData/dataEmployers';
import Footer from '../components/footer';

Employer_v4.propTypes = {
    
};

function Employer_v4(props) {
    return (
        <div>
            <Header2 />
            <Breadcrumb title='Employers' />
            <EmpSec4 data={dataEm} />
            <Footer />
        </div>
    );
}

export default Employer_v4;