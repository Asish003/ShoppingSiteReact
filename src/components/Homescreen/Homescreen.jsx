import LeftSidebar from "../LeftSidebar/LeftSidebar";
import Maincontent from "../MainContent/MainContent";
import RightSidebar from "../RightSidebar/RightSidebar";
import styles from "./Homescreen.module.css";

import { useState } from "react";


const Homescreen = () => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (item) => {
        setCartItems([...cartItems, item]);
    }; 

    const removeItem = (index) => {
      setCartItems((prevCart) => prevCart.filter((_, i) => i !== index));
    };

    return (
        //main container
        <div className={`${styles.homescreen_layout}`}>
          <LeftSidebar/>
          <Maincontent  addToCart={addToCart}/>
          <RightSidebar cartItems={cartItems} removeItem={removeItem}/>
      </div>
    );
};

export default Homescreen;