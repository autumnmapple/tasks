import styles from "./Header.module.scss";
import { MdOutlineMenu } from "react-icons/md";
//import { CgProfile } from "react-icons/cg";
import { useState } from "react";
import { Link } from "react-router-dom";
import { IoPeopleCircleOutline } from "react-icons/io5";

const Header = () => {
  const [isOpenMenu, setOpenMenu] = useState(false);
  const [isOpenProfile, setOpenProfile] = useState(false);
  const closeProfileMenu = () => {
    setOpenProfile(!isOpenProfile);
    if (isOpenMenu) {
      setOpenMenu(false); 
    }
  };
  const closeMainMenu = () => {
    setOpenMenu(!isOpenMenu);
    if (isOpenProfile) {
      setOpenProfile(false); 
    }
  };

  return (
    <nav className={styles.root}>
      <IoPeopleCircleOutline
        className={styles.icons__profile}
        onClick={closeProfileMenu}
      />
      <Link to="/" className={styles.logo}>
        SIPS
      </Link>
      <MdOutlineMenu
        className={styles.icons__open}
        onClick={closeMainMenu}
      />
      <ul className={`${styles.navbar__menu} ${isOpenMenu ? styles.active : ""}`}>
        <li className={styles.navbar__item}>
          <Link to="!#">Главная</Link>
        </li>
        <li className={styles.navbar__item}>
          <Link to="!#">Руководство пользователя</Link>
        </li>
      </ul>
      <ul className={`${styles.navbar__profile} ${isOpenProfile ? styles.active : ""}`}>
        <li className={styles.navbar__item}>
          <Link to="!#">Профиль</Link>
        </li>
        <li className={styles.navbar__item}>
          <Link to="/authorization">Вход</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
