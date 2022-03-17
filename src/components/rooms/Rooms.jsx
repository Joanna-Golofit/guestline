import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import fetchData from "../../utils/fetchData";
import styles from "./Rooms.module.css";


const Rooms = ({ id, capacityChildren, capacityAdults }) => {
  // const [rooms, setRooms] = useState([]);
  const [filteredRooms, setFilteredRooms] = useState([]);

  useEffect(() => {
    fetchData(`https://obmng.dbm.guestline.net/api/roomRates/OBMNG/${id}`)
      .then((fetchedData) => {
        console.log("Rooms data:", fetchedData.rooms);
        // setRooms(fetchedData.rooms);
        setFilteredRooms(
          fetchedData.rooms.filter(
            (room) =>
              Number(room.occupancy.maxAdults) >= Number(capacityAdults) &&
              Number(room.occupancy.maxChildren) >= Number(capacityChildren)
          )
        );
      })
      .catch((err) => console.log("err CARDS useEffect fetchData", err));
  }, [id, capacityChildren, capacityAdults]);

  return (
    <>
      {filteredRooms.map((room) => (
        <div key={room.id} className={styles.card}>
          <div className={styles.left}>
            <h4>{room.name}</h4>
            <p>Adults: {room.occupancy.maxAdults}</p>
            <p>Children: {room.occupancy.maxChildren}</p>
          </div>
          {/* <div></div> */}
          <p className={styles.right}>{room.longDescription}</p>
        </div>
      ))}
    </>
  );
};

export default Rooms;
