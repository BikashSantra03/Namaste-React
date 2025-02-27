import React from "react";
import { useParams } from "react-router";

import Shimmer from "./Shimmer";
import RestaurantMenuItems from "./RestaurantMenuItems";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resid } = useParams();
  const resInfo = useRestaurantMenu(resid); //custom Hooks for API call

  return resInfo.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="flex flex-wrap gap-2.5 justify-around mx-10">
      {resInfo.map((item) => (
        <RestaurantMenuItems key={item?.card?.info?.id} itemdata={item} />
      ))}
    </div>
  );
};

export default RestaurantMenu;
