import styles from "./LeftSidebar.module.css"

import Dashboard from "../../assets/LeftNavbarIcons/ResturantLocation.svg"
import FoodOrder from "../../assets/LeftNavbarIcons/DeliveryScooter.svg"
import Favorite from "../../assets/LeftNavbarIcons/Review.svg"
import Message from "../../assets/LeftNavbarIcons/OrderDiscussion.svg"
import OrderHistory from "../../assets/LeftNavbarIcons/24HourFoodDelivery.svg"
import Bills from "../../assets/LeftNavbarIcons/Bill.svg"
import Setting from "../../assets/LeftNavbarIcons/Setting.svg"

const LeftSidebar = () => {
    return (
        <div className={`${styles.LeftSidebarFeatures}`}>
            <h1 className={`${styles.BrandName}`}>GoMeal<span className={`${styles.BrandNameDot}`}>.</span></h1>
            <div className={`${styles.Services}`}>
                <button className={`${styles.ServiceButtons}`} ><img src = {Dashboard} alt = 'Dashboard' className={`${styles.buttonIcon}`}/>Dashboard</button> 
                <button className={`${styles.ServiceButtons}`} ><img src = {FoodOrder} alt = 'Food order icon' className={`${styles.buttonIcon}`}/>Food Order</button> 
                <button className={`${styles.ServiceButtons}`} ><img src = {Favorite} alt = 'Favorite icon' className={`${styles.buttonIcon}`}/>Favorite</button> 
                <button className={`${styles.ServiceButtons}`} ><img src = {Message} alt = 'Message icon' className={`${styles.buttonIcon}`}/>Message</button> 
                <button className={`${styles.ServiceButtons}`} ><img src = {OrderHistory} alt = 'History icon' className={`${styles.buttonIcon}`}/>Order History</button> 
                <button className={`${styles.ServiceButtons}`} ><img src = {Bills} alt = 'Bills icon' className={`${styles.buttonIcon}`}/>Bills</button> 
                <button className={`${styles.ServiceButtons}`} ><img src = {Setting} alt = 'Setting icon' className={`${styles.buttonIcon}`}/>Setting</button> 
            </div>
            <div className={`${styles.UpgradeServices}`}>
                <h4>Upgrade your<br/>Account</h4>
                <button className={`${styles.UpgradeServicesButton}`}>Upgrade</button>
                <div className={`${styles.circle}`}></div>
            </div>
        </div>
    );
};

export default LeftSidebar;
