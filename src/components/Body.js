import { resList } from "../utils/mockData";
import RestaurantCard from "./RestaurentCard";

const Body = () => {
  return (
    <div className="body">
      <div className="search-container">
        <input
          name="search"
          type="text"
          placeholder="Search Food or Restaurant"
        />
        <button>
          <label htmlFor="search">Search</label>
        </button>
      </div>

      <div className="cards-container">
        {resList.map((items) => (
          <RestaurantCard key={items?.data.id} resData={items} />
        ))}
      </div>
    </div>
  );
};
export default Body;
