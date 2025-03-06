import React from "react";
import { items_IMG } from "../../utils/constatnt";
import { FcRating } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";

import { addItem, removeItem } from "../../utils/store/cartSlice";

const ItemListsCards = ({ resItem, showAddbtn }) => {
  const { name, description, imageId, ratings } =
    resItem?.card?.info || resItem?.dish?.info;

  const price =
    resItem?.card?.info?.defaultPrice ||
    resItem?.dish?.info?.price ||
    resItem?.card?.info?.price;

  const dispatch = useDispatch(); // used to write in store

  const handleAddItem = (resItem) => {
    dispatch(addItem(resItem)); //dispatch an action
    toast.success("Item added to Cart!");
  };

  const handleRemoveItem = (resItem) => {
    const id = resItem?.card?.info?.id;

    dispatch(removeItem(id));
    toast.error("Item removed from the Cart!");
  };
  return (
    <div className="p-2 m-2 border-b-2 flex justify-between">
      <div className="w-9/12 flex flex-col">
        <h2 className="font-semibold text-lg">{name}</h2>
        <p>₹{price / 100}</p>
        <p className="flex items-center gap-1">
          {ratings?.aggregatedRating?.rating ? (
            <>
              <FcRating />
              {ratings.aggregatedRating.rating}
              {ratings?.aggregatedRating?.ratingCount &&
                ` (${ratings.aggregatedRating.ratingCount})`}
            </>
          ) : null}
        </p>

        <p className="text-sm">{description}</p>
      </div>

      <div className="w-3/12 p-4 flex items-center justify-center relative">
        {showAddbtn ? (
          <button
            className=" absolute border bottom-[5px] left-1/5 w-20 bg-white font-medium text-1.5
            text-[#1ba672]  text-center my-1 mx-0.5 cursor-pointer rounded-md transition-colors duration-300 hover:bg-gray-300"
            onClick={() => handleAddItem(resItem)}
          >
            ADD
          </button>
        ) : (
          <button
            className=" absolute border bottom-[5px] left-1/5 w-20 bg-white font-medium text-1.5
            text-[#1ba672]  text-center my-1 mx-0.5 cursor-pointer rounded-md transition-colors duration-300 hover:bg-gray-300"
            onClick={() => handleRemoveItem(resItem)}
          >
            Remove
          </button>
        )}

        <img
          src={items_IMG + imageId}
          alt="Restaurant Items"
          className=" w-[100px] h-[100px] object-cover rounded-md"
        />
      </div>
    </div>
  );
};

export default ItemListsCards;
