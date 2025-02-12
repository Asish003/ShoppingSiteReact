import LeftSidebar from "../LeftSidebar/LeftSidebar";
import Maincontent from "../MainContent/MainContent";
import RightSidebar from "../RightSidebar/RightSidebar";
import styles from "./Homescreen.module.css";
import { useState } from "react";

const Homescreen = () => {
    const [cartItems, setCartItems] = useState(new Map());

    const addToCart = (id, num = 1) => {
        setCartItems((prevMap) => {
            const newMap = new Map(prevMap); // ✅ Create a new Map to update state
            if (!newMap.has(id)) {
                newMap.set(id, num);
            } else {
                newMap.set(id, newMap.get(id) + 1);
            }
            return newMap; // ✅ Always return a new state
        });
    };

    const removeItem = (id) => {
        setCartItems((prevMap) => {
            const newMap = new Map(prevMap);
            if (newMap.has(id)) {
                const newQuantity = newMap.get(id) - 1;
                if (newQuantity > 0) {
                    newMap.set(id, newQuantity);
                } else {
                    newMap.delete(id); // ✅ Remove item if quantity reaches 0
                }
            }
            return newMap;
        });
    };

    return (
        <div className={styles.homescreen_layout}>
            <LeftSidebar />
            <Maincontent addToCart={addToCart} />
            <RightSidebar cartItems={cartItems} removeItem={removeItem} />
        </div>
    );
};

export default Homescreen;
