import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import styles from "./social.module.scss";

const Social = () => (
  <ul className={styles["social"]}>
    <li
      className={`${styles["social__icon"]} ${styles["social__icon-facebook"]}`}
    >
      <a className={styles["social__icon-item"]} href="">
        <FontAwesomeIcon className={styles["social__icon-item-content"]} icon={faFacebookF} />{" "}
      </a>
    </li>
    <li
      className={`${styles["social__icon"]} ${styles["social__icon-instagram"]}`}
    >
      <a className={styles["social__icon-item"]} href="">
        <FontAwesomeIcon className={styles["social__icon-item-content"]} icon={faInstagram} />
      </a>
    </li>
    <li
      className={`${styles["social__icon"]} ${styles["social__icon-twitter"]}`}
    >
      <a className={styles["social__icon-item"]} href="">
        <FontAwesomeIcon className={styles["social__icon-item-content"]} icon={faTwitter} />
      </a>
    </li>
    <li
      className={`${styles["social__icon"]} ${styles["social__icon-youtube"]}`}
    >
      <a className={styles["social__icon-item"]} href="">
        <FontAwesomeIcon className={styles["social__icon-item-content"]} icon={faYoutube} />
      </a>
    </li>
  </ul>
);

export default Social;
