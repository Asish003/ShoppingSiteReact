import coupon from "../../../assets/Rightsidebaricons/Vector.svg"

{
    TotalPrice !== 0 ?
    <div className={`${styles.CartTotal}`}>
        <span>Total</span>
        <span>${TotalPrice}</span>
        <button className={`${styles.CartCoupon}`}>
            <span><img src={coupon} alt="couponImage" className={`${styles.couponImage}`}></img>Have a coupon code?</span>
        </button>
        <button className={`${styles.CartCheckout}`}>
            checkout
        </button>
    </div> : null
}