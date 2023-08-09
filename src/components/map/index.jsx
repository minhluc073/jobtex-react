import React from "react";
import PropTypes from "prop-types";
import MapBox from "react-map-gl";

Map.propTypes = {};

function Map(props) {
  return (
    <section className="wd-feature-map">
      <div className="tf-slider slider-map style-1">
        {/* <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613507864!3d-6.194741395493371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5390917b759%3A0x6b45e67356080477!2sPT%20Kulkul%20Teknologi%20Internasional!5e0!3m2!1sen!2sid!4v1601138221085!5m2!1sen!2sid"

              height="600"

            /> */}
        <MapBox
          mapLib={import("mapbox-gl")}
          initialViewState={{
            longitude: -100,
            latitude: 40,
            zoom: 3.5,
          }}
          mapboxAccessToken={process.env.MAP_BOX_KEY}
          style={{ width: 600, height: 400 }}
          mapStyle="mapbox://styles/mapbox/streets-v9"
        />

        <div className="tf-container">
          <div className="content">
            <div className="form-sl">
              <form method="post">
                <div className="row-group-search home1 st">
                  <div className="form-group-1">
                    <span className="icon-search search-job"></span>
                    <input
                      type="text"
                      className="input-filter-search"
                      placeholder="Job title, key words or company"
                    />
                  </div>
                  <div className="form-group-2">
                    <span className="icon-map-pin"></span>
                    <select id="select-location" className="select-location">
                      <option value="">All Location</option>
                      <option value="">Japan</option>
                      <option value="">Canada</option>
                      <option value="">England</option>
                      <option value="">Mexico</option>
                    </select>
                  </div>
                  <div className="form-group-4">
                    <button type="submit" className="btn btn-find">
                      Find Jobs
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Map;
