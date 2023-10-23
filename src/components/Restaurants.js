import "./../scss/restaurants.scss";
import RestaurantCard from "./RestaurantCard";

const Restaurants = (props) => {
  const { restaurants } = props;
  return (
    <div className="restaurants">
      {restaurants.map((restaurant) => {
        return (
          <RestaurantCard key={restaurant.info.id} restaurant={restaurant} />
        );
      })}
    </div>
  );
};

export default Restaurants;
