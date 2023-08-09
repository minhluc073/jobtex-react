import React from 'react';
import PropTypes from 'prop-types';
import Header2 from '../components/header/Header2';
import Breadcrumb from '../components/breadcrumb';
import Footer from '../components/footer';
import BlogSec2 from '../components/blog/BlogSec2';
import dataBlog from '../assets/fakeData/dataBlog';

Blog_v2.propTypes = {
    
};

function Blog_v2(props) {
    return (
        <div>
            <Header2 />
            <Breadcrumb title='Blog Grid' />

            <BlogSec2 data={dataBlog} />
            <Footer />
            
        </div>
    );
}

export default Blog_v2;