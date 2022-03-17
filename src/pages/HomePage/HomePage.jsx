import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import fetchData from "../../utils/fetchData";
// import SearchBar from "../../components/searchBar/SearchBar";
import styles from "./HomePage.module.css";
import { FaStar } from "react-icons/fa";
import Cards from "../../components/cards/Cards";
import Counter from "../../components/counter/Counter";

const colors = {
  orange: "#FFBA5A",
  gray: "A9A9A9",
};

const HomePage = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [capacityAdults, setCapacityAdults] = useState(2);
  const [capacityChildren, setCapacityChildren] = useState(0);
  // const [capacity, setCapacity] = useState({
  //   adults: 1,
  //   children: 0,
  // });
  const stars = Array(5).fill(0);
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const URL = `https://obmng.dbm.guestline.net/api/hotels?collection-id=OBMNG`;
  const HotelURL = `https://obmng.dbm.guestline.net/api/roomRates/OBMNG/${filteredData.id}`;

  const handleClick = (value) => {
    setCurrentValue(value);
    console.log(stars);
    console.log("now clicked value: value", value);
    console.log("currentValue - state before update", currentValue);
    console.log("hoverValue - =value..", hoverValue);
    console.log("capacityAdults", capacityAdults);
    console.log("capacityChildren", capacityChildren);
    console.log(data.map((d) => Number(d.starRating)));
    console.log("value", value);
    console.log(data.filter((d) => Number(d.starRating) >= value));
    setFilteredData(data.filter((d) => Number(d.starRating) >= value));
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
        setFilteredData(fetchedData);
      })
      .catch((err) => console.log("err HomePage useEffect fetchData", err));
  }, [URL]);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className="starRating">
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
        <div className="capacity">
          <Counter
            title="Adults"
            value={capacityAdults}
            onClick={setCapacityAdults}
          />
          <Counter
            title="Children"
            value={capacityChildren}
            onClick={setCapacityChildren}
          />
          {/* Children:
          <button>-</button>
          {childrenValue}
          <button>+</button> */}
        </div>
        <div>
          <Cards filteredData={filteredData} stars={stars} colors={colors} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
