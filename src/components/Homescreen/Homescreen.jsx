import LeftSidebar from "../LeftSidebar/LeftSidebar";
import Maincontent from "../MainContent/MainContent";
import RightSidebar from "../RightSidebar/RightSidebar";
import styles from "./Homescreen.module.css";

import { useState } from "react";


const Homescreen = () => {

  const [cartItems, setCartItems] = useState({});
  
  const addToCart = (dish) => {
    setCartItems((prevMap) => {
      const newMap = {...prevMap};
      if (!newMap[dish.id]) {
        newMap[dish.id] = { ...dish, quantity: 1 };
      }
      else {
        newMap[dish.id].quantity += 1;
      }
      return newMap;
    });
  };

  const removeItem = (id) => {
    setCartItems((prevMap) => {
      const newMap = {...prevMap};
      if (newMap[id]) {
        if (newMap[id].quantity > 1) {
          newMap[id].quantity -= 1;
        }
      } else {
        delete newMap[id];
      }
      return newMap;
    });
  };

  return (
    //main container
    <div className={`${styles.homescreen_layout}`}>
      <LeftSidebar />
      <Maincontent addToCart={addToCart} />
      <RightSidebar cartItems={cartItems} removeItem={removeItem} />
    </div>
  );
};

export default Homescreen;