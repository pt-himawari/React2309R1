import React, { useState } from "react";
const carList = [
  "Toyota Camry",
  "Toyota RAV4",
  "Honda CR-V",
  "BMW 7 Series",
  "Mercedes-Benz C-Class",
  "Audi A3",
];
const colorList = [
  "White",
  "Black",
  "Titanium Gray",
  "Matte Gray",
  "Matte Gold",
  "Caramel",
];
function SelectYourCar() {
  const [car, setCar] = useState("Toyota Camry");
  const [color, setColor] = useState("White");
  const handleSelectChangeCar = (e) => {
    setCar(e.target.value);
  };
  const handleSelectChangeColor = (e) => {
    setColor(e.target.value);
  };
  const handelChangeSelect = (e) => {
    const { name, value } = e.target;
    if (name === "car") {
      setCar(value);
    } else if (name === "color") {
      setColor(value);
    }
  };
  return (
    <div className="border p-5">
      <h2 className="text-info mb-3">1. Select Your Car</h2>
      <div className="ms-5 d-flex">
        <div className="me-3">
          <h4>Select a Car</h4>
          <select
            className="form-select  "
            aria-label="Default select example"
            name="car"
            value={car}
            // onChange={handleSelectChangeCar} //cách 1
            onChange={handelChangeSelect} //cách thu gọn
          >
            {carList.map((carOption, index) => (
              <option key={index} value={carOption}>
                {carOption}
              </option>
            ))}
          </select>
          <h4 className="mt-4">Select a Color</h4>
          <select
            className="form-select  mt-2"
            aria-label="Default select example"
            name="color"
            value={color}
            // onChange={handleSelectChangeColor} cách 1
            onChange={handelChangeSelect} // cách thu gọn
          >
            {colorList.map((colorOption, index) => (
              <option key={index} value={colorOption}>
                {colorOption}
              </option>
            ))}
          </select>
        </div>
        <div className="ms-5">
          <h1>You selected </h1>
          <h2 className="text-success ms-5 ">
            {car}- {color}
          </h2>
        </div>
      </div>
    </div>
  );
}
export default SelectYourCar;
