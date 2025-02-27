import { useState } from "react";

import RestaurantCard from "./RestaurentCard";
import Shimmer from "./Shimmer";
import NotFound from "./NotFound";
import { Link } from "react-router";
import useRestaurantsList from "../utils/useRestaurantsList";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [searchText, setsearchText] = useState("");

  const [filteredData, setFilteredData] = useState(null); // Store filtered data

  const { listOfRestraunt, setListOfRestraunt } = useRestaurantsList(); // custom Hook for API call

  const handleSearch = () => {
    const filtered = listOfRestraunt.filter((res) =>
      res.card.card.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    console.log(filtered);
    setFilteredData(filtered); // Update filteredData state
  };

  // When Enterd pressed then automatically call handleSearch
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) return <h1>You are Offline</h1>;

  return listOfRestraunt.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className=" flex flex-wrap justify-center my-10 gap-1">
        <div className="search">
          <input
            name="search"
            type="text"
            className="min-w-2xs p-2.5 border border-solid border-black"
            placeholder="Search Food or Restaurant"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
            onKeyDown={handleKeyDown}
          />
          <button
            className="m-2 px-3.5 py-2.5 cursor-pointer  bg-green-300 rounded-lg"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>

        <button
          className="m-2 px-3.5 py-2.5 cursor-pointer  bg-gray-300 rounded-lg"
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

      <div className="flex flex-wrap justify-around gap-2.5 mx-10">
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
