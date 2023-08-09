import React from 'react';
import PropTypes from 'prop-types';

import Category from '../components/category';
import Jobs from '../components/jobs';
import BoxIcon from '../components/boxicon';
import Employer from '../components/employer';
import Testimonials from '../components/testimonials';
import Partner from '../components/partner';
import dataCate from '../assets/fakeData/dataCategory';
import dataJobs from '../assets/fakeData/dataJobs';
import dataEm from '../assets/fakeData/dataEmployers';
import dataTestimonials from '../assets/fakeData/dataTestimonials';
import dataPartner from '../assets/fakeData/dataPartner';
import Header from '../components/header';
import Footer from '../components/footer';

import Banner08 from '../components/banner/Banner08';
import Gotop from '../components/gotop';

Home_v8.propTypes = {
    
};

function Home_v8(props) {
    return (
        <div>
            <Header />
            <Banner08 />

            <Category data={dataCate} />

            <Jobs data={dataJobs} />

            <BoxIcon />

            <Employer data={dataEm} />

            <Testimonials data={dataTestimonials} />

            <Partner data={dataPartner} />

            <Footer />

            <Gotop />
            
        </div>
    );
}

export default Home_v8;