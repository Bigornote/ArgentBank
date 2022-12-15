import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/argent-bank.png";
import { FaUserCircle } from "react-icons/fa";

const Header = () => {
  return (
    <header>
      <nav className="main-nav">
        <Link className="main-nav-logo" href="./index.html">
          <img
            className="main-nav-logo-image"
            src={Logo}
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </Link>
        <div>
          <Link className="main-nav-item" href="./sign-in.html">
            <FaUserCircle />
            Sign In
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
