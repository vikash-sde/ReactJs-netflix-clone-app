import React, { useEffect, useState } from "react";
import "./navbar.css";

const Navbar = () => {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });

    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`navbar ${show && "nav_black"}`}>
      <img
        className="navbar_logo"
        src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
        alt=""
      />
      <img
        className="navbar_profile"
        src="https://raw.githubusercontent.com/CleverProgrammers/pwj-netflix-clone/master/assets/profile__logo.png"
        alt=""
      />
    </div>
  );
};

export default Navbar;
