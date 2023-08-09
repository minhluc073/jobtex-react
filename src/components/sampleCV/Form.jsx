import React from 'react';
import PropTypes from 'prop-types';

Form.propTypes = {
    
};

function Form(props) {
    return (
        <section className="form-sticky stc2 ">
      <div className="tf-container">
        <div className="job-search-form inner-form-map style2 cv">
          <form method="post">
            <div className="row-group-search st2">
              <div className="form-group">
                <select>
                  <option value="">Language</option>
                  <option value="">English</option>
                  <option value="">Spanis</option>
                  <option value="">Japanis</option>
                </select>
              </div>
              <div className="form-group">
                <select>
                  <option value="">Job</option>
                  <option value="">Design</option>
                  <option value="">Seo</option>
                  <option value="">Dev</option>
                </select>
              </div>
              <div className="form-group">
                <select>
                  <option value="">Design</option>
                  <option value="">Design 1</option>
                  <option value="">Design 2</option>
                </select>
              </div>
              <div className="form-group">
                <select>
                  <option value="">Popularity</option>
                  <option value="">Popularity 1</option>
                  <option value="">Popularity 2</option>
                </select>
              </div>
              <div className="form-group-btn">
                <button className="btn btn-find">Find Sample CV</button>
              </div>
            </div>
          
          </form>
    
        </div>
      </div>
    </section>
    );
}

export default Form;