import { Link } from "react-router-dom";

function RestaurantCard({
  restaurant
}) {

  return (

    <Link to={`/restaurant/${restaurant._id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      <div
        style={{
          border: "1px solid #ddd",
          padding: "15px",
          margin: "10px",
          borderRadius: "10px",
        }}
      >

        <h2>
          {restaurant.name}
        </h2>

        <p>
          📍 {restaurant.address}
        </p>

        <p>
          ⭐ {restaurant.rating}
        </p>

      </div>
    </Link>
  );
}

export default RestaurantCard;