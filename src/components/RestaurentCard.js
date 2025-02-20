import { Card_IMG_URL } from "../utils/constatnt";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } =
    resData?.card?.card?.info;

  const deliveryTime = resData?.card?.card?.info?.sla?.deliveryTime;

  return (
    <div className="res-card">
      <img src={Card_IMG_URL + cloudinaryImageId} alt="pizza" />
      <div className="itemdetails">
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating}⭐</h4>
        <h4>{costForTwo}</h4>
        <h4>
          {deliveryTime}-{deliveryTime + 5} minutes
        </h4>
      </div>
    </div>
  );
};
export default RestaurantCard;
