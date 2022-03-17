import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import fetchData from "../../utils/fetchData";
import styles from "./Rooms.module.css";


const Rooms = ({ id }) => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    fetchData(`https://obmng.dbm.guestline.net/api/roomRates/OBMNG/${id}`)
      .then((fetchedData) => {
        console.log("Rooms data:", fetchedData.rooms);
        setRooms(fetchedData.rooms);
        // setFilteredData(fetchedData);
      })
      .catch((err) => console.log("err CARDS useEffect fetchData", err));
  }, [id]);

  return (
    <>
      Rooms
      {rooms.map((room) => (
        <div key={room.id} className={styles.card}>
          <p>{room.name}</p>
          <p>Adults: {room.occupancy.maxAdults}</p>
          <p>Children: {room.occupancy.maxChildren}</p>
        </div>
      ))}
    </>
  );
};

export default Rooms;
