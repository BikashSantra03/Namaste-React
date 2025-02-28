import { useState, useEffect } from "react";
import { swiggyApi } from "../utils/constatnt";

const useRestaurantsList = () => {
  const [listOfRestraunt, setListOfRestraunt] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(swiggyApi);
    const apiData = await data.json();
    // console.log(apiData);

    const filteredApiData = apiData.data.cards.slice(3);

    console.log("Restaurants List: ", filteredApiData);

    setListOfRestraunt(filteredApiData);
  };

  return { listOfRestraunt, setListOfRestraunt };
};

export default useRestaurantsList;
