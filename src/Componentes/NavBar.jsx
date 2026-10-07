import { Link } from "react-router-dom"
import styles from './Layout/Navbar.module.css'
import Contairs from "./Contairs"



function NavBar(){


    return(
    
        <nav className={styles.navbar}>
            <Contairs>
                
                <ul className={styles.lista}>
                    <li>
                        <Link className={styles.item} to="/Home"> Home</Link>

                    </li>
                </ul>

            </Contairs>
        </nav>

        
        
    )
}

export default NavBar