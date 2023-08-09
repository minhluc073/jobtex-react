import React from 'react';
import PropTypes from 'prop-types';
import Header2 from '../components/header/Header2';
import Breadcrumb from '../components/breadcrumb';
import Footer from '../components/footer';
import Map from '../components/map';
import MapCandi from '../components/map/MapCandi';
import CandiSec1 from '../components/candidates/CandiSec1';
import dataCandi from '../assets/fakeData/dataCandi';

Candidates_v4.propTypes = {
    
};

function Candidates_v4(props) {
    return (
        <div>
            <Header2 />
            <Breadcrumb title='Find Candidates' />
            <MapCandi />
            <CandiSec1 data={dataCandi} className='candidate-section-two' />
          
            <Footer />
            
            
        </div>
    );
}

export default Candidates_v4;