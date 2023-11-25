const initState = [];
export const productReducer = (state = initState, action) => {
  switch (action.type) {
    case "filters/fetchProductList":
      return [...action.payload];
    default:
      return state;
  }
};
