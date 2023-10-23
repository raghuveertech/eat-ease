import "./../scss/main.scss";
import Filters from "./Filters";
import Restaurants from "./Restaurants";
import Search from "./Search";
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";

const Main = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [filters, setFilters] = useState({
    topRated: false,
    pureVeg: false,
  });
  const [apiCallComplete, setApiCallComplete] = useState(false);

  const filtersHandle = (e, filterItem, isSet) => {
    e.stopPropagation();
    setFilters({
      ...filters,
      [filterItem]: isSet,
    });
  };

  const filterRestaurants = () => {
    let filteredRestaurants = [...restaurants];
    filteredRestaurants = filteredRestaurants.filter((item) => {
      if (filters.pureVeg === true && !item.info.veg) {
        return false;
      }
      if (filters.topRated === true && item.info.avgRating <= 4.2) {
        return false;
      }
      return true;
    });
    setFilteredRestaurants(filteredRestaurants);
  };

  useEffect(() => {
    filterRestaurants();
  }, [filters]);

  const fetchRestaurants = async () => {
    try {
      const dataR = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.470984962807403&lng=78.54666475206614"
      );
      const json = await dataR.json();
      const allCards = json.data.cards;
      allCards.forEach((card) => {
        if (
          card?.card?.card?.gridElements?.infoWithStyle?.restaurants?.length >
          10
        ) {
          let restaurantsFromAPI =
            card?.card?.card?.gridElements?.infoWithStyle?.restaurants;
          setRestaurants(restaurantsFromAPI);
          setFilteredRestaurants(restaurantsFromAPI);
          return false;
        }
      });
      setApiCallComplete(true);
    } catch (err) {
      console.log(err);
      setApiCallComplete(true);
    }
  };

  useEffect(() => {
    fetchRestaurants();
  }, []);

  return (
    <div className="main">
      <Search />
      <Filters filters={filters} filtersHandle={filtersHandle} />
      {!apiCallComplete && restaurants.length === 0 ? (
        <Shimmer />
      ) : (
        <Restaurants restaurants={filteredRestaurants} />
      )}
    </div>
  );
};

export default Main;
