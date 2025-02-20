import { useEffect, useState } from "react";

import RestaurantCard from "./RestaurentCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestraunt, setListOfRestraunt] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.5743545&lng=88.3628734&collection=83631&tags=layout_CCS_Pizza&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
    );
    const apiData = await data.json();
    console.log(apiData);

    const filteredApiData = apiData.data.cards.slice(3);

    console.log(filteredApiData);

    setListOfRestraunt(filteredApiData);
  };

  return listOfRestraunt.length === 0 ? (
    <Shimmer/>
  ) : (
    <div className="body">
      <div className="search-container">
        <input
          name="search"
          type="text"
          placeholder="Search Food or Restaurant"
        />
        <button
          onClick={() => {
            setListOfRestraunt(
              listOfRestraunt.filter(
                (res) => res.card.card.info.avgRating >= 4.3
              )
            );
          }}
        >
          <label htmlFor="search">Search</label>
        </button>
      </div>

      <div className="cards-container">
        {listOfRestraunt.map((items) => (
          <RestaurantCard key={items?.card.card.info.id} resData={items} />
        ))}
      </div>
    </div>
  );
};
export default Body;
