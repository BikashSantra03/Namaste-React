import { useState } from "react";
import ItemListsCards from "./ItemListsCards";

const RestaurantCategoryItems = ({ data, showItems, setShowIndex }) => {
  const resItems = data?.itemCards || data?.carousel;

  const handleClick = () => {
    setShowIndex();
  };

  return (
    <div className=" my-4 bg-gray-50 shadow-lg p-4 " onClick={handleClick}>
      {/*Accordion Header --------------------------------------------------------------------------*/}
      <div className="flex flex-wrap justify-between cursor-pointer">
        <span className="font-bold text-lg ">
          {data.title} ({data.itemCards.length})
        </span>
        <span>🔽</span>
      </div>

      {/*Accordion Body --------------------------------------------------------------------------- */}

      {resItems.map(
        (item) =>
          showItems && (
            <ItemListsCards key={item?.card?.info?.id} resItem={item} />
          )
      )}
    </div>
  );
};

export default RestaurantCategoryItems;
