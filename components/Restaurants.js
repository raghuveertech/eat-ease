import "./../scss/restaurants.scss";
import RestaurantCard from "./RestaurantCard";

const Restaurants = () => {
  const restaurants = [
    {
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/yicz1tvfe3v9mzgtqa9i",
      name: "Tasty Bites Cafe",
      cuisine: "Italian",
      rating: 4.5,
      address: "123 Main Street, Cityville, State 12345",
      freeDelivery: false,
    },
    {
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/rwkglcjwyht48fys36gs",
      name: "Spice Junction",
      cuisine: "Indian",
      rating: 4.0,
      address: "456 Elm Street, Townsville, State 67890",
      freeDelivery: true,
    },
    {
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/bb7ae131544c7d37e10fc5faf76f09d6",
      name: "Sushi Palace",
      cuisine: "Japanese",
      rating: 4.2,
      address: "789 Oak Avenue, Villagetown, State 45678",
      freeDelivery: false,
    },
    {
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/2b4f62d606d1b2bfba9ba9e5386fabb7",
      name: "Burger Haven",
      cuisine: "American",
      rating: 4.7,
      address: "101 Pine Road, Suburbia, State 23456",
      freeDelivery: false,
    },
    {
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/1ace5fa65eff3e1223feb696c956b38b",
      name: "Mediterranean Delights",
      cuisine: "Mediterranean",
      rating: 4.3,
      address: "543 Cedar Lane, Outskirts, State 78901",
      freeDelivery: true,
    },
  ];
  return (
    <div className="restaurants">
      {restaurants.map((restaurant) => {
        return <RestaurantCard restaurant={restaurant} />;
      })}
    </div>
  );
};

export default Restaurants;
