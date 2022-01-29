import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Social = () => (
  <div className="">
    <FontAwesomeIcon icon={faFacebookF} />
    <FontAwesomeIcon icon={faInstagram} />
    <FontAwesomeIcon icon={faTwitter} />
    <FontAwesomeIcon icon={faYoutube} />
  </div>
);

export default Social;
