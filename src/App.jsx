import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ShowtimePicker from "./components/ShowtimePicker";
import SeatMap from "./components/SeatMap";
import BookingSummary from "./components/BookingSummary";

function App() {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [showtime, setShowtime] = useState(null);

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <ShowtimePicker onSelect={setShowtime} />
        <SeatMap onChange={setSelectedSeats} />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {showtime && (
            <div className="mb-2 text-sm text-slate-600">
              Selected: {showtime.date.toLocaleDateString()} at {showtime.time}
            </div>
          )}
        </div>
        <BookingSummary selection={selectedSeats} />
      </main>
      <footer className="border-t border-slate-200 py-6 mt-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-sm text-slate-600 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>© {new Date().getFullYear()} SeatBook. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-indigo-600">Privacy</a>
            <a href="#" className="hover:text-indigo-600">Terms</a>
            <a href="#" className="hover:text-indigo-600">Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
