import React from 'react';
import PropTypes from 'prop-types';
import Header2 from '../components/header/Header2';
import Footer from '../components/footer';
import Sidebar from '../components/sampleCV/Sidebar';
import dataSample from '../assets/fakeData/dataSample';
import Breadcrumb from '../components/breadcrumb';

SampleCVslidebar.propTypes = {
    
};

function SampleCVslidebar(props) {
    return (
        <div>
             <Header2 />
             <Breadcrumb title='Sample CV' />
             <Sidebar data={dataSample} />

             <Footer />
            
        </div>
    );
}

export default SampleCVslidebar;