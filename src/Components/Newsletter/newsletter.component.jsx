const NewsLetter = () => (
  <div>
    <h2>Subscribe to newsletter</h2>
    <p>
      Subscribe to our newsletter and get 10% discount on pineapple glasses.
    </p>
    <form>
      <input
        style={{ border: "1px solid black" }}
        type="email"
        placeholder="Type your email address here…"
        id="email"
      />{" "}
      <br />
      <input style={{ border: "1px solid black" }} type="checkbox" id="terms" />
      <label htmlFor="terms">
        I agree to <a href="#">terms of service</a>
      </label>
    </form>
  </div>
);

export default NewsLetter;
