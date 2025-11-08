import { useState } from "react";
import SeatMap from "./SeatMap";
import BookingSummary from "./BookingSummary";

export default function SeatSection() {
  const [selectedSeats, setSelectedSeats] = useState([]);

  return (
    <section id="seating" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <SeatMap onChange={setSelectedSeats} />
        </div>
        <div className="lg:col-span-1">
          <BookingSummary selection={selectedSeats} />
        </div>
      </div>
    </section>
  );
}
