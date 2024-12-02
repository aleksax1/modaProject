import { Card } from "antd";
import React from "react";

const { Meta } = Card;

export default function shopCard({ title, description, image }) {
    return (
      <Card
        hoverable
        style={{ width: 240, textAlign: "center" }}
        cover={<img alt={title} src={image} />}
      >
        <Meta title={title} description={description} />
      </Card>
  );
}
