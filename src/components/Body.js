import { useState } from "react";
import { resList } from "../utils/mockData";
import RestaurantCard from "./RestaurentCard";

const Body = () => {
  // * React Hook -> A normal JavaScript function which is given to us by React (or) Normal JS utility functions
  // * useState() - Super Powerful variable
  // * useEffect() -

  // * State variable - Super Powerful variable
  const [listOfRestraunt, setListOfRestraunt] = useState(resList);

  return (
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
              listOfRestraunt.filter((res) => res.data.avgRating > 4)
            );
          }}
        >
          <label htmlFor="search">Search</label>
        </button>
      </div>

      <div className="cards-container">
        {listOfRestraunt.map((items) => (
          <RestaurantCard key={items?.data.id} resData={items} />
        ))}
      </div>
    </div>
  );
};
export default Body;
