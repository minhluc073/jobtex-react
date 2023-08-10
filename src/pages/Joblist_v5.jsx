import React from 'react';
import PropTypes from 'prop-types';
import Header2 from '../components/header/Header2';
import JobSec5 from '../components/jobs/JobSec5';
import dataJobs from '../assets/fakeData/dataJobs';
import Gotop from '../components/gotop';

Joblist_v5.propTypes = {
    
};

function Joblist_v5(props) {
    return (
        <div>
                <Header2 />
                <JobSec5 data={dataJobs} />
                <Gotop />
        </div>
    );
}

export default Joblist_v5;