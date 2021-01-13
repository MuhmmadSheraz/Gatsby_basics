import React from "react";
import styles from "./navbar.module.css"
const index = () => {
  return (
    <div className={styles.navbar}>
      <p>Home</p>
      <p>About Us</p>
      <p>Contact</p>
    </div>
  );
};

export default index;
