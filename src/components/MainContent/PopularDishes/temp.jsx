<div className={styles.PopularItems}>
    {dishes.map((dish, index) => (
        <div
            key={dish.id}
            className={`${styles.PopularItemsCard} ${index >= 3 && !showAll ? 'hidden' : ''}`}
        >
            <div className={styles.PopularItemsCardTop}>
                <div className={styles.DiscountBadge}>{discount}% Off</div>
                <span className={`${styles.Heart} ${isGlowing ? styles.glow : ''}`} onClick={handleClick}>
                    ❤️
                </span>
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
                    <div className={styles.PopularItemPrice}>
                        <span>$</span>{dish.price}
                    </div>
                </div>
                <button className={styles.AddItemButton} onClick={() => addToCart(dish)}>+</button>
            </div>
        </div>
    ))}
</div>
