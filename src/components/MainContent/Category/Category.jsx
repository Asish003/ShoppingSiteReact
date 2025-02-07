import styles from "./Category.module.css";

import Bakery from "../../../assets/MainContentIcons/Baked.svg"
import Burger from "../../../assets/MainContentIcons/Burger.svg"
import Beverage from "../../../assets/MainContentIcons/Coffee.svg"
import Chicken from "../../../assets/MainContentIcons/Chicken.svg"
import Pizza from "../../../assets/MainContentIcons/Fast.svg"
import Seafood from "../../../assets/MainContentIcons/Fish.svg"

const Category = () =>{
    return(
        <>
            <div className={`${styles.Category}`}>
                
                <div className={`${styles.CategoryHeading}`}>
                    <h2>Category</h2>
                    <h5>View All</h5>
                </div>
                
                <div className={`${styles.Categories}`}>
                <button className={`${styles.CategoryButtons}`} ><img src = {Bakery} alt = 'Dashboard' className={`${styles.buttonIcon}`}/>Bakery</button> 
                <button className={`${styles.CategoryButtons}`} ><img src = {Burger} alt = 'Food order icon' className={`${styles.buttonIcon}`}/>Burger</button> 
                <button className={`${styles.CategoryButtons}`} ><img src = {Beverage} alt = 'Favorite icon' className={`${styles.buttonIcon}`}/>Beverage</button> 
                <button className={`${styles.CategoryButtons}`} ><img src = {Chicken} alt = 'Message icon' className={`${styles.buttonIcon}`}/>Chicken</button> 
                <button className={`${styles.CategoryButtons}`} ><img src = {Pizza} alt = 'Dashboard' className={`${styles.buttonIcon}`}/>Pizza</button> 
                <button className={`${styles.CategoryButtons}`} ><img src = {Seafood} alt = 'Food order icon' className={`${styles.buttonIcon}`}/>Seafood</button> 
                </div>

            </div>
        </>
    );
}

export default Category