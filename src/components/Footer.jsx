import Logo from "./Logo";
import { FaXTwitter } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <Logo />
      <div className="footer-icons">
        <div className="footer-icon">
          <FaXTwitter color="#000" size={24}/>
        </div>
        <div className="footer-icon">
          <FaTelegramPlane color="blue" size={24}/>
        </div>
        <div className="footer-icon">
          <FaInstagramSquare color="red" size={24}/>
        </div>
        <div className="footer-icon">
          <FaYoutube color="red" size={24}/>
        </div>
        <div className="footer-icon">
          <FaFacebook color="blue" size={24}/>
        </div>
        <div className="footer-icon">
          <FaLinkedin color="blue" size={24}/>
        </div>
      </div>
      <p className="footer-paragraph">
        Tokenization of wellness behaviour, addressing financial constraints and
        incentivizing healthy living
      </p>
    </div>
  );
}
