import React from "react";
import PropTypes from "prop-types";
import Header2 from "../components/header/Header2";
import Banner04 from "../components/banner/Banner04";
import JobStyle4 from "../components/jobs/JobStyle4";
import dataJobs from "../assets/fakeData/dataJobs";
import IconBox from "../components/iconbox";
import ReviewJob from "../components/jobs/ReviewJob";
import dataLocation from "../assets/fakeData/dataLocation";
import Employer from "../components/employer";
import dataEm from "../assets/fakeData/dataEmployers";
import Partner from "../components/partner";
import dataPartner from "../assets/fakeData/dataPartner";
import Footer from "../components/footer";
import Location04 from "../components/location/Location04";
import Gotop from "../components/gotop";

Home_v4.propTypes = {};

function Home_v4(props) {
  return (
    <div>
      <Header2 />

      <Banner04 />

      <JobStyle4 data={dataJobs} />

      <IconBox />

      <ReviewJob />

      <Location04 data={dataLocation} />

      <Employer data={dataEm} />
      <Partner data={dataPartner} />
      <Footer />
      <Gotop />
    </div>
  );
}

export default Home_v4;
