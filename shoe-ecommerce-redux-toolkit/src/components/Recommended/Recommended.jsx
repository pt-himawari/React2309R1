import React, { useState } from "react";
import { useDispatch } from "react-redux";
// import { setSearchRecommended } from "../../reducer/actions";

const recommended = [
  {
    value: "All",
    name: "All Products",
  },
  {
    value: "Nike",
    name: "Nike",
  },
  {
    value: "Adidas",
    name: "Adidas",
  },
  {
    value: "Puma",
    name: "Puma",
  },
  {
    value: "Vans",
    name: "Vans",
  },
];
function Recommended() {
  const dispatch = useDispatch();
  const [active, setActive] = useState("All");
  return (
    <div className="py-2 d-flex flex-column justify-content-center">
      <h5>Recommended</h5>
      <div className="form-group">
        {recommended.map((recmd) => (
          <button
            key={recmd.value}
            className={`btn btn-sm btn-outline-secondary me-1 ${
              recmd.value === active ? " active" : ""
            }`}
            type="button"
            // onClick={(e) => {
            //   dispatch(setSearchRecommended(recmd.value));
            //   setActive(recmd.value);
            // }}
          >
            {recmd.name}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Recommended;
