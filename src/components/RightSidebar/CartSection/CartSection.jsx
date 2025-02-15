import { useState , useEffect} from "react";
import styles from "./CartSection.module.css";
import coupon from "../../../assets/Rightsidebaricons/Vector.svg"

const CartSection = ({ cartItems, removeItem , addToCart }) => {

    const [TotalPrice,setTotalPrice] = useState(0);

    useEffect(() =>{
        let TotalPrice = 0;

        Object.values(cartItems).forEach((item) => {
            TotalPrice += item.price * item.quantity
        });

        setTotalPrice(Math.round(TotalPrice));
        // setTotalPrice(TotalPrice)
    },[cartItems]);
    
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
                                <div className={styles.CartItemsQuantity}>
                                <button className={styles.RemoveButton} onClick={() => removeItem(id)}>-</button>
                                <span>{item.quantity}</span>
                                <button className={styles.AddButton} onClick={() => addToCart(item)}>+</button>
                                </div>
                            </div>
                                <span className={styles.ItemPrice}>+<span>$</span>{(item.price * item.quantity).toFixed(2)}</span>
                        </li>
                    ))}
                </ul>
            )}
            {/* <hr></hr> */}

            {
                TotalPrice !== 0 ?
                <div className={`${styles.CartTotal}`}>
                    <span>Total</span>
                    <span>${TotalPrice}</span>
                </div> : null
            }

            {TotalPrice !== 0 ?
                <div className={`${styles.CartTotal}`}>
                    <button className={`${styles.CartCoupon}`}>
                        <span><img src={coupon} alt="couponImage" className={`${styles.couponImage}`}></img>Have a coupon code?</span>
                    </button>
                </div> : null
                }

            {TotalPrice !== 0 ?
                <div className={`${styles.CartTotal}`}>
                    <button className={`${styles.CartCheckout}`}>
                        checkout
                    </button>
                </div> : null
                }

        </div>
    );
};

export default CartSection;
