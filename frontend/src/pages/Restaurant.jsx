import {
  useEffect,
  useState
} from "react";

import API from "../services/api";

function Restaurants() {

  const [restaurants,
    setRestaurants] =
    useState([]);

  useEffect(() => {
    getRestaurants();
  }, []);

  const getRestaurants =
    async () => {

      try {

        const res =
          await API.get(
            "/restaurants"
          );

        setRestaurants(
          res.data
        );

      } catch (error) {
        console.log(error);
      }
    };

  return (
    <div>

      <h1>Restaurants</h1>

      {
        restaurants.map(
          (item) => (

            <div
              key={item._id}
            >

              <h3>
                {item.name}
              </h3>

              <p>
                {item.address}
              </p>

            </div>
          )
        )
      }

    </div>
  );
}

export default Restaurants;