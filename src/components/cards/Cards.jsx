import React from "react";
import styles from "./Cards.module.css";
// import { useState } from "react";
import { FaStar } from "react-icons/fa";
// import { useEffect } from "react";
// import { useState } from "react";
// import fetchData from "../../utils/fetchData";
import Rooms from "../rooms/Rooms";

const Cards = ({ filteredData, stars, colors, capacityChildren }) => {
  // const handleClick = (e, id) => {
  //   if (e.target.name === id) {
  //     console.log("id", id);
  //     console.log("e.target.name", e.target.name);
  //   }
  // };

  return (
    <div className={styles.card}>
      {filteredData.length !== 0 &&
        filteredData.map((d) => (
          // <div className={styles.card}>
          <div key={d.id}>
            {d.name} stars:
            {stars.map((star, idx) => (
              <FaStar
                key={idx}
                color={d.starRating > idx ? colors.orange : colors.gray}
              />
            ))}
            {d.starRating}
            <Rooms id={d.id} capacityChildren={capacityChildren} />
          </div>
          // </div>
        ))}
    </div>
  );
};

export default Cards;
