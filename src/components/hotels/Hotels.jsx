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

  const [filteredRooms, setFilteredRooms] = useState([]);


  return (
    <>
      {filteredData.length !== 0 &&
        filteredData.map((d) => (
          <section className={styles.card} key={d.id}>
            <div className={styles.header}>
              <div className={styles.info}>
                <Slider images={d.images} id={d.id} />
                <div className={styles.data}>
                  <h3>{d.name}</h3>
                  <p>{d.address1}</p>
                  <p>{`${d.address2}` || ``}</p>
                </div>
              </div>
              <div className={styles.stars}>
                {stars.map((_, idx) => (
                  <FaStar
                    size={24}
                    key={idx}
                    color={d.starRating > idx ? colors.orange : colors.gray}
                  />
                ))}
              </div>
            </div>

            <Rooms
              id={d.id}
              capacityAdults={capacityAdults}
              capacityChildren={capacityChildren}
            />
          </section>
        ))}
    </>
  );
};

export default Hotels;
