import React, { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [handleScroll, setHandleScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setHandleScroll(true);
      } else setHandleScroll(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  return (
    <div className={`nav ${handleScroll && "nav-dark"}`}>
      <img
        src="https://www.pinclipart.com/picdir/middle/49-493878_watch-clipart-netflix-netflix-vector-png-download.png"
        className="nav-logo"
        alt="netflix"
      ></img>
      <img
        src="https://images.unsplash.com/photo-1597185888498-35f9633b1cf5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        className="nav-avatar"
        alt="avatar"
      ></img>
    </div>
  );
};

export default Navbar;
