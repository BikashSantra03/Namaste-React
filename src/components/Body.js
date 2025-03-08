import { useContext, useState } from "react";

import RestaurantCard from "./cards/RestaurantCard";
import Shimmer from "./Shimmer";
import NotFound from "./pages/NotFound";
import { Link } from "react-router";
import useRestaurantsList from "../utils/useRestaurantsList";
import useOnlineStatus from "../utils/useOnlineStatus";
import { PromotedRestaurantCard } from "./cards/PromotedRestaurantCard";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [searchText, setsearchText] = useState("");

  const [filteredData, setFilteredData] = useState(null); // Store filtered data

  const { listOfRestraunt, setListOfRestraunt } = useRestaurantsList(); // custom Hook for API call

  const PromotedRestaurant = PromotedRestaurantCard(RestaurantCard);

  const handleSearch = () => {
    const filtered = listOfRestraunt.filter((res) =>
      res?.card?.card?.info?.name
        .toLowerCase()
        .includes(searchText.toLowerCase())
    );
    console.log("Searched Filtered Data : ", filtered);

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

  const { userName, setUserName } = useContext(UserContext);

  return listOfRestraunt.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className=" flex flex-wrap justify-center items-center my-10 gap-1">
        <div className="search">
          <input
            name="search"
            data-testid="searchInput"
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
          Top Rated Restaurants
        </button>

        <label htmlFor="userNameInput"> User Name: </label>
        <input
          type="text"
          name="userNameInput"
          className="min-w-1 p-2.5 border border-solid"
          placeholder="Enter UserName here"
          value={userName}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
      </div>

      <div className="flex flex-wrap justify-around gap-2.5 mx-10 relative z-1">
        {filteredData === null ? (
          listOfRestraunt.map((res) => (
            <Link
              key={res?.card?.card?.info?.id}
              to={"/restaurants/" + res?.card?.card?.info?.id}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              {res?.card?.card?.info?.promoted ? (
                <PromotedRestaurant resData={res} />
              ) : (
                <RestaurantCard resData={res} />
              )}
            </Link>
          ))
        ) : filteredData.length === 0 ? (
          <NotFound />
        ) : (
          filteredData.map((res) => (
            <Link
              key={res?.card.card.info.id}
              to={"/restaurants/" + res?.card?.card?.info?.id}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              {res?.card?.card?.info?.promoted ? (
                <PromotedRestaurant resData={res} />
              ) : (
                <RestaurantCard resData={res} />
              )}
            </Link>
          ))
        )}
      </div>
    </div>
  );
};
export default Body;
