import { Button, Card } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProductCard from "../../components/shopCard/shopCard.jsx";
import Footer from "../../components/footer/footer.jsx";
import Nav from "../../components/nav/nav.jsx";
import baner from "./bg-image.png";
import "./homePage.css";
import baner2 from "./Rectangle 8.png";
const { Meta } = Card;
export default function HomePage() {
  const navigate = useNavigate();
  const [homePageProducts, setHomePageProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchHomePageProducs = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        "https://dummyjson.com/products/category/mens-shirts"
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
  }, []);

  return (
    <>
      <Nav />
      <div className="baner1">
        <img src={baner} alt="Baner" className="baner" />
        <h2>LOOK YOUR BEST</h2>
        <h1>FOR YOUR SPECIAL DAY</h1>
        <button className="btn" onClick={() => navigate("/shop")}>
          Learn more
        </button>
      </div>
      <div className="naslov">
        <p>FEATURED PRODUCTS</p>
        <div>
          <Button
            variant="filled"
            color="transparent"
            size="large"
            onClick={() => navigate("/shop")}
          >
            View All
          </Button>
        </div>
      </div>
      <div className="cardsDiv" style={{ padding: "5vh 7vw" }}>
        <ProductCard products={homePageProducts} />
      </div>
      <div className="baner2">
        <h1 style={{ color: "" }}>Made-To-Order</h1>
        <button className="btn">Learn more</button>
        <img
          src={baner2}
          alt="baner"
          style={{ width: "100%", padding: "5VH 0" }}
        />
      </div>
      <Footer />
    </>
  );
}
