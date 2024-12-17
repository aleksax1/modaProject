import { FilterOutlined } from "@ant-design/icons";
import { Checkbox, Col, Drawer, FloatButton, Row, Spin } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/footer/footer";
import Nav from "../../components/nav/nav";
import "./shop.css";
import { useContext } from "react";
import { AppContext } from "../../../context/AppContext.jsx";
import ShopCard from "../../components/shopCard/shopCard.jsx";

export default function Shop() {
  const categories = [
    "beauty",
    "fragrances",
    "furniture",
    "groceries",
    "home-decoration",
    "kitchen-accessories",
    "laptops",
    "mens-shirts",
    "mens-shoes",
    "mens-watches",
    "mobile-accessories",
    "motorcycle",
    "skin-care",
    "smartphones",
    "sports-accessories",
    "sunglasses",
    "tablets",
    "tops",
    "vehicle",
    "womens-bags",
    "womens-dresses",
    "womens-jewellery",
    "womens-shoes",
    "womens-watches",
  ];
  const { favorites, setFavorites } = useContext(AppContext);
  const navigate = useNavigate();
  const [homePageProducts, setHomePageProducts] = useState([]);
  const [category, setCategory] = useState("mens-shoes");
  console.log(category);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [allProducts, setallProducts] = useState([]);

  const showDrawer = () => {
    setOpen(true);
  };

console.log("favorites:", favorites);
console.log("setFavorites:", setFavorites);
  const changeFavorite = (id) => {
    setFavorites((prevFavorites) => {
      if (prevFavorites.includes(id)) {
        return prevFavorites.filter((product) => product !== id);
      } else {
        return [...prevFavorites, id];
      }
    });
  };
  const onClose = () => {
    setOpen(false);
  };

  const fetchHomePageProducs = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://dummyjson.com/products/category/${category}`
      );

      console.log(response.data.products);
      setHomePageProducts(response.data.products);
    } catch (error) {
      console.error("Error while fetching data", error);
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchHomePageProducs();
  }, [category]);
  return (
    <>
      <Nav />
      <FloatButton
        onClick={showDrawer}
        placement="bottom"
        icon={<FilterOutlined />}
        style={{ width: "60px", height: "60px", border: "grey" }}
        tooltip={<div>Filter by category</div>}
      />
      <Drawer title="Categorys" onClose={onClose} open={open} placement="right">
        <form action="">
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Checkbox.Group style={{ width: "100%" }}>
              <Row gutter={[16, 16]}>
                {categories.map((category, index) => (
                  <Col span={8} key={index}>
                    <Checkbox
                      value={category}
                      checked={category === category}
                      onChange={() => setCategory(category)}
                    >
                      {category}
                    </Checkbox>
                  </Col>
                ))}
              </Row>
            </Checkbox.Group>
          </div>
        </form>
      </Drawer>
      <div className="shopGlavni" style={{padding:"7vh 0"}}>
        {loading ? (
          console.log("loading")
        ): (
          homePageProducts.map((product) => (
            <ShopCard
              key={product.id}
              title={product.title}
              description={product.description}
              image={product.thumbnail}
              favorite={favorites.includes(`${product.id}`)}
              changeFavorite={() => changeFavorite(`${product.id}`)}
            />
          ))
        )}
      </div>
      <Footer />
    </>
  );
}
