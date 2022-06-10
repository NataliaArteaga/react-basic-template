import React from "react";
import { Outlet } from "react-router-dom";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.content_data}>
      <Outlet />
    </div>
  );
};

export default Home;
