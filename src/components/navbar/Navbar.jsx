import {NavLink} from "react-router-dom";
import styles from "./Navbar.module.scss"

export default function Navbar() {

    const getClassName = ({isActive}) => {
        return isActive ? `${styles.link} ${styles.active}` : `${styles.link}`;
    }

  return (
    <header>
      <nav className={styles.container}>
        <NavLink className={getClassName} to="/"> HOME</NavLink>
        <NavLink className={getClassName} to="/movies" end>Movies </NavLink>
      </nav>
    </header>
  )
}
