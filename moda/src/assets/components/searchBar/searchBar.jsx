import { AutoComplete, Input } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import "./searchBar.css";

function SearchBar() {
  const [products, setProducts] = useState([]);
  const [options, setOptions] = useState([]);
  const fetchHomePageProducs = async () => {
    try {
      const response = await axios.get(`https://dummyjson.com/products`);
      setProducts(response.data.products);
    } catch (error) {
      console.error("Error while fetching data", error);
    }
  };

  useEffect(() => {
    fetchHomePageProducs();
  }, []);
  const handleSearch = (value) => {
    if (value) {
      const filteredProducts = products
        .filter((product) =>
          product.title.toLowerCase().includes(value.toLowerCase())
        )
        .map((product) => ({
          value: product.title, //
          label: (
            <div
              key={product.id}
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <span>{product.title}</span>
              <span style={{ color: "gray", fontSize: "0.8em" }}>
                {product.price} $
              </span>
            </div>
          ),
        }));

      setOptions(filteredProducts);
    } else {
      setOptions([]);
    }
  };

  return (
    <div style={{ width: "23vh", padding: "3vh" }}>
      <AutoComplete
        style={{ width: "100%" }}
        options={options}
        onSearch={handleSearch}
        placeholder="Search products"
      >
        <Input.Search enterButton className="custom-search-button" />
      </AutoComplete>
    </div>
  );
}

export default SearchBar;
