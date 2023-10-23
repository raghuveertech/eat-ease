import { faStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./../scss/restaurant-card.scss";

const RestaurantCard = (props) => {
  const { restaurant } = props;
  const restaurantInfo = restaurant.info;
  const freedelMessage =
    restaurantInfo.loyaltyDiscoverPresentationInfo?.freedelMessage;

  const { name, cloudinaryImageId, avgRating, cuisines, locality, veg } =
    restaurantInfo;

  const imageURL = `https://media-assets.swiggy.com/swiggy/image/upload/${cloudinaryImageId}`;

  return (
    <div className="restautant-card">
      {freedelMessage ? (
        <span className="restautant-card__tag">{freedelMessage}</span>
      ) : null}
      <div className="restautant-card__image">
        <img src={imageURL} alt={name} />
        {veg ? <span className="restautant-card__veg-icon"></span> : null}
      </div>
      <div className="restautant-card__content">
        <p className="restautant-card__content__name">{name}</p>
        <p className="restautant-card__content__rating">
          <span className="icon-container">
            <FontAwesomeIcon icon={faStar} />
          </span>
          {avgRating}
        </p>
        <p className="restautant-card__content__cuisine">
          {cuisines.join(", ")}
        </p>
        <p className="restautant-card__content__address">{locality}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
