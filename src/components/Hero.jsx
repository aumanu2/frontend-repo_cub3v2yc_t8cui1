import { Play } from "lucide-react";
import Spline from "@splinetool/react-spline";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900/90 to-white pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 pb-16 md:pt-16 md:pb-24 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <span className="inline-flex items-center rounded-full bg-indigo-500/10 text-indigo-300 ring-1 ring-inset ring-indigo-500/30 px-3 py-1 text-xs font-medium">Futuristic Ticketing</span>
          <h1 className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Book tickets in a holographic universe
          </h1>
          <p className="mt-4 text-slate-300 text-lg">
            Glide through showtimes, explore a 3D hologram ticket, and lock in the best seats with a beautiful, responsive experience.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#showtimes" className="inline-flex items-center justify-center rounded-md bg-indigo-600 text-white px-5 py-3 text-sm font-semibold shadow-sm hover:bg-indigo-500">
              Find Showtimes
            </a>
            <button className="inline-flex items-center gap-2 rounded-md border border-white/20 px-5 py-3 text-sm font-semibold text-white/90 hover:bg-white/5">
              <Play className="w-4 h-4" />
              How it works
            </button>
          </div>
          <div className="mt-8 flex items-center gap-6 text-sm text-slate-300">
            <div>
              <p className="font-semibold text-white">50k+</p>
              <p>Seats booked</p>
            </div>
            <div>
              <p className="font-semibold text-white">4.9/5</p>
              <p>User rating</p>
            </div>
          </div>
        </div>

        <div className="relative h-[420px] md:h-[520px] rounded-2xl border border-white/10 bg-black/60 shadow-2xl overflow-hidden">
          <Spline scene="https://prod.spline.design/zks9uYILDPSX-UX6/scene.splinecode" style={{ width: "100%", height: "100%" }} />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 -mt-6 md:-mt-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <ImageCard src="https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1200&auto=format&fit=crop" title="Sci‑Fi Saga" />
          <ImageCard src="https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?q=80&w=1200&auto=format&fit=crop" title="Indie Gem" />
          <ImageCard src="https://images.unsplash.com/photo-1505685296765-3a2736de412f?q=80&w=1200&auto=format&fit=crop" title="Comedy Night" />
          <ImageCard src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1200&auto=format&fit=crop" title="Action Blast" />
        </div>
      </div>
    </section>
  );
}

function ImageCard({ src, title }) {
  return (
    <div className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur">
      <img src={src} alt={title} className="h-36 w-full object-cover transition duration-500 group-hover:scale-105" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
      <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between">
        <p className="text-white text-sm font-medium drop-shadow">{title}</p>
        <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/10 text-white ring-1 ring-white/20">Now Showing</span>
      </div>
    </div>
  );
}
