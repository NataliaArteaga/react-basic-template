import React from "react";
import { Outlet } from "react-router-dom";
import styles from "./Home.module.css";
import Footer from "../footer/Footer";
import NavbarFeature from "../../features/navbar/NavbarFeature";

const Home = () => {
  return (
    <div>
      <NavbarFeature />
      <div className={styles.content_data}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
