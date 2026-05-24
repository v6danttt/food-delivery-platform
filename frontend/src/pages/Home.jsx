function Home() {
  const token = localStorage.getItem("token");

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl rounded-[2rem] border border-slate-200 bg-white/90 p-8 shadow-2xl shadow-slate-200/60 backdrop-blur-lg sm:p-12">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <span className="inline-flex rounded-full bg-rose-100 px-4 py-1 text-sm font-semibold text-rose-700">
              Fast & tasty delivery
            </span>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
              Food Delivery Platform
            </h1>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Discover restaurants near you, order meals in seconds, and enjoy hot food delivered right to your door.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/restaurants"
                className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-700"
              >
                Browse Restaurants
              </a>
              <a
                href="/login"
                className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-300 hover:bg-slate-50"
              >
                Login / Register
              </a>
            </div>
          </div>
          <div className="rounded-[2rem] border border-slate-200 bg-slate-950/5 p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-semibold text-slate-900">Account status</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              {token ? (
                "You are logged in and ready to place your next order."
              ) : (
                "Sign in to save favorites, track orders, and access exclusive offers."
              )}
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                <p className="text-sm font-semibold text-slate-500">Delivery time</p>
                <p className="mt-3 text-2xl font-bold text-rose-500">30 min</p>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                <p className="text-sm font-semibold text-slate-500">Popular cuisine</p>
                <p className="mt-3 text-2xl font-bold text-sky-500">Italian</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;