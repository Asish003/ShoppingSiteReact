import styles from "./Navbar.module.css";
import search from "../../../assets/MainContentIcons/magnifier.svg"

const Navbar = () =>{
    return(
        <>
            <div className={`${styles.Navbar}`}>
                <h1 className={`${styles.Username}`}>Hello Sen!</h1>
                <div className={styles.searchContainer}>
                    <img src={search} alt="Search Icon" className={styles.searchIcon} />
                    <input type="text" className={styles.searchInput} placeholder="Search..." aria-label="Search"/>
                </div>
            </div>
        </>
    );
}

export default Navbar