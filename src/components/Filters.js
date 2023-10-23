import "./../scss/filters.scss";

const Filters = (props) => {
  const { filters, filtersHandle } = props;
  return (
    <div className="filters">
      <span className="label">Filters: </span>
      <div className="filters__list">
        <div
          className={`filters__list__item ${filters.topRated ? "active" : ""} `}
          onClick={(e) => filtersHandle(e, "topRated", true)}
        >
          Top Rated{" "}
          <span
            className="cross"
            onClick={(e) => filtersHandle(e, "topRated", false)}
          >
            &times;
          </span>{" "}
        </div>
        <div
          className={`filters__list__item ${filters.pureVeg ? "active" : ""} `}
          onClick={(e) => filtersHandle(e, "pureVeg", true)}
        >
          Pure Veg{" "}
          <span
            className="cross"
            onClick={(e) => filtersHandle(e, "pureVeg", false)}
          >
            &times;
          </span>{" "}
        </div>
      </div>
    </div>
  );
};

export default Filters;
