import React, { useContext, useEffect } from "react";
import Product from "./Product";
import { ShoeContext } from "../../context/ShoeContext";
import { getProductList } from "../../reducer/action";

function Products() {
  const { state, dispatch } = useContext(ShoeContext);
  useEffect(() => {
    async function getProducts() {
      const productListRes = await fetch(
        "https://json-server-monkeypham.vercel.app/products"
      );
      let data = await productListRes.json();
      dispatch(getProductList(data));
    }
    getProducts();
  }, []);
  const {
    productList,
    filters: { searchText, recommend, category, price, color },
  } = state;
  console.log(state);
  const queryProductList = () => {
    let filteredProductList = [...productList];
    if (searchText) {
      filteredProductList = filteredProductList.filter((p) =>
        p.title.toLowerCase().includes(searchText)
      );
    }
    if (recommend !== "All") {
      filteredProductList = filteredProductList.filter(
        (p) => p.company.toLowerCase() === recommend.toLowerCase()
      );
    }
    if (category !== "All") {
      filteredProductList = filteredProductList.filter(
        (p) => p.category.toLowerCase() === category.toLowerCase()
      );
    }
    if (price !== "0,0") {
      const [min, max] = price.split(",");
      console.log(min, max);
      if (min !== max) {
        filteredProductList = filteredProductList.filter(
          (p) => p.newPrice > Number(min) && p.newPrice <= Number(max)
        );
      } else {
        filteredProductList = filteredProductList.filter(
          (p) => p.newPrice > Number(min)
        );
      }
    }
    if (color !== "All") {
      filteredProductList = filteredProductList.filter(
        (p) => p.color.toLowerCase() === color.toLowerCase()
      );
    }
    return filteredProductList;
  };
  const remainProductList = queryProductList();
  return (
    <div className="py-2 d-flex flex-column justify-content-center">
      <h5>Products</h5>
      <div className="row">
        {remainProductList.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Products;
