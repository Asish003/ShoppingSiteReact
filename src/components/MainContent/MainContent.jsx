import Navbar from  "./Navbar/Navbar";
import Promotion from  "./Promotion/Promotion";
import Category from  "./Category/Category";
import PopularDishes from  "./PopularDishes/PopularDishes";
import RecentOrder  from "./RecentOrder/RecentOrder";

import styles from "./MainContent.module.css"

const Maincontent = ({addToCart}) =>{
    return(
        <>
            <div className={`${styles.MainContentFeatures}`}>
                <Navbar/>
                <Promotion/>
                <Category/>
                <PopularDishes addToCart={addToCart}/>
                <RecentOrder/>
            </div>
        </>
    );
};

export default Maincontent;