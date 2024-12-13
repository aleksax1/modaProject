import {
  SearchOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./nav.css";
import logo from "./logo.png"
export default function Nav() {
  const navigate = useNavigate();
  return (
    <>
      <div className="nav1">
        <p>MEGA SALE</p>
        <p>Take 10% off</p>
      </div>
      <div className="nav2">
        <div><img src={logo} alt=""onClick={() => navigate("/")} /></div>
        <div className="nav22">
          <div>
            <Link to={"/"} style={{color:"black",textDecoration:"none"}}>HOME PAGE</Link>
          </div>
          <div>
            <Link to={"/shop"} style={{color:"black",textDecoration:"none"}}>SHOP</Link>
          </div>
          <div>
            <Link to={"/weedings"} style={{color:"black",textDecoration:"none"}}>WEEDINGS</Link>
          </div>
          <div>
            <Link to={"/services"} style={{color:"black",textDecoration:"none"}}>SERVICES</Link>
          </div>
          <div>
            <Link to={"/contact"} style={{color:"black",textDecoration:"none"}}>CONTACTS</Link>
          </div>
        </div>
        <div>
        <UserOutlined style={{ fontSize: "3vh", color: "black", paddingRight:'5px',fontWeight:"900",font:"bold"}} />
        <ShoppingCartOutlined style={{ fontSize: "3vh", color: "black" ,paddingRight:'5px'}} />
          <SearchOutlined style={{ fontSize: "3vh", color: "black",paddingRight:'5px' }} />
        </div>
      </div>
    </>
  );
}
