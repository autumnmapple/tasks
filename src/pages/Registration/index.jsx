import { Link } from "react-router-dom";
import styles from './Registration.module.scss'
const Registration = () => {
  return (
    <div className={styles.root}>
      <form className={styles.wrapper}>
        <h1>Регистрация</h1>
        <div className={styles.wrapper__input}>
          <input placeholder="Email" />
        </div>
        <div className={styles.wrapper__input}>
          <input type="password" placeholder="Пароль" />
        </div>

        <button type="submit" className={styles.wrapper__btn}>
          Войти
        </button>
        <div className={styles.wrapper__reg}>
          <p>
            У вас есть аккаунт? <Link to="/authorization">Авторизоваться</Link>
          </p>
          <p>
            Забыли пароль? <a href="!#">Восстановить доступ</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Registration;
