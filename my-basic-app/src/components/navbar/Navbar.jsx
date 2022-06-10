import React from 'react'
import styles from "./Navbar.module.css"

const Navbar = ({handleGo = () => {}} ) => {
  return (
    <div className={styles.container}>
         <div onClick={() => handleGo("")}>Go Catch ´Em All</div>
      <div onClick={() => handleGo("favorites")}>FAVORITOS</div>
    </div>
  )
}

export default Navbar