import {Link} from "react-router-dom"
import SearchInput from "./SearchInput"
import Button from "./Button"
import styles from "./Topbar.module.css"

const Topbar = () => {
    return (
        <div className={styles.topbar}>
            <div className={styles.centerSide}>
                <Link to="/"><img src="./logo.svg" alt="logo" className={styles.logo}/></Link>
                <nav className={styles.navigation}>
                    <Link to="/" className={styles.link}>NAUJAUSI PAVEIKSLAI</Link>
                    <Link to="/paintingsInStock" className={styles.link}>LAISVI PAVEIKSLAI</Link>
                    <Link to="/paintingsToOrder" className={styles.link}>UŽSAKYTI PAVEIKSLĄ</Link>
                </nav>
                <SearchInput />
            </div>
            <div className={styles.rightSide}>
                
                <Button>Prisijungti / Atsijungti</Button>
            </div>
        </div>
            
    )
}

export default Topbar;