import { useState } from "react";
import styles from "./CartSection.module.css";

const CartSection = ({ cartItems, removeItem }) => {
    
    const [TotalPrice,setTotalPrice] = useState(0);
    const [TotalQuantity,setTotalQuantity] = useState(0);

    const bill = () =>{
        setTotalPrice(TotalPrice)
    }

    const amount = () =>{
        setTotalQuantity(TotalQuantity)
    }

    return (
        <div className={styles.CartSection}>
            {Object.keys(cartItems).length === 0? (
                <p className={styles.EmptyCart}>Your cart is empty</p>
            ) : (
                <ul className={styles.CartList}>
                    {/* {Object.entries(cartItems).forEach((item) => ( */}
                    {Object.entries(cartItems).map(([id,item]) => (
                        <li key={id} className={styles.CartItem}>
                            <div>
                                <img src={item.image} alt={item.name} className={styles.CartItemImage} />
                            </div>
                            <div className={styles.CartItemDetails}>
                                <span className={styles.ItemName}>{item.name}</span>
                                <div>
                                <button className={styles.RemoveButton} onClick={() => removeItem(id)}>❌</button>
                                <span>{item.quantity}</span>
                                <button className={styles.RemoveButton} onClick={() => removeItem(id)}>❌</button>
                                </div>
                            </div>
                                <span className={styles.ItemPrice}>${(item.price * item.quantity).toFixed(2)}</span>
                        </li>
                    ))}
                </ul>
            )}
            <hr></hr>
            {TotalPrice !== 0 ?
                <div className={`${styles.CartTotal}`}>
                    <span>Total</span>
                    <span>${TotalPrice}</span>
                </div> : null
                }
        </div>
    );
};

export default CartSection;
