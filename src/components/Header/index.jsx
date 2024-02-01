import styles from "./Header.module.scss";
import { MdOutlineMenu } from "react-icons/md";
//import { IoClose } from "react-icons/io5";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  /* const MenuCloseClick = () => {
    setOpen(false);
  }; */

  return (
    <nav className={styles.root}>
      <Link to="/" className={styles.logo}>
        SIPS
      </Link>
      <MdOutlineMenu
        className={styles.icons__open}
        onClick={() => setOpen(!isOpen)}
      />
      {/* <IoClose className={styles.icons__close}/> */}
      <ul className={`${styles.navbar} ${isOpen ? styles.active : ""}`}>
        <li className={styles.navbar__item}>
          <Link to="!#">О нас</Link>
        </li>
        <li className={styles.navbar__item}>
          <Link to="!#">Руководство</Link>
        </li>
        <li className={styles.navbar__item}>
          <Link to="/authorization">Авторизация</Link>
        </li>
        <li className={styles.navbar__item}>
          <Link to="/registration">Выход</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
