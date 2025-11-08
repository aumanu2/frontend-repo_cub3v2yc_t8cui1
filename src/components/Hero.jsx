import { Play } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-50 via-white to-white pointer-events-none" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 pb-16 md:pt-16 md:pb-24 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Book the perfect seat, every time
          </h1>
          <p className="mt-4 text-slate-600 text-lg">
            Discover showtimes, pick your favorite spot, and check out in seconds. Fully responsive and fast on any device.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#showtimes" className="inline-flex items-center justify-center rounded-md bg-indigo-600 text-white px-5 py-3 text-sm font-semibold shadow-sm hover:bg-indigo-500">
              Find Showtimes
            </a>
            <button className="inline-flex items-center gap-2 rounded-md border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50">
              <Play className="w-4 h-4" />
              How it works
            </button>
          </div>
          <div className="mt-8 flex items-center gap-6 text-sm text-slate-600">
            <div>
              <p className="font-semibold text-slate-900">50k+</p>
              <p>Seats booked</p>
            </div>
            <div>
              <p className="font-semibold text-slate-900">4.9/5</p>
              <p>User rating</p>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/3] rounded-xl border border-slate-200 bg-white shadow-sm p-4">
            <div className="h-full grid grid-cols-8 grid-rows-6 gap-2">
              {Array.from({ length: 48 }).map((_, i) => {
                const booked = [4, 5, 12, 13, 22, 30, 35].includes(i);
                const vip = i < 8;
                return (
                  <div
                    key={i}
                    className={`rounded-md flex items-center justify-center text-[10px] md:text-xs select-none border transition ${
                      booked
                        ? "bg-slate-200 border-slate-300 text-slate-500"
                        : vip
                        ? "bg-amber-50 border-amber-200 text-amber-700"
                        : "bg-indigo-50 border-indigo-200 text-indigo-700"
                    }`}
                  >
                    {String.fromCharCode(65 + Math.floor(i / 8))}
                    {1 + (i % 8)}
                  </div>
                );
              })}
            </div>
          </div>
          <p className="mt-3 text-center text-xs text-slate-500">Preview of our interactive seat map</p>
        </div>
      </div>
    </section>
  );
}
