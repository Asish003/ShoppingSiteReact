import styles from "./RecentOrder.module.css";

import pizza from "../../../assets/foodImages/pizza.jpg";
import ramen from "../../../assets/foodImages/ramen.jpg";
import asianfood from "../../../assets/foodImages/asianfood.jpg";

const RecentOrder = () =>{

    const dishes = [
        { id: 1, name: "Pizza", price: 5.59 , image:pizza},
        { id: 2, name: "Ramen", price: 6.99 , image:ramen},
        { id: 3, name: "Asian Food", price: 4.99 , image:asianfood}
    ]
    return(
        <>
            <div className={`${styles.RecentOrder}`}>
                <div className={`${styles.RecentDishesHeading}`}>
                    <h2>Recent Orders</h2>
                    {/* <a href="#">View all</a> */}
                    <h5>View All</h5>
                </div>
                <div className={`${styles.RecentItems}`}>
                    {dishes.map((dish) => (
                        <div key={dish.id} className={styles.RecentOrdersCard}>
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