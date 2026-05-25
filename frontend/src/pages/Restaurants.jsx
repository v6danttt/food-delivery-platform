import { useEffect, useState } from "react";

import API from "../services/api";

import RestaurantCard from "../components/Restaurantcard";

function Restaurants() {

  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

  const getRestaurants = async () => {
    try {
      const res = await API.get("/restaurants");
      setRestaurants(res.data);
    } catch (err) {
      console.error(err);
      setError("Failed to load restaurants.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getRestaurants();
  }, []);

  const filteredRestaurants = restaurants.filter((restaurant) =>
    restaurant.name.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>{error}</h1>;

  return (
    <div>
      <h1>Restaurants</h1>

      <input
        type="text"
        placeholder="Search Restaurant"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {filteredRestaurants.map((restaurant) => (
        <RestaurantCard key={restaurant._id} restaurant={restaurant} />
      ))}
    </div>
  );
}

export default Restaurants;
