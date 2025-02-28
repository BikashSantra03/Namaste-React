import { useState, useEffect } from "react";

const useRestaurantMenu = (resid) => {
  const [resInfo, setResinfo] = useState([]);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.56430&lng=88.36930&restaurantId=${resid}&catalog_qa=undefined&query=Pizza&submitAction=ENTER`
    );

    const jsonData = await data.json();

    const resItems = jsonData?.data?.cards;
    // jsonData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards

    // const itemsData =
    //   filteredresInfoData?.itemCards || filteredresInfoData?.carousel;

    console.log("Restaurants items all categories : ", resItems);

    setResinfo(resItems);
  };

  return resInfo;
};

export default useRestaurantMenu;
