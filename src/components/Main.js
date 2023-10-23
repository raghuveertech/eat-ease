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
  const [searchQuery, setSearchQuery] = useState("");

  const filtersHandle = (e, filterItem, isSet) => {
    e.stopPropagation();
    setFilters({
      ...filters,
      [filterItem]: isSet,
    });
  };

  const filterRestaurants = () => {
    let allRestaurants = [...restaurants];
    let allRestaurantsFiltered = allRestaurants.filter((item) => {
      if (filters.pureVeg === true && !item.info.veg) {
        return false;
      }
      if (filters.topRated === true && item.info.avgRating <= 4.5) {
        return false;
      }
      if (!item.info.name.toLowerCase().includes(searchQuery.toLowerCase())) {
        return false;
      }
      return true;
    });
    console.log("allRestaurantsFiltered", allRestaurantsFiltered);
    setFilteredRestaurants(allRestaurantsFiltered);
  };

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

  const searchQueryHandler = (e) => {
    let searchTerm = e.target.value;
    if (!searchTerm) {
      searchTerm = "";
    }
    searchTerm = searchTerm.trim();
    setSearchQuery(searchTerm);
  };

  const clearSearch = () => {
    setSearchQuery("");
  };

  useEffect(() => {
    fetchRestaurants();
  }, []);

  useEffect(() => {
    filterRestaurants();
  }, [filters]);

  useEffect(() => {
    if (searchQuery === "") {
      filterRestaurants();
    }
  }, [searchQuery]);

  return (
    <div className="main">
      <Search
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        searchQueryHandler={searchQueryHandler}
        filterRestaurants={filterRestaurants}
        clearSearch={clearSearch}
      />
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
