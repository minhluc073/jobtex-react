import React, { useState } from "react";
import ReactSlider from "react-slider";
import "./style.scss";
function RangeOne(props) {
  const { miles } = props;
  const [value, setValue] = useState(25);
  // const [values, setValues] = useState([0, 100]);
  // const handleChange = (newValues) => setValues(newValues);
  return (
    <div className="group-form">
      <div className="group-range-title">
        <label>
          Radius:
          <span>
            {value}&nbsp;{miles}
          </span>
        </label>
      </div>
      <ReactSlider
        ariaLabelledby="slider-label"
        className="horizontal-slider"
        min={0}
        max={100}
        defaultValue={[25]}
        thumbClassName="example-thumb"
        trackClassName="example-track"
        renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
        onChange={(value) => setValue(value)}
      />
    </div>
    // <div
    //   style={{
    //     padding: "20px",
    //     border: "1px solid #ddd",
    //     borderRadius: "5px",
    //     boxShadow: "0 0 5px rgba(0, 0, 0, 0.1)",
    //   }}
    // >
    //   <h2>Price Range</h2>
    //   <p>Use the slider to select a price range:</p>
    //   <Slider
    //     className="slider"
    //     value={values}
    //     onChange={handleChange}
    //     min={0}
    //     max={100}
    //   />
    //   <div style={{ display: "flex", justifyContent: "space-between" }}>
    //     <div>
    //       <label htmlFor="minPrice">Min Price:</label>
    //       <input
    //         type="number"
    //         id="minPrice"
    //         value={values[0]}
    //         onChange={(e) => handleChange([+e.target.value, values[1]])}
    //       />
    //     </div>
    //     <div>
    //       <label htmlFor="maxPrice">Max Price:</label>
    //       <input
    //         type="number"
    //         id="maxPrice"
    //         value={values[1]}
    //         onChange={(e) => handleChange([values[0], +e.target.value])}
    //       />
    //     </div>
    //   </div>
    // </div>
  );
}

export default RangeOne;
