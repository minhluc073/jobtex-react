import React, { useState } from "react";
import PropTypes from "prop-types";
import MapBox, { Marker, Popup } from "react-map-gl";
import lo1 from "../../assets/images/logo-company/cty1.png";
import lo2 from "../../assets/images/logo-company/cty2.png";
import lo3 from "../../assets/images/logo-company/cty3.png";
import "mapbox-gl/dist/mapbox-gl.css";
import SelectLocation from "../dropdown";

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

function FormMap(props) {
  const [popupOpen, setPopupOpen] = useState({});
  console.log("hhh", popupOpen);

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
            longitude: -74.000303,
            latitude: 40.706243,
            zoom: 15,
          }}
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
                    closeButton={true}
                    offsetLeft={10}
                  >
                    <span style={{ fontSize: "1vw", fontFamily: "Poppins" }}>
                      {item.name}
                    </span>
                  </Popup>
                )}
              </div>
            );
          })}
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
