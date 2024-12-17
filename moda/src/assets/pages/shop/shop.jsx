import { FilterOutlined } from "@ant-design/icons";
import { Checkbox, Col, Drawer, FloatButton, Row } from "antd";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../../context/AppContext.jsx";
import Footer from "../../components/footer/footer";
import Nav from "../../components/nav/nav";
import ShopCard from "../../components/shopCard/shopCard.jsx";
import "./shop.css";

export default function Shop({}) {
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
  const { favorites, setFavorites, category, setCategory } =useContext(AppContext);
  const navigate = useNavigate();
  const [homePageProducts, setHomePageProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  //drawrs function
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const changeFavorite = (id) => {
    setFavorites((prevFavorites) => {
      if (prevFavorites.includes(id)) {
        return prevFavorites.filter((product) => product !== id);
      } else {
        return [...prevFavorites, id];
      }
    });
  };

  const fetchHomePageProducs = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://dummyjson.com/products/category/${category}`
      );
      setHomePageProducts(response.data.products);
    } catch (error) {
      console.error("Error while fetching data", error);
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchHomePageProducs();
  }, [category]);
  console.log(favorites)
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
            <Checkbox.Group style={{ width: "100%" }}onChange={(checkedValues) => {
          if (checkedValues.length > 0) {
            setCategory(checkedValues[checkedValues.length - 1]); // Set the last selected category
          }
        }}>
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
      <div className="shopGlavni" style={{ padding: "7vh 0" }}>
        {loading
          ? console.log("loading")
          : homePageProducts.map((product) => (
              <ShopCard
                key={product.id}
                title={product.title}
                description={product.description}
                stock={product.stock}
                price={product.price}
                image={product.thumbnail}
                favorite={favorites.includes(`${product.id}`)}
                changeFavorite={() => changeFavorite(`${product.id}`)}
              />
            ))}
      </div>
      <Footer />
    </>
  );
}
