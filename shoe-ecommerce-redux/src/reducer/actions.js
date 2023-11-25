import React from "react";
export const getProductList = (payload) => {
  return {
    type: "filters/fetchProductList",
    payload: payload,
  };
};
export const setSearchText = (payload) => {
  return {
    type: "filters/searchText",
    payload: payload,
  };
};
export const setSearchRecommended = (payload) => {
  return {
    type: "filters/searchRecommended",
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
