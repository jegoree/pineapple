import styles from "./header.module.scss";

const Header = () => (
  <div className={styles["navbar"]}>
    <a className={styles["navbar__logo"]} href="#">
    </a>
    <ul className={styles["navbar__menu"]}>
      <li className={styles["navbar__menu-item"]}>
        <a className={styles["navbar__menu-link"]} href="#">
          About
        </a>
      </li>
      <li className={styles["navbar__menu-item"]}>
        <a className={styles["navbar__menu-link"]} href="#">
          How it works
        </a>
      </li>
      <li className={styles["navbar__menu-item"]}>
        <a className={styles["navbar__menu-link"]} href="#">
          Contact
        </a>
      </li>
    </ul>
  </div>
);

export default Header;
