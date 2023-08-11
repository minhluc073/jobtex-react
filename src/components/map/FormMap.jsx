import React, { useState } from "react";
import PropTypes from "prop-types";
import MapBox, {
  Marker,
  Popup,
  NavigationControl,
  FullscreenControl,
} from "react-map-gl";
import lo1 from "../../assets/images/logo-company/cty1.png";
import lo2 from "../../assets/images/logo-company/cty2.png";
import lo3 from "../../assets/images/logo-company/cty3.png";
import "mapbox-gl/dist/mapbox-gl.css";
import SelectLocation from "../dropdown";
import { Link } from "react-router-dom";

Map.propTypes = {};

// const Marker= [
//     {}
// ]
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
    name: "Full Stack Development",
    address: "Las Vegas, NV 89107, USA",
    longitude: -74.009766,
    latitude: 40.703859,
    img: lo3,
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

function FormMap(props) {
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
          // onViewportChange={setViewPort}
          mapboxAccessToken="pk.eyJ1IjoidGhlbWVzZmxhdCIsImEiOiJjbGt3NGxtYncwa2F2M21saHM3M21uM3h2In0.9NbzjykXil1nELxQ1V8rkA"
          style={{ width: "100%", height: 600 }}
          mapStyle="mapbox://styles/themesflat/cll6d64hy00m901pd1tbe65ra"
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
                  <div className="marker temporary-marker">
                    <img
                      src={item.img}
                      alt="img"
                      style={{ width: "30px", height: "30px" }}
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
                    <div>
                      <img src={item.img} alt="img" />
                      <Link to="https://docs.mapbox.com/mapbox-gl-js/example/popup/">
                        {item.name}
                      </Link>
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

        {/* <MapBox
          mapLib={import("mapbox-gl")}
          initialViewState={{
            longitude: -74.000303,
            latitude: 40.706243,
            zoom: 15,
          }}
          mapboxAccessToken="pk.eyJ1IjoidGhlbWVzZmxhdCIsImEiOiJjbGt3NGxtYncwa2F2M21saHM3M21uM3h2In0.9NbzjykXil1nELxQ1V8rkA"
          style={{ width: "100%", height: 600 }}
          mapStyle="mapbox://styles/mapbox/streets-v9"
        >
          <Marker
            longitude={-74.006821}
            latitude={40.706755}
            anchor="center"
            onClick={() => setPopupOpen(true)}
          >
            <div className="marker temporary-marker">
              <img
                src={lo1}
                alt="img"
                style={{ width: "30px", height: "30px" }}
              />
            </div>
          </Marker>
          {popupOpen && (
            <Popup
              longitude={-74.006821}
              latitude={40.706755}
              anchor="center"
              onClose={() => setPopupOpen(false)}
              closeButton={true}
              offsetLeft={10}
            >
              <span style={{ fontSize: "1vw", fontFamily: "Poppins" }}>
                Full Stack Development
              </span>
            </Popup>
          )}
        </MapBox> */}

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
