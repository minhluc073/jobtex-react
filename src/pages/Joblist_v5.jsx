import React from 'react';
import PropTypes from 'prop-types';
import Header2 from '../components/header/Header2';
import JobSec5 from '../components/jobs/JobSec5';
import dataJobs from '../assets/fakeData/dataJobs';

Joblist_v5.propTypes = {
    
};

function Joblist_v5(props) {
    return (
        <div>
            <div>
                <Header2 />
                <JobSec5 data={dataJobs} />
        </div>

        </div>
    );
}

export default Joblist_v5;