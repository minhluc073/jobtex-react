import React from 'react';
import PropTypes from 'prop-types';
import Header2 from '../components/header/Header2';
import Breadcrumb from '../components/breadcrumb';
import JobSec3 from '../components/jobs/JobSec3';
import dataJobs from '../assets/fakeData/dataJobs';
import Footer from '../components/footer';
import Gotop from '../components/gotop';

Joblist_v3.propTypes = {
    
};

function Joblist_v3(props) {
    return (
        <div>
            <Header2 />
            <Breadcrumb title= 'Find Jobs' className="breadcrumb-section" />
            <JobSec3 data={dataJobs} />

            <Footer />
            <Gotop />
        </div>
    );
}

export default Joblist_v3;