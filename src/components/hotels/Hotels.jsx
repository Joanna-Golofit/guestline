import React from "react";
import styles from "./Hotels.module.css";
import { FaStar } from "react-icons/fa";
import Rooms from "../rooms/Rooms";
import Slider from "../slider/Slider";

const Hotels = ({
  filteredData,
  stars,
  colors,
  capacityChildren,
  capacityAdults,
}) => {
  return (
    <div className={styles.card}>
      {filteredData.length !== 0 &&
        filteredData.map((d) => (
          <div key={d.id}>
            <Slider images={d.images} id={d.id} />
            <h3>{d.name}</h3>
            {stars.map((_, idx) => (
              <FaStar
                key={idx}
                color={d.starRating > idx ? colors.orange : colors.gray}
              />
            ))}
            {d.starRating}
            <Rooms
              id={d.id}
              capacityAdults={capacityAdults}
              capacityChildren={capacityChildren}
            />
          </div>
        ))}
    </div>
  );
};

export default Hotels;
