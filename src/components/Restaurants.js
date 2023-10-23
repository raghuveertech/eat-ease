import "./../scss/restaurants.scss";
import RestaurantCard from "./RestaurantCard";
import { restaurants } from "../utils/mockData";

const Restaurants = () => {
  return (
    <div className="restaurants">
      {restaurants.map((restaurant) => {
        return <RestaurantCard key={restaurant.id} restaurant={restaurant} />;
      })}
    </div>
  );
};

export default Restaurants;
