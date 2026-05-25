import {
 Link
}
from
"react-router-dom";

function Navbar() {

 const token =
 localStorage.getItem(
 "token"
 );

 const logout = () => {

 localStorage.removeItem(
 "token"
 );

 window.location.href =
 "/login";
 };

 return (

 <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>

 <Link to="/">Home</Link>

 {token ? (
	<>
		<Link to="/restaurants">Restaurants</Link>
		<button onClick={logout}>Logout</button>
	</>
 ) : (
	<>
		<Link to="/login">Login</Link>
		<Link to="/register">Register</Link>
	</>
 )}

 </div>
 );
}

export default
Navbar;