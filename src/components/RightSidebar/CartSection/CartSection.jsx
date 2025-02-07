import { useState } from "react";
import styles from "./CartSection.module.css";

const CartSection = ({ cartItems, removeItem }) => {
    return (
        <div className={styles.CartSection}>
            <h2>Shopping Cart</h2>
            {cartItems.length === 0 ? (
                <p className={styles.EmptyCart}>Your cart is empty</p>
            ) : (
                <ul className={styles.CartList}>
                    {cartItems.map((item, index) => (
                        <li key={index} className={styles.CartItem}>
                            <img src={item.image} alt={item.name} className={styles.CartItemImage} />
                            <div className={styles.CartItemDetails}>
                                <span className={styles.ItemName}>{item.name}</span>
                                <span className={styles.ItemPrice}>${item.price}</span>
                            </div>
                            <button className={styles.RemoveButton} onClick={() => removeItem(index)}>❌</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default CartSection;
