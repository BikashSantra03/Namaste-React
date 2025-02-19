const RestaurantCard = (props) => {
  const { resData } = props;

  const { name, cuisines, avgRating, costForTwo, deliveryTime } = resData.data;

  return (
    <div className="res-card">
      <img
        src="https://img.freepik.com/free-photo/top-view-delicious-vegan-salad-plate-with-various-fresh-vegetables-dark-background_179666-47279.jpg?size=626&ext=jpg"
        alt="pizza"
      />
      <div className="itemdetails">
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating}⭐</h4>
        <h4>₹{costForTwo / 100} FOR TWO</h4>
        <h4>{deliveryTime} minutes</h4>
      </div>
    </div>
  );
};
export default RestaurantCard;
