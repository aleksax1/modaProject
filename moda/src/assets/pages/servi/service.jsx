import React from "react";
import Footer from "../../components/footer/footer";
import Nav from "../../components/nav/nav";
import contImg from "./hero-container (2).png";
import contService from "./Service-content.png";
import "./service.css";
export default function Service() {
  return (
    <>
      <Nav />
      <img src={contImg} alt="" style={{ width: "100%" }} />
      <div className="div2">
        <img
          src={contService}
          alt=""
          style={{ width: "100%" }}
          className="img2"
        />
      </div>

      <Footer></Footer>
    </>
  );
}
