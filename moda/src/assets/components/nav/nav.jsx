import {
  SearchOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Badge } from "antd";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../../../context/AppContext.jsx";
import logo from "./logo.png";
import "./nav.css";

export default function Nav() {
  const { favorites, setFavorites, category, setCategory } =
    useContext(AppContext);
  const [homePageProducts, setHomePageProducts] = useState([]);
  const [allFavoriteProducts, setAllFavoriteProducts] = useState([]);

  const navigate = useNavigate();
  console.log(category);
  const fetchHomePageProducs = async () => {
    try {
      const response = await axios.get(
        `https://dummyjson.com/products/category/${category}`
      );
      setHomePageProducts(response.data.products);
    } catch (error) {
      console.error("Error while fetching data", error);
    }
  };

  useEffect(() => {
    if (category) {
      fetchHomePageProducs();
    }
  }, [favorites]);
  return (
    <>
      <div className="nav1">
        <p>MEGA SALE</p>
        <p>Take 10% off</p>
      </div>
      <div className="nav2">
        <div>
          <img
            style={{ height: "17vh", cursor: "pointer" }}
            src={logo}
            alt=""
            onClick={() => navigate("/")}
          />
        </div>
        <div className="nav22">
          <div>
            <Link to={"/"} style={{ color: "black", textDecoration: "none" }}>
              HOME PAGE
            </Link>
          </div>
          <div>
            <Link
              to={"/shop"}
              style={{ color: "black", textDecoration: "none" }}
            >
              SHOP
            </Link>
          </div>
          <div>
            <Link
              to={"/contact"}
              style={{ color: "black", textDecoration: "none" }}
            >
              CONTACTS
            </Link>
          </div>
        </div>
        <div>
          <UserOutlined
            style={{
              fontSize: "4vh",
              color: "black",
              paddingRight: "5px",
              fontWeight: "900",
              font: "bold",
            }}
          />
          <div style={{ position: "relative", display: "inline-block" }}>
            <Badge count={favorites.length}>
              <ShoppingCartOutlined
                style={{
                  fontSize: "4.3vh",
                  color: "black",
                  paddingRight: "5px",
                  cursor: "pointer",
                }}
                onClick={() => navigate("/favorites")}
              />
            </Badge>
          </div>

          <SearchOutlined
            style={{ fontSize: "4vh", color: "black", paddingLeft: "5px" }}
          />

          {/*<Drawer
            title="Favorites"
            onClose={onClose}
            open={open}
            placement="right"
            width={"40vw"}
            className="centered-drawer"
          >
            {favorites.length > 0 ? (
              <Row gutter={[16, 16]} justify="center">
                {homePageProducts
                  .filter((product) => favorites.includes(`${product.id}`))
                  .map((product) => (
                    <Col span={12} key={product.id}>
                      <ShopCard
                        key={product.id}
                        title={product.title}
                        image={product.thumbnail}
                        stock={product.stock}
                        price={product.price}
                        favorite={favorites.includes(`${product.id}`)}
                        changeFavorite={() => changeFavorite(`${product.id}`)}
                      />
                    </Col>
                  ))}
                <Button style={{ Color: "green" }}>BUY</Button>
              </Row>
            ) : (
              <div style={{ textAlign: "center", padding: "2rem" }}>
                <h2>Don't have any favorites.</h2>
              </div>
            )}
          </Drawer>*/}
        </div>
      </div>
    </>
  );
}
