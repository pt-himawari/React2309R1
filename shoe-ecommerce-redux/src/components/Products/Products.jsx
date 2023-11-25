// import React, { useEffect } from "react";
import Product from "./Product";
import { useSelector, useDispatch } from "react-redux";
import { getProductList } from "../../reducer/actions";
import React, { useState, useEffect } from "react";

function Products() {
  // const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { searchText, recommended, category, price, color } = useSelector(
    (state) => state.filters
  );

  useEffect(() => {
    async function getProducts() {
      const productListRes = await fetch(
        "https://json-server-monkeypham.vercel.app/products"
      );
      let data = await productListRes.json();
      dispatch(getProductList(data));
      console.log(data);
    }
    getProducts();
  }, []);

  const queryProductList = () => {
    let queryProducts = [...productList];
    if (searchText) {
      queryProducts = queryProducts.filter((p) =>
        p.title.toLowerCase().includes(searchText.toLowerCase())
      );
    }
    if (recommended !== "All") {
      queryProducts = queryProducts.filter(
        (p) => p.company.toLowerCase() === recommended.toLowerCase()
      );
    }
    if (category !== "All") {
      queryProducts = queryProducts.filter(
        (p) => p.category.toLowerCase() === category.toLowerCase()
      );
    }

    if (price !== "0,0") {
      const [min, max] = price.split(",");

      if (min !== max) {
        queryProducts = queryProducts.filter(
          (p) => p.newPrice > Number(min) && p.newPrice <= Number(max)
        );
      } else {
        queryProducts = queryProducts.filter((p) => p.newPrice > Number(min));
      }
    }
    if (color !== "All") {
      queryProducts = queryProducts.filter(
        (p) => p.color.toLowerCase() === color.toLowerCase()
      );
    }
    return queryProducts;
  };

  const remainProductList = queryProductList();

  return (
    <div className="py-2 d-flex flex-column justify-content-center">
      <h5>Products</h5>
      <div className="row">
        {remainProductList.map((product, index) => (
          <Product key={index} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Products;
