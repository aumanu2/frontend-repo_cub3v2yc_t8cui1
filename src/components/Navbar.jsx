import { Ticket, User } from "lucide-react";

export default function Navbar() {
  return (
    <header className="w-full sticky top-0 z-20 bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="inline-flex items-center justify-center rounded-md bg-indigo-600 text-white w-9 h-9">
            <Ticket className="w-5 h-5" />
          </div>
          <span className="font-semibold text-slate-900 text-lg">SeatBook</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm text-slate-700">
          <a href="#showtimes" className="hover:text-indigo-600 transition-colors">Showtimes</a>
          <a href="#seats" className="hover:text-indigo-600 transition-colors">Seats</a>
          <a href="#summary" className="hover:text-indigo-600 transition-colors">Summary</a>
        </nav>
        <button className="inline-flex items-center gap-2 rounded-md border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">
          <User className="w-4 h-4" />
          Sign in
        </button>
      </div>
    </header>
  );
}
