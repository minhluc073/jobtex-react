import React, { useState } from "react";
import PropTypes from "prop-types";
import MapBox, {
  Marker,
  Popup,
  NavigationControl,
  FullscreenControl,
} from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { Link } from "react-router-dom";
import "./style.scss";

MapCandidate.propTypes = {};

const fullscreenControlStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  padding: "10px",
};
const navStyle = {
  position: "absolute",
  top: 36,
  left: 0,
  padding: "10px",
};

function MapCandidate({ markers, className }) {
  const [popupOpen, setPopupOpen] = useState({});

  const [viewPort, setViewPort] = useState({
    longitude: -74.000303,
    latitude: 40.706243,
    zoom: 15,
  });

  return (
    <section className={`wd-feature-map ${className ? className : ""}`}>
      <div className="tf-slider slider-map style-1 candidate-map">
        <MapBox
          mapLib={import("mapbox-gl")}
          initialViewState={{
            ...viewPort,
          }}
          // onViewportChange={setViewPort}
          mapboxAccessToken="pk.eyJ1IjoidGhlbWVzZmxhdCIsImEiOiJjbGt3NGxtYncwa2F2M21saHM3M21uM3h2In0.9NbzjykXil1nELxQ1V8rkA"
          style={{ width: "100%", height: 600 }}
          mapStyle="mapbox://styles/themesflat/cll6d64hy00m901pd1tbe65ra"
        >
          {markers.slice(6, 12).map((item) => {
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
                        <ul className="info">
                          <li>{item.cate}</li>
                          <li>
                            <i className="icon-map-pin"></i>&nbsp;
                            {item.address}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </Popup>
                )}
              </div>
            );
          })}
          <div className="fullscreen" style={fullscreenControlStyle}>
            <FullscreenControl />
          </div>
          {/* <div className="nav" style={navStyle}> */}
          <NavigationControl style={navStyle} />
          {/* </div> */}
        </MapBox>
      </div>
    </section>
  );
}

export default MapCandidate;
