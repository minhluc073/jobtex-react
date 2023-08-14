import React from "react";
import PropTypes from "prop-types";
import Header2 from "../components/header/Header2";
import Breadcrumb from "../components/breadcrumb";
import Footer from "../components/footer";
import Form3 from "../components/formsearch/Form3";
import SortBuy from "../components/dropdown/SortBuy";
import Gotop from "../components/gotop";

Candidates_v6.propTypes = {};

function Candidates_v6(props) {
  return (
    <div>
      <Header2 />
      <Breadcrumb title="Find Candidates" />
      <Form3 />

      <section className="cadi-available-section">
        <div className="tf-container">
          <div className="row">
            <div className="col-lg-12 tf-tab">
              <div className="wd-meta-select-job">
                <div className="wd-findjob-filer no-avai">
                  <div className="group-select-display">
                    <p className="nofi-job"> Showing all 0 result</p>
                  </div>
                  <SortBuy />
                </div>
                <button className="btn-pri">Reset Filter</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <Gotop />
    </div>
  );
}

export default Candidates_v6;
