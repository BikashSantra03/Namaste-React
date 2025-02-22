import { useEffect, useState } from "react";

import RestaurantCard from "./RestaurentCard";
import Shimmer from "./Shimmer";
import NotFound from "./NotFound";
import { swiggyApi } from "../utils/constatnt";
import { Link } from "react-router";

const Body = () => {
  const [listOfRestraunt, setListOfRestraunt] = useState([]);
  const [searchText, setsearchText] = useState("");

  const [filteredData, setFilteredData] = useState(null); // Store filtered data

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(swiggyApi);
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
            <Link
              key={res?.card.card.info.id}
              to={"/restaurants/" + res?.card.card.info.id}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <RestaurantCard resData={res} />
            </Link>
          ))
        ) : filteredData.length === 0 ? (
          <NotFound />
        ) : (
          filteredData.map((res) => (
            <Link
              key={res?.card.card.info.id}
              to={"/restaurants/" + res?.card.card.info.id}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              {" "}
              <RestaurantCard key={res?.card.card.info.id} resData={res} />{" "}
            </Link>
          ))
        )}
      </div>
    </div>
  );
};
export default Body;

//
