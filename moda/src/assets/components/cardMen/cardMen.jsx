import { Card } from "antd";
import React from "react";
import cardImg1 from "./Rectangle 3.png"; 
import cardImg2 from "./Rectangle 4.png";
import cardImg3 from "./Rectangle 5.png";
import cardImg4 from "./Rectangle 6.png";
import cardImg5 from "./Rectangle 7.png";

const { Meta } = Card;

export default function CardMan() {
  const cardImages = [cardImg1, cardImg2, cardImg3, cardImg4, cardImg5];

  return (
    <div style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap", gap: "20px" }}>
      {cardImages.map((image, index) => (
        <Card
          key={index}
          hoverable
          style={{ width: 240, textAlign: "center" }}
          cover={<img alt={`product ${index + 1}`} src={image} />}
        >
          <Meta title={`Product ${index + 1}`} description={`$${(index + 1) * 10}`} />
        </Card>
      ))}
    </div>
  );
}
