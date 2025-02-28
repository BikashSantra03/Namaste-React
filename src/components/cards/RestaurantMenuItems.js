import React, { useState } from "react";
import { items_IMG } from "../../utils/constatnt";

const RestaurantMenuItems = (props) => {
  const { itemdata } = props;

  const { name, description, imageId } =
    itemdata?.card?.info || itemdata?.dish?.info;

  const defaultPrice =
    itemdata?.card?.info?.defaultPrice ||
    itemdata?.card?.info?.price ||
    itemdata?.dish?.info?.price;

  const [isExpanded, setIsExpanded] = useState(false); // state for more button

  const shortDescription =
    description?.length > 50
      ? description.substring(0, 50) + "..."
      : description;

  return (
    <div className="flex w-[200px]  justify-around items-center p-1.5 border border-transparent rounded-lg flex-col bg-[antiquewhite;]  hover:scale-[1.1] duration-300 ease-in  ">
      <img
        className=" w-[200px] h-[200px] object-cover rounded-lg"
        src={items_IMG + imageId}
        alt="items-image"
      />
      <div className="flex flex-col gap-2">
        <h3 className="font-bold py-4 text-lg">{name}</h3>
        <h4>
          {!isExpanded ? shortDescription : description}
          // for more/less span
          {description?.length > 50 && (
            <span onClick={() => setIsExpanded(!isExpanded)}>
              {isExpanded ? "less" : "more"}
            </span>
          )}
        </h4>

        <h4>₹{defaultPrice / 100}</h4>
      </div>
      <button className=" w-40  bg-[#61a763]  text-white px-5 py-2.5 text-center my-1 mx-0.5 cursor-pointer rounded-md transition-colors duration-300 hover:bg-[#45a049]">
        Add to Cart
      </button>
    </div>
  );
};

export default RestaurantMenuItems;
