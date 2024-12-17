
import { useState } from "react";
import { createContext } from "react";

const AppContext = createContext();

function ContextProvider({ children }) {
  const [favorites, setFavorites] = useState([]);
  const [category, setCategory] = useState(["mens-shoes"]);

  const values = {
    favorites,
    setFavorites,
    category,
    setCategory
  };
  
 

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
}

export { AppContext, ContextProvider };