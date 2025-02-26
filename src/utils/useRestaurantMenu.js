import { useState, useEffect } from "react";

const useRestaurantMenu = (resid) => {
  const [resInfo, setResinfo] = useState([]);

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

    console.log("Restaurants Items :  " + itemsData);

    setResinfo(itemsData);
  };

  return resInfo;
};

export default useRestaurantMenu;
