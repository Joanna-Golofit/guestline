const fetchData = (url) => {
  return fetch(url).then((dataJson) => {
    if (!dataJson.ok) {
      throw new Error("Error, !dataJson.ok", dataJson.status);
    }
    // console.log("dataJson from fetchData", dataJson);
    return dataJson.json();
  });
};

//calosc ma wygladac tak:
// const fetchData = () => {
//   fetch(URL)
//     .then((dataJson) => {
//       if (!dataJson.ok) {
//         throw new Error("z ifa:", dataJson.status);
//       }
//       return dataJson.json();
//     })
//     .then((data) => {
//       //  this.setState({ images: data.hits });
//       // setImages(data);
//       console.log("data.results:", data.results);
//       return data.results;
//     })
//     .catch((err) => console.log("err", err))
//     .finally(console.log("fetchData"));
// };

export default fetchData;
