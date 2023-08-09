import React from 'react';
import PropTypes from 'prop-types';
import Breadcrumb from '../components/breadcrumb';
import Header2 from '../components/header/Header2';
import JobSec1 from '../components/jobs/JobSec1';
import dataJobs from '../assets/fakeData/dataJobs';
import Footer from '../components/footer';
import FormSearch from '../components/formsearch';

Joblist_v1.propTypes = {
    
};

function Joblist_v1(props) {
    return (
        <div>
            <Header2 />
            <Breadcrumb title='Find Jobs' />

            <FormSearch />

            <JobSec1 data={dataJobs} />
            <Footer />
            
        </div>
    );
}

export default Joblist_v1;