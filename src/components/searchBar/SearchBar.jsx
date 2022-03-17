import fetchData from "../../utils/fetchData";
import styles from "./SearchBar.module.css";

// import { useContext } from "react";
// import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const SearchBar = () => {
  

  const URL = `https://obmng.dbm.guestline.net/api/hotels?collection-id=OBMNG`;

  useEffect(() => {
    fetchData(URL).then((data) => {
      console.log("useEffect fetchImages data.results:", data.results);
    });
  })



  return (
    <div className={styles.formWrapper}>
     search
    </div>
  );
};

export default SearchBar;
