import React from 'react';
import PropTypes from 'prop-types';
import Header2 from '../components/header/Header2';
import JobSec10 from '../components/jobs/JobSec10';
import dataJobs from '../assets/fakeData/dataJobs';
import Gotop from "../components/gotop";

Joblist_v10.propTypes = {
    
};

function Joblist_v10(props) {
    return (
        <div>
            <Header2 />
            <JobSec10 data={dataJobs} />
            <Gotop />
        </div>
    );
}

export default Joblist_v10;