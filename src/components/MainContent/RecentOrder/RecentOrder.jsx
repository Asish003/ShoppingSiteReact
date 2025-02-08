import styles from "./RecentOrder.module.css";

import pizza from "../../../assets/foodImages/pizza.jpg";
import ramen from "../../../assets/foodImages/ramen.jpg";
import asianfood from "../../../assets/foodImages/asianfood.jpg";

import { useState } from "react";

const RecentOrder = () =>{

    const[showAll,setshowAll] = useState(false);

    const handleShowAllClick = () =>{
        setshowAll((prevState) => !prevState)
    };

    const dishes = [
        { id: 1, name: "Pizza", price: 5.59 , image:pizza},
        { id: 2, name: "Ramen", price: 6.99 , image:ramen},
        { id: 3, name: "Asian Food", price: 4.99 , image:asianfood},
        { id: 4, name: "Pizza", price: 5.59 , image:pizza},
        { id: 5, name: "Ramen", price: 6.99 , image:ramen},
        { id: 6, name: "Asian Food", price: 4.99 , image:asianfood},
        { id: 7, name: "Pizza", price: 5.59 , image:pizza},
        { id: 8, name: "Ramen", price: 6.99 , image:ramen},
        { id: 9, name: "Asian Food", price: 4.99 , image:asianfood}
    ]
    return(
        <>
            <div className={`${styles.RecentOrder}`}>
                <div className={`${styles.RecentDishesHeading}`}>
                    <h2>Recent Orders</h2>
                    <button className={styles.Viewall} onClick={handleShowAllClick}>{showAll ? 'Show Less' : 'View All'}</button>
                </div>
                <div className={`${styles.RecentItems} ${showAll ? styles.showAll : ''}`} >
                    {dishes.map((dish) => (
                        <div key={dish.id} className={`${styles.RecentOrdersCard}`}>
                            <button className={styles.RecentOrdersButton}>
                                <div className={styles.RecentOrdersItem}>
                                    <img src={dish.image} alt={dish.name}></img>
                                </div>
                                <div className={styles.RecentItemNamePrice}>
                                    <div className={styles.RecentItemName}>{dish.name}</div>
                                    <div className={styles.RecentItemPrice}><span>$</span>{dish.price}</div>
                                </div>
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default RecentOrder