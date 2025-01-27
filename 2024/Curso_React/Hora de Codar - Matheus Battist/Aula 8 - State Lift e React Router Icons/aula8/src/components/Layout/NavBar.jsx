import { Link } from "react-router-dom";
import Styles from "./Navbar.module.scss";

export default function NavBar(){

    return (
        <header>
            <nav>
                <ul className={Styles.list}>
                    <li className={Styles.item}><Link to="/">Home</Link></li>
                    <li className={Styles.item}><Link to="/empresa">Empresa</Link></li>
                    <li className={Styles.item}><Link to="/contato">Contato</Link></li>
                    <li className={Styles.item}><Link to="/icons">icons</Link></li>
                </ul>
            </nav>
        </header>
  
    )
}