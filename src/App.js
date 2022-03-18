import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
// import {
//   capacityAdultsContext,
//   capacityChildrenContext
// } from "./Helper/Context";
// import { useState } from "react";

function App() {
  //  const [capacityAdults, setCapacityAdults] = useState(2);
  //  const [capacityChildren, setCapacityChildren] = useState(0);

  return (
    // <capacityAdultsContext.Provider
    //   value={{ capacityAdults, setCapacityAdults }}
    // >
    //   <capacityChildrenContext.Provider
    //     value={{ capacityChildren, setCapacityChildren }}
    //   >
        <HomePage />
    //   </capacityChildrenContext.Provider>
    // </capacityAdultsContext.Provider>
  );
}

export default App;
