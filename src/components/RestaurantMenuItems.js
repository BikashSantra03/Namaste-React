import React, { useState } from "react";
import { items_IMG } from "../utils/constatnt";

const RestaurantMenuItems = (props) => {
  const { itemdata } = props;

  const { name, description, imageId } =
    itemdata?.card?.info || itemdata?.dish.info;

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
    <div className="res-card">
      <img src={items_IMG + imageId} alt="items-image" />
      <div className="itemdetails">
        <h3>{name}</h3>
        <h4>
          {!isExpanded ? shortDescription : description}
          {description?.length > 50 && (
            <span onClick={() => setIsExpanded(!isExpanded)}>
              {isExpanded ? "less" : "more"}
            </span>
          )}
        </h4>

        <h4>₹{defaultPrice / 100}</h4>
      </div>
      <button className="add-item-button">Add to Cart</button>
    </div>
  );
};

export default RestaurantMenuItems;
