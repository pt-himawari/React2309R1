import React from "react";
import { useDispatch, useSelector } from "react-redux";

// import { setSearchColor } from "../../reducer/actions";

const colors = ["All", "Black", "Blue", "Red", "Green", "White"];
function Colors() {
  const dispatch = useDispatch();
  // const { color } = useSelector((state) => state.filters);
  // console.log(color);
  return (
    <div className="py-2 d-flex flex-column justify-content-center">
      <h5>Colors</h5>
      <div className="form-group">
        {colors.map((colr, i) => (
          <div key={colr} className="form-check py-1">
            <input
              id={`color-${i}`}
              className="form-check-input"
              type="radio"
              name="color"
              value={colr}
              defaultChecked={colr === "All"}
              style={
                colr === "All"
                  ? { backgroundImage: "linear-gradient(to right, red, green)" }
                  : colr !== "White"
                  ? { backgroundColor: colr }
                  : {}
              }
              // onInput={(e) => {
              //   dispatch(setSearchColor(e.target.value));
              // }}
            />
            <label
              htmlFor={`color-${i}`}
              className={`form-check-label ${
                colr === "color" ? "text-decoration-underline fw-bolder" : ""
              }`}
            >
              {colr}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Colors;
