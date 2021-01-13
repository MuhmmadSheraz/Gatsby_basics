import React from "react";
import styles from "./navbar.module.css";
import { Link, navigate } from "gatsby";
const index = () => {
  return (
    <div className={styles.navbar}>
      {/* This is Link  Navigate Method  */}
      <Link to="/">
        <p>Home</p>
      </Link>
      {/* This is OnClick Navigate Method  */}
      <p onClick={() => navigate("/about")}>About Us</p> 
      <p onClick={() => navigate("/contact")}>Contact </p>
    </div>
  );
};

export default index;
