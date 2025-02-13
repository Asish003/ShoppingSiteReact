import LeftSidebar from "../LeftSidebar/LeftSidebar";
import Maincontent from "../MainContent/MainContent";
import RightSidebar from "../RightSidebar/RightSidebar";
import styles from "./Homescreen.module.css";

import { useState } from "react";


const Homescreen = () => {

  const [cartItems, setCartItems] = useState({});
  
  const addToCart = (dish) => {
    setCartItems((prevCart) => {
      return {
        ...prevCart,
        [dish.id]: prevCart[dish.id]
          ? { ...prevCart[dish.id], quantity: prevCart[dish.id].quantity + 1 }
          : { ...dish, quantity: 1 }
      };
    });
  };
  
  const removeItem = (id) => {
    setCartItems((prevCart) => {
      if (!prevCart[id]) return prevCart;
  
      const updatedCart = { ...prevCart };
  
      if (updatedCart[id].quantity > 1) {
        updatedCart[id] = {
          ...updatedCart[id], 
          quantity: updatedCart[id].quantity - 1, 
        };
      } else {
        delete updatedCart[id];
      }
  
      return updatedCart;
    });
  };
  

  return (
    //main container
    <div className={`${styles.homescreen_layout}`}>
      <LeftSidebar />
      <Maincontent addToCart={addToCart} />
      <RightSidebar cartItems={cartItems} removeItem={removeItem} addToCart={addToCart}/>
    </div>
  );
};

export default Homescreen;