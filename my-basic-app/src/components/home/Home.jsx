import React from "react";
import { Outlet } from "react-router-dom";
import styles from "./Home.module.css";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className={styles.content_data}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
