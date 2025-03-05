import { Card_IMG_URL } from "../../utils/constatnt";
import { FcRating } from "react-icons/fc";


const RestaurantCard = (props) => {
  const { resData } = props;

  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } =
    resData?.card?.card?.info;

  const deliveryTime = resData?.card?.card?.info?.sla?.deliveryTime;

  return (
    <div className="flex w-[200px]  p-1.5 border border-transparent rounded-lg flex-col bg-[antiquewhite;]  hover:scale-[0.9] duration-300 ease-in  ">
      <img
        className=" w-[200px] h-[200px] object-cover rounded-lg"
        src={Card_IMG_URL + cloudinaryImageId}
        alt="pizza"
      />
      <div className="flex flex-col gap-2">
        <h3 className="font-bold py-4 text-lg text-[#4caf50]">
          {name.toUpperCase()}
        </h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4 className="flex items-center">
          {avgRating}
          <FcRating />
        </h4>
        <h4>{costForTwo}</h4>
        <h4>
          {deliveryTime}-{deliveryTime + 5} minutes
        </h4>
      </div>
    </div>
  );
};
export default RestaurantCard;
