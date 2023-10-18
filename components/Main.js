import "./../scss/main.scss";
import Restaurants from "./Restaurants";
import Search from "./Search";

const Main = () => {
  return (
    <div className="main">
      <Search />
      <Restaurants />
    </div>
  );
};

export default Main;
