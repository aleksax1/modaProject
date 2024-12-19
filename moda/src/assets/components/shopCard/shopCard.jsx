import { HeartFilled, HeartOutlined } from "@ant-design/icons";
import { Card } from "antd";
import React, { useContext } from "react";
import { AppContext } from "../../../context/AppContext.jsx";

const { Meta } = Card;

export default function ShopCard({ product }) {
  const { favorites, addProductToFavorites } = useContext(AppContext);

  const isFavorite =
    favorites.some((favorit) => favorit.id === product.id);
  console.log(favorites, "FAVORITES");
  console.log(product, "Product being passed to ShopCard");
  return (
    <Card
      hoverable
      style={{ width: 240, textAlign: "center" }}
      cover={<img alt={product.title} src={product.thumbnail} />}
    >
       <div
        style={{ position: "absolute", top: 10, right: 10 }}
        onClick={() => addProductToFavorites(product)}
      >
        {isFavorite ? (
          <HeartFilled
            style={{
              fontSize: 25,
              color: "red",
            }}
          />
        ) : (
          <HeartOutlined
            style={{
              fontSize: 25,
            }}
          />
        )}
      </div>
      <Meta title={product.title} description={product.description} />
    </Card>
  );
}
