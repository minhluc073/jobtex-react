import React from 'react';
import PropTypes from 'prop-types';
import Breadcrumb from '../components/breadcrumb';
import Header2 from '../components/header/Header2';
import JobSec2 from '../components/jobs/JobSec2';
import dataJobs from '../assets/fakeData/dataJobs';
import Footer from '../components/footer';
import FormSearch from '../components/formsearch';
import Gotop from "../components/gotop";

Joblist_v2.propTypes = {
    
};

function Joblist_v2(props) {
    return (
        <div>
            <Header2 />
            <Breadcrumb title='Find Jobs' className="breadcrumb-section" />

            <FormSearch />

            <JobSec2 data={dataJobs} />
            <Footer />
            <Gotop />
            
        </div>
    );
}

export default Joblist_v2;