//1 initaState
export const initState = {
  productList: [],
  filters: {
    searchText: "",
    recommend: "All",
    category: "All",
    price: "0,0",
    color: "All",
  },
};
// 2 . reducer function
export const reducer = (state, action) => {
  switch (action.type) {
    case "productList/fetchData":
      return {
        ...state,
        productList: action.payload,
      };
    case "filters/searchText":
      return {
        ...state,
        filters: { ...state.filters, searchText: action.payload },
      };
    case "filters/searchRecommend":
      return {
        ...state,
        filters: { ...state.filters, recommend: action.payload },
      };
    case "filters/searchCategory":
      return {
        ...state,
        filters: { ...state.filters, category: action.payload },
      };
    case "filters/searchPrice":
      return {
        ...state,
        filters: { ...state.filters, price: action.payload },
      };
    case "filters/searchColor":
      return {
        ...state,
        filters: { ...state.filters, color: action.payload },
      };

    default:
      break;
  }
};
