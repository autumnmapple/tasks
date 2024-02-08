import styles from "./Header.module.scss";
import { MdOutlineMenu } from "react-icons/md";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <nav className={styles.root}>
      <Link to="/" className={styles.logo}>
        SIPS
      </Link>
      <MdOutlineMenu
        className={styles.icons__open}
        onClick={() => setOpen(!isOpen)}
      />
      <ul className={`${styles.navbar} ${isOpen ? styles.active : ""}`}>
        <li className={styles.navbar__item}>
          <Link to="!#">Главная</Link>
        </li>
        <li className={styles.navbar__item}>
          <Link to="!#">Руководство пользователя</Link>
        </li>
        <li className={styles.navbar__item}>
          <Link to="/authorization">Вход</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
