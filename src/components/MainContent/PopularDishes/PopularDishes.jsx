import styles from "./PopularDishes.module.css";
import burger1 from "../../../assets/foodImages/burger1.jpg";
import burger2 from "../../../assets/foodImages/burger2.jpg";
import burger3 from "../../../assets/foodImages/burger3.jpg";
import { useState } from "react";

const PopularDishes = ({ addToCart }) => {
    const [discount] = useState(15);
    const [price] = useState(5.59);
    const [isGlowing, setIsGlowing] = useState(false);
    const [showAll, setshowAll] = useState(false);


    const handleClick = () => {
        setIsGlowing((prevState) => !prevState);
    };

    const handleShowAllClick = () => {
        setshowAll((prevState) => !prevState)
    };

    const dishes = [
        { id: 1, name: "Fish Burger", price: 5.59, image: burger1 },
        { id: 2, name: "Chicken Burger", price: 6.99, image: burger2 },
        { id: 3, name: "Veggie Burger", price: 4.99, image: burger3 },
        { id: 4, name: "Fish Burger", price: 5.59, image: burger1 },
        { id: 5, name: "Chicken Burger", price: 6.99, image: burger2 },
        { id: 6, name: "Veggie Burger", price: 4.99, image: burger3 },
        { id: 7, name: "Fish Burger", price: 5.59, image: burger1 },
        { id: 8, name: "Chicken Burger", price: 6.99, image: burger2 },
        { id: 9, name: "Veggie Burger", price: 4.99, image: burger3 }
    ];

    return (
        <div className={styles.PopularDishes}>
            <div className={styles.PopularDishesHeading}>
                <h2>Popular Dishes</h2>
                <button className={styles.Viewall} onClick={handleShowAllClick}>{showAll ? 'Show Less' : 'View All'}</button>
            </div>
            {/* <div className={styles.PopularItems}> --------------->if cards not work <---------------*/}
            <div className={`${styles.PopularItems} ${showAll ? styles.showAll : ''}`}>
                {dishes.map((dish) => (
                    <div key={dish.id} className={`${styles.PopularItemsCard}`}>
                        <div className={styles.PopularItemsCardTop}>
                            <div className={styles.DiscountBadge}>{discount}% Off</div>
                            <span className={`${styles.Heart} ${isGlowing ? styles.glow : ''}`} onClick={handleClick}>❤️</span>
                        </div>
                        <img src={dish.image} alt={dish.name} className={styles.FoodImage} />
                        <div className={styles.StarRating}>
                            <span className={styles.Star}>&#9733;</span>
                            <span className={styles.Star}>&#9733;</span>
                            <span className={styles.Star}>&#9733;</span>
                            <span className={styles.Star}>&#9733;</span>
                            <span className={styles.Star}>&#9733;</span>
                        </div>
                        <div className={styles.PopularItemsCardBottom}>
                            <div className={styles.PopularItemNamePrice}>
                                <div className={styles.PopularItemName}>{dish.name}</div>
                                <div className={styles.PopularItemPrice}><span>$</span>{dish.price}</div>
                            </div>
                            <button className={styles.AddItemButton} onClick={() => {
                                addToCart(dish)
                            }}>+</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PopularDishes;
