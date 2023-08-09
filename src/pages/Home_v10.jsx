import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/header';
import Banner10 from '../components/banner/Banner10';
import Jobs from '../components/jobs';
import dataJobs from '../assets/fakeData/dataJobs';
import Location04 from '../components/location/Location04';
import dataLocation from '../assets/fakeData/dataLocation';
import GetApp from '../components/getapp';
import BoxIcon from '../components/boxicon';
import ReviewJob09 from '../components/jobs/ReviewJob09';
import Employer from '../components/employer';
import dataEm from '../assets/fakeData/dataEmployers';
import Partner from '../components/partner';
import dataPartner from '../assets/fakeData/dataPartner';
import Footer from '../components/footer';
Home_v10.propTypes = {
    
};

function Home_v10(props) {
    return (
        <div>
            <Header />
            <Banner10 />
            <Jobs data={dataJobs} className='jobs-section-two' />
            <Location04 data={dataLocation} />
            <GetApp />
            <BoxIcon />
            <ReviewJob09 />
            <Employer data={dataEm} className='employer-section-four' />
            <Partner data={dataPartner} />

            <Footer />
            
        </div>
    );
}

export default Home_v10;