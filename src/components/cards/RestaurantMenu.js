import React from "react";
import { useParams } from "react-router";

import Shimmer from "../Shimmer";

import useRestaurantMenu from "../../utils/useRestaurantMenu";
import RestaurantCategoryItems from "./RestaurantCategoryItems";

const RestaurantMenu = () => {
  const { resid } = useParams();
  const resInfo = useRestaurantMenu(resid); //custom Hooks for API call

  const name = resInfo[2]?.card?.card?.info?.name;
  const city = resInfo[2]?.card?.card?.info?.city;
  const locality = resInfo[2]?.card?.card?.info?.locality;
  const areaName = resInfo[2]?.card?.card?.info?.areaName;
  const cuisines = resInfo[2]?.card?.card?.info?.cuisines;
  const avgRating = resInfo[2]?.card?.card?.info?.avgRating;
  const totalRatingsString = resInfo[2]?.card?.card?.info?.totalRatingsString;
  const sla = resInfo[2]?.card?.card?.info?.sla;

  const resCategories =
    resInfo[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (item) =>
        item?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  console.log(resCategories);

  return resInfo.length === 0 ? (
    <Shimmer />
  ) : (
    <div className=" w-6/12 mx-auto">
      <h1 className="font-bold text-2xl text-coral font-pacifico  text-[#4c65af] text-center p-4">
        {name}
      </h1>
      <div className="flex flex-wrap justify-between border bg-gray-200 m-2 p-3">
        <div>
          <div>
            {areaName}, {city}
          </div>

          <div>
            ⭐{avgRating} ({totalRatingsString})
          </div>
        </div>
        <div>
          <div>{cuisines.join(", ")}</div>
          <div>
            ⏱{sla.minDeliveryTime}-{sla.maxDeliveryTime} mins
          </div>
        </div>
      </div>

      {resCategories.map((category) => (
        <RestaurantCategoryItems
          key={category?.card?.card?.title}
          data={category?.card?.card}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
