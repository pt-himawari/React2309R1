import React from "react";
import { useDispatch, useSelector } from "react-redux";
// import { setSearchPrice } from "../../reducer/actions";

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
    name: "Over $150",
  },
];
function Price() {
  const dispatch = useDispatch();
  // const { price } = useSelector((state) => state.filters);

  return (
    <div className="py-2 d-flex flex-column justify-content-center">
      <h5>Price</h5>
      <div className="form-group">
        {prices.map((p, index) => (
          <div key={p.value} className="form-check py-1">
            <input
              id={`price-${p.value}`}
              className="form-check-input"
              type="radio"
              name="price"
              value={p.value}
              defaultChecked={p.name === "All"}
              // onInput={(e) => {
              //   dispatch(setSearchPrice(e.target.value));
              // }}
            />
            <label
              htmlFor={`price-${p.value}`}
              className={`form-check-label ${
                p.value === "price" ? "text-decoration-underline fw-bolder" : ""
              }`}
            >
              {p.name}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Price;
