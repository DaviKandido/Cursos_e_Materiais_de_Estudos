import styles from "../assets/css/Navbar.module.scss"

function Navbar({ msg }) {
  return (
    <header id={styles.navbar}>
        <nav id="navbar">
           <h1>{msg}</h1>
        </nav>
    </header>
  );
}

export default Navbar;
