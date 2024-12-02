import { Card } from "antd";
import React from "react";
import Footer from "../../components/footer/footer.jsx";
import Nav from "../../components/nav/nav.jsx";
import baner from "./Hero-container .png";
import "./homePage.css";
import CardMan from "../../components/cardMen/cardMen.jsx";
import baner2 from "./Rectangle 8.png"
import collectionImg from "./collection-div.png"
import listImg from "./lists.png"
const { Meta } = Card;
export default function HomePage() {
  return (
    <>
      <Nav />
      <img src={baner} alt="Baner" className="baner" />
      <div className="naslov">
        <p>FEATURED PRODUCTS</p>
        <div>
          <button>View all</button>
        </div>
      </div>
      <div className="cardsDiv">
        <CardMan></CardMan>
      
        </div>
          <div className="baner2">
              <h1 style={{ color: "" }}>Made-To-Order</h1>
              <button>Learn more</button>
              <img src={baner2} alt="baner" style={{ width:"100%"}} />
          </div>  
          <div className="shop">
            <img src={collectionImg} alt="nistaa" />
          </div>
          <div className="service">
            <img src={listImg} alt="nistaa" />
          </div>
      <Footer />
    </>
  );
}
