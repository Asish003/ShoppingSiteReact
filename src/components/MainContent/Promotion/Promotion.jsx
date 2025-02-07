import styles from "./Promotion.module.css";
import womanImage from "../../../assets/MainContentIcons/woman.png"
import design1 from "../../../assets/MainContentIcons/promotion/design1.svg"


const Promotion = () =>{
    return(
        <>
            <div className={`${styles.Promotion}`}>
                <div className={`${styles.PromotionTextContent}`}>
                    {/* <img src={design1} alt="Background Pattern" className={`${styles.BackgroundPattern}`} /> */}
                    <h1>Get Discount Voucher<br/>upto 20%</h1>
                    <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto quisquam eligendi odio facilis sed aliquam error laboriosam vitae porro dicta!</span>
                </div>
                <img src={womanImage} alt="UserImage" className={`${styles.UserImage}`}></img>
                {/* <img src={design1} alt="Background Pattern" className={`${styles.BackgroundPattern1}`} /> */}
            </div>
        </>
    );
}

export default Promotion