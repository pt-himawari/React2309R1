// const initState = {
//   productList: [],

//   filters: {
//     searchText: "",
//     recommended: "All",
//     price: "0,0",
//     color: "All",
//     category: "All",
//   },
// };

// const rootReducer = (state = initState, action) => {
//   switch (action.type) {
//     // case "filters/fetchProductList":
//     //   return {
//     //     ...state,
//     //     productList: action.payload,
//     //   };
//     // case "filters/searchText":
//     //   return {
//     //     ...state,
//     //     filters: { ...state.filters, searchText: action.payload },
//     //   };

//     // case "filters/searchRecommended":
//     //   return {
//     //     ...state,
//     //     filters: { ...state.filters, recommended: action.payload },
//     //   };
//     // case "filters/searchCategory":
//     //   return {
//     //     ...state,
//     //     filters: { ...state.filters, category: action.payload },
//     //   };
//     // case "filters/searchPrice":
//     //   return {
//     //     ...state,
//     //     filters: { ...state.filters, price: action.payload },
//     //   };
//     // case "filters/searchColor":
//     //   return {
//     //     ...state,
//     //     filters: { ...state.filters, color: action.payload },
//     //   };

//     default: {
//       return state;
//     }
//   }
// };

import { combineReducers } from "redux";
import { productReducer } from "./productSlice";
import { filtersReducer } from "./filtersSlice";
const rootReducer = combineReducers({
  productList: productReducer,
  filters: filtersReducer,
});
export default rootReducer;
