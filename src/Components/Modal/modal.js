import Header from "../Header/header";
import styles from "./modal.module.scss";

const ErrorModal = (props) => {
  return (
    <>
      <div className={styles["backdrop"]} onClick={props.onConfirm}>
        <div className={styles["modal"]}>
          <header className={styles["modal__header"]}>
            <h2>{props.title}</h2>
          </header>
          <div className={styles["modal__content"]}>
            <p>{props.message}</p>
          </div>
          <footer className={styles["modal__footer"]}>
            <button onClick={props.onConfirm}>Okay</button>
          </footer>
        </div>
      </div>
    </>
  );
};

export default ErrorModal;
