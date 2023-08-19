import React, { useState } from "react";
import PropTypes from "prop-types";
import MapBox, { Marker, Popup, NavigationControl } from "react-map-gl";

import "mapbox-gl/dist/mapbox-gl.css";
import SelectLocation from "../dropdown";
import { Link } from "react-router-dom";
import "./style.scss";

FormMap.propTypes = {};

const navStyle = {
  position: "absolute",
  top: 36,
  left: 0,
  padding: "10px",
};

function FormMap({ markers }) {
  const [popupOpen, setPopupOpen] = useState({});

  const [viewPort, setViewPort] = useState({
    longitude: -74.000303,
    latitude: 40.706243,
    zoom: 15,
  });

  return (
    <section className="wd-feature-map">
      <div className="tf-slider slider-map style-1">
        <MapBox
          mapLib={import("mapbox-gl")}
          initialViewState={{
            ...viewPort,
          }}
          onViewportChange={(viewPort) => setViewPort(viewPort)}
          mapboxAccessToken="pk.eyJ1IjoidGhlbWVzZmxhdCIsImEiOiJjbGt3NGxtYncwa2F2M21saHM3M21uM3h2In0.9NbzjykXil1nELxQ1V8rkA"
          style={{ width: "100%", height: 600 }}
          mapStyle="mapbox://styles/themesflat/cll6d64hy00m901pd1tbe65ra"
          scrollZoom={false}
        >
          {markers.slice(0, 6).map((item) => {
            return (
              <div key={item.id}>
                <Marker
                  longitude={item.longitude}
                  latitude={item.latitude}
                  anchor="center"
                  closeOnClick={false}
                  onClick={(e) => {
                    setPopupOpen((prevItem) => ({
                      ...prevItem,
                      [item.id]: !prevItem[item.id],
                    }));
                  }}
                >
                  <div className="marker marker-logo-cty">
                    <img
                      src={item.img}
                      alt="img"
                      style={{ width: "28px", height: "28px" }}
                    />
                  </div>
                </Marker>
                {popupOpen[item.id] && (
                  <Popup
                    key={item.id}
                    longitude={item.longitude}
                    latitude={item.latitude}
                    anchor="center"
                    onClose={() => setPopupOpen(false)}
                    closeOnClick={false}
                    closeButton={true}
                    offsetLeft={10}
                  >
                    {/* <span style={{ fontSize: "1vw", fontFamily: "Poppins" }}>
                      {item.name}
                    </span> */}
                    <div className="marker-popup">
                      <img src={item.img} alt="img" />
                      <div className="content">
                        <h4>{item.title}</h4>
                        <h3>
                          <Link to="/Jobsingle_v1">
                            {item.name}&nbsp;<span className="icon-bolt"></span>
                          </Link>
                        </h3>
                        <p>
                          <i className="icon-map-pin"></i>&nbsp;
                          {item.address}
                        </p>
                      </div>
                    </div>
                  </Popup>
                )}
              </div>
            );
          })}

          {/* <div style={navStyle}> */}
          <NavigationControl position="top-left" />
          {/* </div> */}
        </MapBox>

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
                    <SelectLocation />
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

export default FormMap;
