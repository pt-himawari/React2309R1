//. action = function
export const getProductList = (payload) => {
  return {
    type: "productList/fetchData",
    payload: payload,
  };
};

export const setSearchText = (payload) => {
  return {
    type: "filters/searchText",
    payload: payload,
  };
};
export const setSearchRecommend = (payload) => {
  return {
    type: "filters/searchRecommend",
    payload: payload,
  };
};

export const setSearchCategory = (payload) => {
  return {
    type: "filters/searchCategory",
    payload: payload,
  };
};
export const setSearchPrice = (payload) => {
  return {
    type: "filters/searchPrice",
    payload: payload,
  };
};
export const setSearchColor = (payload) => {
  return {
    type: "filters/searchColor",
    payload: payload,
  };
};
