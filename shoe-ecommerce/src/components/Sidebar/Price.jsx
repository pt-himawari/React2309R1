import React, { useContext } from "react";

import { ShoeContext } from "../../context/ShoeContext";
import { setSearchPrice } from "../../reducer/action";
const prices = [
  {
    value: "0,0",
    name: "All",
  },
  {
    value: "0,50",
    name: "$0-$50",
  },
  {
    value: "50,100",
    name: "$50-$100",
  },
  {
    value: "100,150",
    name: "$100-$150",
  },
  {
    value: "150,150",
    name: "Over - $150",
  },
];
function Price() {
  const { state, dispatch } = useContext(ShoeContext);

  return (
    <div className="py-2 d-flex flex-column justify-content-center">
      <h5>Price</h5>
      <div className="form-group">
        {prices.map((price) => (
          <div key={price} className="form-check py-1">
            <input
              className="form-check-input"
              type="radio"
              name="price"
              value={price.value}
              defaultChecked={price.name === state?.filters?.price}
              onChange={(e) => {
                dispatch(setSearchPrice(e.target.value));
              }}
            />
            <label
              className={`form-check-label ${
                // color === state?.filters?.color
                price.value === state?.filters?.price
                  ? "text-decoration-underline fw-bolder"
                  : ""
              }`}
            >
              {price.name}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Price;
