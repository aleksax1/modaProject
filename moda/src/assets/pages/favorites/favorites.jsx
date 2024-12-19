import { Button } from "antd";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../../context/AppContext";
import Footer from "../../components/footer/footer";
import Nav from "../../components/nav/nav";
import ShopCard from "../../components/shopCard/shopCard";
export default function Shop() {
  const navigate = useNavigate();

  const { favorites } = useContext(AppContext);

  return (
    <>
      <Nav />
      {favorites.length > 0 ? (
        <div className="shopGlavni">
          {favorites.map((product) => (
            <ShopCard product={product} key={product.id} />
          ))}
        </div>
      ) : (
        <div
          style={{
            height: "50vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 10,
          }}
        >
          <h1>Nema proizvoda, molimo vas izaberite neke</h1>
          <Button onClick={() => navigate("/shop")}>Proizvodi</Button>
        </div>
      )}
      <Footer />
    </>
  );
}
