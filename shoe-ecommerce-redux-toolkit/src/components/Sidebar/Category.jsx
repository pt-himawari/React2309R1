import React from "react";
import { useDispatch, useSelector } from "react-redux";
// import { setSearchCategory } from "../../reducer/actions";

const categories = ["All", "Sneakers", "Flats", "Sandals", "Heels"];
function Category() {
  const dispatch = useDispatch();
  // const { category } = useSelector((state) => state.filters);

  return (
    <div className="py-2 d-flex flex-column justify-content-center">
      <h5>Category</h5>
      <div className="form-group">
        {categories.map((cat, index) => (
          <div key={cat} className="form-check py-1">
            <input
              id={`cat-${index}`}
              className="form-check-input"
              type="radio"
              name="category"
              value={cat}
              defaultChecked={cat === "All"}
              // onInput={(e) => dispatch(setSearchCategory(e.target.value))}
            />
            <label
              htmlFor={`cat-${index}`}
              className={`form-check-label ${
                cat === "category" ? "text-decoration-underline fw-bolder" : ""
              }`}
            >
              {cat}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Category;
