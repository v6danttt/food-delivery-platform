import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="border-b border-slate-200 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="text-lg font-semibold tracking-tight text-slate-900">
          Food Delivery
        </Link>
        <nav className="flex flex-wrap items-center gap-3">
          <Link
            to="/"
            className="rounded-full px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 hover:text-slate-900"
          >
            Home
          </Link>
          <Link
            to="/login"
            className="rounded-full px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 hover:text-slate-900"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="rounded-full px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 hover:text-slate-900"
          >
            Register
          </Link>
          <Link
            to="/restaurants"
            className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-700"
          >
            Restaurants
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;