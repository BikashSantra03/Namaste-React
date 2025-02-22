import React, { useState, useEffect } from "react";
import { useParams } from "react-router";

import Shimmer from "./Shimmer";
import RestaurantMenuItems from "./RestaurantMenuItems";

const RestaurantMenu = () => {
  const [resInfo, setResinfo] = useState([]);

  const { resid } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.5743545&lng=88.3628734&restaurantId=${resid}&catalog_qa=undefined&query=Pizza&submitAction=ENTER`
    );
    const jsonData = await data.json();

    const filteredresInfoData =
      jsonData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
        ?.card?.card;
    const itemsData =
      filteredresInfoData?.itemCards || filteredresInfoData?.carousel;

    console.log(itemsData);

    setResinfo(itemsData);
  };

  return resInfo.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="items-container">
      {resInfo.map((item) => (
        <RestaurantMenuItems key={item?.card?.info?.id} itemdata={item} />
      ))}
    </div>
  );
};

export default RestaurantMenu;
