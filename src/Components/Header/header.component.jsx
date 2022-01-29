import { ReactComponent as Logo } from "../../Media/logo_pineapple.svg";
import styles from "./header.module.scss";

const Header = () => (
  <div>
    <Logo />
    <ul>
      <li>
        <a href="#">About</a>
      </li>
      <li>
        <a href="#">How it works</a>
      </li>
      <li>
        <a href="#">Contact</a>
      </li>
    </ul>
  </div>
);

export default Header;
