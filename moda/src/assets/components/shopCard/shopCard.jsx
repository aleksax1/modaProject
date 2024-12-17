import { HeartFilled, HeartOutlined } from "@ant-design/icons";
import { Card } from "antd";
import React from "react";

const { Meta } = Card;

export default function ShopCard({
  title,
  description,
  image,
  changeFavorite,
  favorite,
  stock,
  price,
}) {
  return (
    <Card
      hoverable
      style={{ width: 240, textAlign: "center" }}
      cover={<img alt={title} src={image} />}
    >
      <Meta
        title={title}
        description={
          <>
            <p>{description}</p>
            <p style={{ color: "black" }}>Stock: {stock}</p>
            <p style={{ color: "black" }}> Price: ${price}</p>
            <div onClick={changeFavorite}>
              {favorite ? (
                <HeartFilled
                  style={{
                    fontSize: 25,
                    color:"red"
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
          </>
        }
      />
    </Card>
  );
}
