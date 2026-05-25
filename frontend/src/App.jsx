import {
 BrowserRouter,
 Routes,
 Route
}
from
"react-router-dom";

import Home
from "./pages/Home";

import Login
from "./pages/Login";

import Register
from "./pages/Register";

import Restaurants
from "./pages/Restaurants";

import RestaurantDetails
from "./pages/RestaurantDetails";

import Navbar
from "./components/Navbar";

import ProtectedRoute
from "./components/Protectedroute";

function App() {

 return (

 <BrowserRouter>

 <Navbar />

 <Routes>

 <Route
 path="/"
 element={<Home />}
 />

 <Route
 path="/login"
 element={<Login />}
 />

 <Route
 path="/register"
 element={<Register />}
 />

 <Route
 path="/restaurants"
 element={
 <ProtectedRoute>

 <Restaurants />

 </ProtectedRoute>
 }
 />

 <Route
 path="/restaurant/:id"
 element={
 <RestaurantDetails />
 }
 />

 </Routes>

 </BrowserRouter>
 );
}

export default App;