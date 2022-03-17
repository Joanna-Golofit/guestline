import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import fetchData from "../../utils/fetchData";
// import SearchBar from "../../components/searchBar/SearchBar";
import styles from "./HomePage.module.css";
import { FaStar } from "react-icons/fa";
import Cards from "../../components/cards/Cards";

const colors = {
  orange: "#FFBA5A",
  gray: "A9A9A9",
};

const HomePage = () => {
  const [data, setData] = useState([]);
  const stars = Array(5).fill(0);
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const URL = `https://obmng.dbm.guestline.net/api/hotels?collection-id=OBMNG`;

  const handleClick = (value) => {
    setCurrentValue(value);
    console.log(stars);
    console.log("now clicked value: value", value);
    console.log("currentValue - state before update", currentValue);
    console.log("hoverValue - =value..", hoverValue);
  };
  const handleMouseOver = (value) => {
    setHoverValue(value);
  };
  const handleMouseLeave = () => {
    setHoverValue(undefined);
  };

  useEffect(() => {
    fetchData(URL)
      .then((fetchedData) => {
        console.log("useEffect fetchData data:", fetchedData);
        setData(fetchedData);
      })
      .catch((err) => console.log("err HomePage useEffect fetchData", err));
  }, [URL]);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div>
          {stars.map((_, idx) => (
            <FaStar
              key={idx}
              color={
                (hoverValue || currentValue) > idx ? colors.orange : colors.gray
              }
              onClick={() => handleClick(idx + 1)}
              onMouseOver={() => handleMouseOver(idx + 1)}
              onMouseLeave={() => handleMouseLeave(idx + 1)}
            />
          ))}
        </div>
        <div>
          <Cards data={data} stars={stars} colors={colors} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
