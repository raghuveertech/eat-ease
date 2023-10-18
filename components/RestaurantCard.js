import { faStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./../scss/restaurant-card.scss";

const RestaurantCard = (props) => {
  const { restaurant } = props;
  const { image, name, cuisine, rating, address } = restaurant;
  return (
    <div className="restautant-card">
      <div className="restautant-card__image">
        <img src={image} alt={name} />
      </div>
      <div className="restautant-card__content">
        <p className="restautant-card__content__name">{name}</p>
        <p className="restautant-card__content__rating">
          <span className="icon-container">
            <FontAwesomeIcon icon={faStar} />
          </span>
          {rating}
        </p>
        <p className="restautant-card__content__cuisine">{cuisine}</p>
        <p className="restautant-card__content__address">{address}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
