import { Button, Drawer } from "antd";
import React, { useState } from "react";
import Footer from "../../components/footer/footer";
import Nav from "../../components/nav/nav";
import "./shop.css";
import ShopCard from "../../components/shopCard/shopCard";
import cardImg1 from "./Rectangle 3.png"; 
import cardImg2 from "./Rectangle 4.png";
import cardImg3 from "./Rectangle 5.png";
import cardImg4 from "./Rectangle 6.png";
import cardImg5 from "./Rectangle 7.png";
export default function Shop() {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Nav />
      <Button type="primary" onClick={showDrawer} className="btnFilter">
        FILTER
      </Button>
      <Drawer title="FILTERS" onClose={onClose} open={open} placement="left">
        <form action="">
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div>
              <input type="checkbox" name="" id="" />
              <label htmlFor="">Pants</label>
            </div>
            <div>
              <input type="checkbox" name="" id="" />
              <label htmlFor="">T-shirt</label>
            </div>
            <div>
              {" "}
              <input type="checkbox" name="" id="" />
              <label htmlFor="">Jacket</label>
            </div>
            <div>
              <input type="checkbox" name="" id="" />
              <label htmlFor="">Hoodie</label>
            </div>
            <div>
              {" "}
              <input type="checkbox" name="" id="" />
              <label htmlFor="">Suits</label>
            </div>
            <div>
              <input type="checkbox" name="" id="" />
              <label htmlFor="">Overzise shirts</label>
            </div>
            <button>filtriraj</button>
          </div>
        </form>
          </Drawer>
          <div className="shopGlavni">
              <ShopCard title="Winter jacket" description="$110" image={cardImg2}></ShopCard>
              <ShopCard title="T-shirt" description="$50" image={cardImg3}></ShopCard>
              <ShopCard title="T-shirt " description="$50" image={cardImg4}></ShopCard>
              <ShopCard title="Outhum jacket" description="$50" image={cardImg1}></ShopCard>
              <ShopCard title="Outhum jacket" description="$50" image={cardImg1}></ShopCard>
              <ShopCard title="T-shirt" description="$50" image={cardImg3}></ShopCard>
              <ShopCard title="Winter jacket" description="$110" image={cardImg2}></ShopCard>
              <ShopCard title="T-shirt " description="$50" image={cardImg4}></ShopCard>
              <ShopCard title="Winter jacket" description="$110" image={cardImg2}></ShopCard>
              <ShopCard title="Outhum jacket" description="$50" image={cardImg1}></ShopCard>
              <ShopCard title="T-shirt " description="$50" image={cardImg4}></ShopCard>
              <ShopCard title="T-shirt" description="$50" image={cardImg3}></ShopCard>
      </div>
      <Footer />
    </>
  );
}
