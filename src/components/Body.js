import { useEffect, useState } from "react";

import RestaurantCard from "./RestaurentCard";
import Shimmer from "./Shimmer";
import NotFound from "./NotFound";

const Body = () => {
  const [listOfRestraunt, setListOfRestraunt] = useState([]);
  const [searchText, setsearchText] = useState("");

  const [filteredData, setFilteredData] = useState(null); // Store filtered data

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.5743545&lng=88.3628734&collection=83631&tags=layout_CCS_Pizza&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
    );
    const apiData = await data.json();
    // console.log(apiData);

    const filteredApiData = apiData.data.cards.slice(3);

    console.log(filteredApiData);

    setListOfRestraunt(filteredApiData);
  };

  const handleSearch = () => {
    const filtered = listOfRestraunt.filter((res) =>
      res.card.card.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    console.log(filtered);
    setFilteredData(filtered); // Update filteredData state
  };

  // When Enterd pressed then automatically call handleSearch
  const handleKeyDown = (e) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };
  return listOfRestraunt.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            name="search"
            type="text"
            className="search-box"
            placeholder="Search Food or Restaurant"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
            onKeyDown={handleKeyDown}
          />
          <button className="search-btn" onClick={handleSearch}>
            Search
          </button>
        </div>

        <button
          onClick={() => {
            setListOfRestraunt(
              listOfRestraunt.filter(
                (res) => res.card.card.info.avgRating >= 4.3
              )
            );
          }}
        >
          Top Rated Restaurant
        </button>
      </div>

      <div className="cards-container">
        {filteredData === null ? (
          listOfRestraunt.map((res) => (
            <RestaurantCard key={res?.card.card.info.id} resData={res} />
          ))
        ) : filteredData.length === 0 ? (
          <NotFound />
        ) : (
          filteredData.map((res) => (
            <RestaurantCard key={res?.card.card.info.id} resData={res} />
          ))
        )}
      </div>
    </div>
  );
};
export default Body;

//
