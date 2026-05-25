import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../services/api";

function RestaurantDetails() {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getDetails = async () => {
      try {
        const res = await API.get(`/restaurants/${id}`);
        setRestaurant(res.data);
      } catch (err) {
        setError("Failed to load restaurant details.");
      } finally {
        setLoading(false);
      }
    };

    getDetails();
  }, [id]);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>{error}</h1>;
  if (!restaurant) return <h1>No details found.</h1>;

  return (
    <div>
      <h1>{restaurant.name}</h1>
      <p>📍 {restaurant.address}</p>
      <p>⭐ {restaurant.rating}</p>

      <h2>Menu</h2>
      {restaurant.menu && restaurant.menu.length > 0 ? (
        <ul>
          {restaurant.menu.map((item, idx) => (
            <li key={idx}>
              {item.name} — ${item.price}
            </li>
          ))}
        </ul>
      ) : (
        <p>No menu available.</p>
      )}
    </div>
  );
}

export default RestaurantDetails;