import { Button, Checkbox, Col, Drawer, FloatButton, Row } from "antd";
import React, { useState } from "react";
import Footer from "../../components/footer/footer";
import Nav from "../../components/nav/nav";
import "./shop.css";
import ShopCard from "../../components/shopCard/shopCard";
import ProductCard from "../../components/cardMen/cardMen";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { FilterOutlined } from "@ant-design/icons";

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

  const navigate = useNavigate();
  const [homePageProducts, setHomePageProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState("mens-shoes");
  console.log(category)
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const fetchHomePageProducs = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`https://dummyjson.com/products/category/${category}`);

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
                    <Checkbox value={category} onChange={(e)=>setCategory(category)}>{category}</Checkbox>
                  </Col>
                ))}
              </Row>
            </Checkbox.Group>
          </div>
        </form>
      </Drawer>
      <div className="shopGlavni">
        <ProductCard products={homePageProducts} />
      </div>
      <Footer />
    </>
  );
}
