import { useState } from "react";
import Logo from "./Logo";
import { IoMenuOutline } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import "./Navbar.css";
import LogoTwo from "./LogoTwo";
// import Button from "./Button";

export default function Navbar() {
  const navBar = useState();
  const showMenu = () => {
    navBar.current.classList.toggle("responsive_nav");
  };
  return (
    <nav className="nav-link">
      <Logo />

      <button className="menu">
        <IoMenuOutline size={30} color="#fff" onClick={showMenu} />
      </button>
      <ul ref={navBar} className="links">
        <LogoTwo />
        <button className="menu close-bar">
          <IoClose
            size={35}
            color="hsla(127, 51%, 39%, 1)"
            onClick={showMenu}
          />
        </button>
        <li className="link">
          <a href="" className="link-item active">
            HealthQuest
          </a>
        </li>
        <li className="link">
          <a href="" className="link-item">
            DXC Token
          </a>
        </li>
        <li className="link">
          <a href="" className="link-item">
            Private Sale
          </a>
        </li>
      </ul>
      <button className="btn">
        <a className="btn-tag">Join WaitList</a>
      </button>
    </nav>
  );
}
