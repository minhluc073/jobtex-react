import React from 'react';
import PropTypes from 'prop-types';
import Header2 from '../components/header/Header2';
import Breadcrumb from '../components/breadcrumb';
import Sample from '../components/sampleCV/Sample';
import Form from '../components/sampleCV/Form';
import dataSample from '../assets/fakeData/dataSample';
import Footer from '../components/footer';

SampleCV.propTypes = {
    
};

function SampleCV(props) {
    return (
        <div>
            <Header2 />
            <Breadcrumb title='Sample CV' />

            <Form />

            <Sample data={dataSample} />

            <Footer />
            
        </div>
    );
}

export default SampleCV;