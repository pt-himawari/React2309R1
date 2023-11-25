// const initState = {
//   searchText: "",
//   recommended: "All",
//   price: "0,0",
//   color: "All",
//   category: "All",
// };
// export const filtersReducer = (state = initState, action) => {
//   switch (action.type) {
//     case "filters/searchText":
//       return {
//         ...state,
//         searchText: action.payload,
//       };

//     case "filters/searchRecommended":
//       return {
//         ...state,
//         recommended: action.payload,
//       };
//     case "filters/searchCategory":
//       return {
//         ...state,
//         category: action.payload,
//       };
//     case "filters/searchPrice":
//       return {
//         ...state,
//         price: action.payload,
//       };
//     case "filters/searchColor":
//       return {
//         ...state,
//         color: action.payload,
//       };
//     default:
//       return state;
//   }
// };
import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    searchText: "",
    recommended: "All",
    price: "0,0",
    color: "All",
    category: "All",
  },
  reducers: {
    setSearchText: (state, action) => {
      state.searchText = action.payload;
    },
    setSearchRecommended: (state, action) => {
      state.recommended = action.payload;
    },
    setSearchColor: (state, action) => {
      state.color = action.payload;
    },
    setSearchPrice: (state, action) => {
      state.price = action.payload;
    },
    setSearchCategory: (state, action) => {
      state.category = action.payload;
    },
  },
});
const { actions, reducer } = filtersSlice;
// export const {
//   setSearchText,
//   setSearchRecommended,
//   setSearchColor,
//   setSearchCategory,
// } = actions;

// export default reducer;
export default filtersSlice;
// export default counterSlice.reducer;
