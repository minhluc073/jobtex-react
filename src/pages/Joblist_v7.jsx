import React from 'react';
import PropTypes from 'prop-types';
import Header2 from '../components/header/Header2';
import Map from '../components/map';
import JobSec2 from '../components/jobs/JobSec2';
import dataJobs from '../assets/fakeData/dataJobs';

Joblist_v7.propTypes = {
    
};

function Joblist_v7(props) {
    return (
        <div>
            <Header2 />

            <Map />
            <JobSec2 data={dataJobs} className='inner-jobs-section-two' />
        </div>
    );
}

export default Joblist_v7;