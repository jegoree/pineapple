import { ReactComponent as Button } from "../../Media/ic_arrow.svg";
import Social from "../Social/social";
import styles from "./newsletter.module.scss";
import Header from "../Header/header";
import ErrorModal from "../Modal/modal";
import { useRef, useState } from "react";

const NewsLetter = () => {
  // Grabing values from input fields
  const emailInputRef = useRef();
  const termsInputRef = useRef();

  // Catching error messages for the modal
  const [error, setError] = useState();

  // This
  const [isValid, setIsValid] = useState({
    title: "Subscribe to newsletter",
    message:
      "Subscribe to our newsletter and get 10% discount on pineapple glasses.",
    status: false,
  });

  // Settin up custom email validaitions with regex
  const emailValidation = new RegExp(
    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
  );
  const colombiaValidation = new RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.co$/i);

  const addEmailHandler = async (event) => {
    // Preventing default form action
    event.preventDefault();

    // Getting user input
    const eneteredEmail = emailInputRef.current.value;
    const enteredTerms = termsInputRef.current.checked;

    // Checking if the field is empty
    if (!eneteredEmail.trim()) {
      setError({
        title: "No email provided",
        message: "Email address is required",
      });
      return;
    }

    // Checking if entered email conform the standart
    if (!emailValidation.test(eneteredEmail)) {
      setError({
        title: "Invalid email is added",
        message: "Please provide a valid e-mail address",
      });
      return;
    }

    // Checking if email if from Colombia
    if (colombiaValidation.test(eneteredEmail)) {
      setError({
        title: "Provided email is ending with .co",
        message: "We are not accepting subscriptions from Colombia emails",
      });
      return;
    }

    // Checking if agreed on terms
    if (!enteredTerms) {
      setError({
        title: "The checkbox is not marked",
        message: "You must accept the terms and conditions",
      });
      return;
    }

    // Sends message to backend
    var url =
      `http://jegor-montsenko.magebithr.com/php/index.php?add=` + eneteredEmail;
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(eneteredEmail),
    }).then(
      setIsValid({
        title: "Thanks for subscribing!",
        message:
          "You have successfully subscribed to our email listing. Check your email for the discount code.",
        status: true,
      })
    );
  };

  // Hanels appeared error modal
  const errorHandler = () => {
    setError(null);
  };

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <div className={styles["newsletter-page"]}>
        <Header />
        <div className={styles["newsletter-page-background"]}></div>
        <div className={styles["card"]}>
          {isValid.status && <span className={styles["card__troophy"]}></span>}
          <div className={styles["card__desc"]}>
            <h2 className={styles["card__desc-title"]}>{isValid.title}</h2>
            <p className={styles["card__desc-text"]}>{isValid.message}</p>
          </div>

          {!isValid.status && (
            <form
              className={styles["card__form"]}
              onSubmit={addEmailHandler}
              noValidate="novalidate"
            >
              <div className={styles["card__form-input"]}>
                <input
                  className={styles["card__form-input-field"]}
                  type="email"
                  placeholder="Type your email address here…"
                  id="email"
                  ref={emailInputRef}
                />
                <button
                  type="submit"
                  className={styles["card__form-input-button"]}
                >
                  <Button
                    className={styles["card__form-input-button-content"]}
                  />
                </button>
              </div>
              <label className={styles["card__form-check"]} htmlFor="terms">
                <input
                  className={styles["card__form-check-input"]}
                  type="checkbox"
                  id="terms"
                  ref={termsInputRef}
                />
                <div className={styles["card__form-check-box"]}></div>I agree
                to&nbsp;
                <a className={styles["card__form-check-link"]} href="#">
                  {" "}
                  terms of service
                </a>
              </label>
            </form>
          )}
          <Social />
        </div>
      </div>
    </>
  );
};

export default NewsLetter;
