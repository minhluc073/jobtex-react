import React, { useState } from "react";
import PropTypes from "prop-types";
import MapBox, {
  Marker,
  Popup,
  NavigationControl,
  FullscreenControl,
} from "react-map-gl";
import lo1 from "../../assets/images/logo-company/cty11.png";
import lo2 from "../../assets/images/logo-company/cty9.png";
import lo3 from "../../assets/images/logo-company/cty7.png";
import lo4 from "../../assets/images/logo-company/cty6.png";
import lo5 from "../../assets/images/logo-company/cty15.png";
import lo6 from "../../assets/images/logo-company/cty16.png";
import "mapbox-gl/dist/mapbox-gl.css";
import { Link } from "react-router-dom";
import "./style.scss";

MapSecJob.propTypes = {};

const marKers = [
  {
    id: 1,
    title: "TOP Agency, Inc",
    name: "Full Stack Development",
    address: "Las Vegas, NV 89107, USA",
    longitude: -74.006821,
    latitude: 40.706755,
    img: lo1,
  },
  {
    id: 2,
    title: "TOP Agency, Inc",
    name: "Full Stack Development",
    address: "Las Vegas, NV 89107, USA",
    longitude: -74.00423,
    latitude: 40.705445,
    img: lo2,
  },
  {
    id: 3,
    title: "TOP Agency, Inc",
    name: "Senior UI/UX Designer",
    address: "Las Vegas, NV 89107, USA",
    longitude: -74.009766,
    latitude: 40.703859,
    img: lo3,
  },
  {
    id: 4,
    title: "TOP Agency, Inc",
    name: "Full Stack Development",
    address: "Las Vegas, NV 89107, USA",
    longitude: -74.014434,
    latitude: 40.706828,
    img: lo4,
  },
  {
    id: 5,
    title: "TOP Agency, Inc",
    name: "Senior DevOps Engineer",
    address: "Las Vegas, NV 89107, USA",
    longitude: -74.012139,
    latitude: 40.709024,
    img: lo5,
  },
  {
    id: 6,
    title: "TOP Agency, Inc",
    name: "Social Media Marketing",
    address: "Las Vegas, NV 89107, USA",
    longitude: -73.992613,
    latitude: 40.704015,
    img: lo6,
  },
];

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

function MapSecJob({ className, heightStyle }) {
  const [popupOpen, setPopupOpen] = useState({});

  const [viewPort, setViewPort] = useState({
    longitude: -74.000303,
    latitude: 40.706243,
    zoom: 15,
  });

  return (
    <section className={`wd-feature-map ${className ? className : ""}`}>
      <div className="tf-slider slider-map style-1">
        <MapBox
          mapLib={import("mapbox-gl")}
          initialViewState={{
            ...viewPort,
          }}
          // onViewportChange={setViewPort}
          mapboxAccessToken="pk.eyJ1IjoidGhlbWVzZmxhdCIsImEiOiJjbGt3NGxtYncwa2F2M21saHM3M21uM3h2In0.9NbzjykXil1nELxQ1V8rkA"
          style={{ width: "100%", height: 600 }}
          mapStyle="mapbox://styles/mapbox/streets-v12"
        >
          {marKers.map((item) => {
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

export default MapSecJob;
