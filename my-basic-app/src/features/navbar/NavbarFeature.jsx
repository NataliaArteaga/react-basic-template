import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";

const NavbarFeature = () => {
  const navigate = useNavigate();
  const handleGo = (route) => {
    navigate("/" + route);
  };
  return <Navbar handleGo={handleGo}></Navbar>;
};

export default NavbarFeature;
