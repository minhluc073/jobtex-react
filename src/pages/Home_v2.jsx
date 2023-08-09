import React from "react";
import PropTypes from "prop-types";
import TabJob from "../components/jobs/TabJob";
import dataJobs from "../assets/fakeData/dataJobs";
import Banner02 from "../components/banner/Banner02";
import Gotop from "../components/gotop";
import HeaderHome2 from "../components/header/HeaderHome2";
import Footer from "../components/footer";

Home_v2.propTypes = {};

function Home_v2(props) {
  return (
    <>
      <HeaderHome2 />

      <Banner02 />

      <section className="form-sticky form-meta2 is-fixed">
        <div className="tf-container">
          <div className="row">
            <div className="col-lg-12">
              <div className="meta-category-job fixed-content">
                <ul className="category-filter">
                  <li>
                    <select>
                      <option>Remote</option>
                      <option>All Salary</option>
                      <option>Company</option>
                    </select>
                  </li>
                  <li>
                    <select>
                      <option>All Job Types</option>
                      <option>All Salary</option>
                      <option>Company</option>
                    </select>
                  </li>
                  <li>
                    <select>
                      <option>All Salary</option>
                      <option>All Salary</option>
                      <option>Company</option>
                    </select>
                  </li>
                  <li>
                    <select>
                      <option>Any Distance</option>
                      <option>All Salary</option>
                      <option>Company</option>
                    </select>
                  </li>
                  <li>
                    <select>
                      <option>All Job Title</option>
                      <option>All Salary</option>
                      <option>Company</option>
                    </select>
                  </li>
                  <li>
                    <select>
                      <option>Posted Anytime</option>
                      <option>All Salary</option>
                      <option>Company</option>
                    </select>
                  </li>
                  <li>
                    <select>
                      <option>All Seniority Levels</option>
                      <option>All Salary</option>
                      <option>Company</option>
                    </select>
                  </li>
                  <li>
                    <select>
                      <option>Company</option>
                      <option>All Salary</option>
                      <option>Company</option>
                    </select>
                  </li>
                </ul>
                <div className="meta-nofication">
                  <div className="nofi">
                    <span>1249</span> jobs recommended for you
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TabJob data={dataJobs} />
      <Footer />
      
      <Gotop />
    </>
  );
}

export default Home_v2;
