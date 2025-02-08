import { useState } from "react";

import styles from "./RightSidebar.module.css";
import CartSection from "../RightSidebar/CartSection/CartSection";

import Discussion from "../../assets/Rightsidebaricons/OrderDiscussion.svg"
import Notification from "../../assets/Rightsidebaricons/notification.svg"
import Setting from "../../assets/Rightsidebaricons/Setting.svg"
import Profit from "../../assets/Rightsidebaricons/Profit.svg"
import Income from "../../assets/Rightsidebaricons/Income.svg"

const RightSidebar = ({ cartItems, removeItem }) => {


    const [Balance, setBalance] = useState(100);

    const onBalance = () => {
        setBalance(Balance);
    };

    return (
        <div className={`${styles.RightSidebar}`}>
            <nav className={`${styles.RightSideNavbar}`}>
                <div className={`${styles.NavServiceButtons}`}>
                    <button className={`${styles.ServiceButton}`}><img src={Discussion} alt="ServiceButtonImage" className={`${styles.ServiceButtonImage}`}></img></button>
                    <button className={`${styles.ServiceButton}`}><img src={Notification} alt="ServiceButtonImage" className={`${styles.ServiceButtonImage}`}></img></button>
                    <button className={`${styles.ServiceButton}`}><img src={Setting} alt="ServiceButtonImage" className={`${styles.ServiceButtonImage}`}></img></button>
                </div>
                <div className={`${styles.navProfileButtonContainer}`}>
                    <button className={`${styles.navProfileButton}`}><img src={Setting} alt="ServiceButtonImage" className={`${styles.ServiceButtonImage}`}></img></button>
                </div>
            </nav>

            <div className={`${styles.MainAddress}`}>
                <h2>Your Balance</h2>
                <div className={`${styles.CardBalance}`}>
                    <div className={`${styles.CardBalanceTemplate}`}>
                        <div className={`${styles.BalanceLeftSide}`}>
                            <div className={`${styles.UserBalanceText}`}>Balance</div>
                            <div className={`${styles.UserBalance}`}>${Balance}</div>
                        </div>
                        <div className={`${styles.BalanceRightSide}`}>
                            <button className={`${styles.ServiceButtons}`}><img src={Profit} alt="ServiceButtonImage" className={`${styles.ServiceButtonImage}`}></img></button>
                            <button className={`${styles.ServiceButtons}`}><img src={Income} alt="ServiceButtonImage" className={`${styles.ServiceButtonImage}`}></img></button>
                        </div>
                    </div>
                </div>
                <div className={`${styles.UserAddressHead}`}>
                    <span>Your Address</span>
                </div>
                <div className={`${styles.UserAddress}`}>
                    <div>Lorem, ipsum.</div>
                    <button className={`${styles.AddressChangeButton}`}>Change</button>
                </div>
                <div className={`${styles.UserFullAddress}`}>
                    <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus facilis voluptas perferendis incidunt similique tenetur fugit quibusdam dolore itaque earum.</span>
                </div>
                <div className={`${styles.BelowAddressButtons}`}>
                    <button className={`${styles.AddressButtons}`}>Add Details</button>
                    <button className={`${styles.AddressButtons}`}>Add Note</button>
                </div>
            </div>
            <CartSection cartItems={cartItems} removeItem={removeItem} />
            <hr></hr>
        </div>
    );
};

export default RightSidebar;
