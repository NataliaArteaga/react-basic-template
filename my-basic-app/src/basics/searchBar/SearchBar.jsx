import React from "react";
import styles from "./SearchBar.module.css";

const SearchBar = ({ setSearchText, searchText = '' }) => {
  return (

      <input className={styles.searchbar}
        value={searchText}
        placeholder="Catch your pokemon"
        onChange={(event) => setSearchText(event.target.value)}
      />
  );
};

export default SearchBar;
