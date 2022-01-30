import { ReactComponent as Button } from "../../Media/ic_arrow.svg";
import Social from "../Social/social.component";
import styles from "./newsletter.module.scss";
import Header from "../Header/header";

const NewsLetter = () => {
  const addEmailHandler = (event) => {
    event.preventDefault();
    alert("bazinga");
  };

  return (
    <div className={styles["newsletter-page"]}>
      <Header />
      <div className={styles["newsletter-page-background"]}></div>
      <div className={styles["card"]}>
        <div className={styles["card__desc"]}>
          <h2 className={styles["card__desc-title"]}>
            Subscribe to newsletter
          </h2>
          <p className={styles["card__desc-text"]}>
            Subscribe to our newsletter and get 10% discount on pineapple
            glasses.
          </p>
        </div>
        <form className={styles["card__form"]} onSubmit={addEmailHandler}>
          <div className={styles["card__form-input"]}>
            <input
              className={styles["card__form-input-field"]}
              type="email"
              placeholder="Type your email address here…"
              id="email"
            />
            <button type="submit" className={styles["card__form-input-button"]}>
              <Button className={styles["card__form-input-button-content"]} />
            </button>
          </div>
          <label className={styles["card__form-check"]} htmlFor="terms">
            <input
              className={styles["card__form-check-input"]}
              type="checkbox"
              id="terms"
            />
            <div className={styles["card__form-check-box"]}></div>I agree
            to&nbsp;
            <a className={styles["card__form-check-link"]} href="#">
              {" "}
              terms of service
            </a>
          </label>
        </form>
        <Social />
      </div>
    </div>
  );
};

export default NewsLetter;
