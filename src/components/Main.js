import "./../scss/main.scss";
import Filters from "./Filters";
import Restaurants from "./Restaurants";
import Search from "./Search";
import { restaurants as initialRestaurants } from "../utils/mockData";
import { useEffect, useState } from "react";

const Main = () => {
  const [restaurants, setRestaurants] = useState(initialRestaurants);
  const [filters, setFilters] = useState({
    topRated: false,
    pureVeg: false,
  });

  const filtersHandle = (e, filterItem, isSet) => {
    e.stopPropagation();
    setFilters({
      ...filters,
      [filterItem]: isSet,
    });
  };

  const filterRestaurants = () => {
    let filteredRestaurants = [...initialRestaurants];
    filteredRestaurants = filteredRestaurants.filter((item) => {
      if (filters.pureVeg === true && !item.info.veg) {
        return false;
      }
      if (filters.topRated === true && item.info.avgRating <= 4) {
        return false;
      }
      return true;
    });
    setRestaurants(filteredRestaurants);
  };

  useEffect(() => {
    filterRestaurants();
  }, [filters]);

  return (
    <div className="main">
      <Search />
      <Filters filters={filters} filtersHandle={filtersHandle} />
      <Restaurants restaurants={restaurants} />
    </div>
  );
};

export default Main;
