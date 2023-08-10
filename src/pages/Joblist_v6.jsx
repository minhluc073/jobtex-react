import React from 'react';
import PropTypes from 'prop-types';
import Header2 from '../components/header/Header2';
import dataJobs from '../assets/fakeData/dataJobs';
import JobSec6 from '../components/jobs/JobSec6';
import Gotop from '../components/gotop';

Joblist_v6.propTypes = {
    
};

function Joblist_v6(props) {
    return (
        <div>
            <Header2 />
            <JobSec6 data={dataJobs} />
            <Gotop />
        </div>
    );
}

export default Joblist_v6;