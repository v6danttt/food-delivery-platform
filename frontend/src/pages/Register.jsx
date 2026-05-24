import { useState } from "react";
import API from "../services/api";

function Register() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleRegister = async (e) => {

    e.preventDefault();

    try {

      await API.post(
        "/auth/register",
        form
      );

      alert("Registration Successful");

      window.location.href =
        "/login";

    } catch (error) {

      alert("Registration Failed");

    }
  };

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-md overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-8 shadow-2xl shadow-slate-200/60 sm:p-10">
        <h1 className="text-3xl font-semibold text-slate-900">Create an account</h1>
        <p className="mt-3 text-sm text-slate-600">Sign up now to start ordering from your favorite restaurants.</p>
        <form onSubmit={handleRegister} className="mt-8 space-y-6">
          <div>
            <label className="block text-sm font-medium text-slate-700">Name</label>
            <input
              type="text"
              placeholder="Name"
              className="mt-2 w-full rounded-3xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-900 focus:ring-2 focus:ring-slate-200"
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700">Email</label>
            <input
              type="email"
              placeholder="Email"
              className="mt-2 w-full rounded-3xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-900 focus:ring-2 focus:ring-slate-200"
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700">Password</label>
            <input
              type="password"
              placeholder="Password"
              className="mt-2 w-full rounded-3xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-900 focus:ring-2 focus:ring-slate-200"
              onChange={(e) => setForm({ ...form, password: e.target.value })}
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
          >
            Register
          </button>
        </form>
      </div>
    </main>
  );
}

export default Register;