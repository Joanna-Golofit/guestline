import React from "react";
// import { Link } from "react-router-dom";
import styles from "./Cards.module.css";
// import { useState } from "react";
import { FaStar } from "react-icons/fa";


const Cards = ({ data, stars, colors }) => {
  // const handleClick = (e, id) => {
  //   if (e.target.name === id) {
  //     console.log("id", id);
  //     console.log("e.target.name", e.target.name);
  //   }
  // };

  return (
    <>
      {data.length !== 0 &&
        data.map((d) => (
          <p key={d.id}>
            {d.name} stars:{" "}
            {stars.map((star, idx) => (
              <FaStar
                key={idx}
                color={d.starRating > idx ? colors.orange : colors.gray}
              />
            ))}
            {d.starRating}
          </p>
        ))}
    </>

    // <div className={styles.results}>
    //   {images.map((image) => (
    //     <div
    //       key={image.id}
    //       className={styles.cardContainer}
    //       onClick={(e) => handleClick(e, image.id)}
    //     >
    //       {/* <Link
    //         to={`${image.id}`}
    //         state={{
    //           from: `/results?query=${query}`,
    //           data: image,
    //         }}
    //       > */}
    //       {modal && <ImageDetails imgData={image} />}
    //       <img
    //         className={styles.img}
    //         name={image.id}
    //         // width="200"
    //         // height="200"
    //         src={image.urls.thumb}
    //         alt={image.alt_description}
    //       ></img>
    //       <div className={styles.tags}>
    //         {image.tags.map((tag) => (
    //           <div className={styles.tag}>{tag.title}</div>
    //         ))}
    //       </div>
    //       {/* </Link> */}
    //     </div>
    //   ))}
    // </div>
  );
};

export default Cards;