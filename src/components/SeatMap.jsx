import { useMemo, useState } from "react";

function Seat({ id, status, onToggle }) {
  const color =
    status === "selected"
      ? "bg-indigo-600 text-white border-indigo-700"
      : status === "booked"
      ? "bg-slate-200 text-slate-500 border-slate-300"
      : status === "vip"
      ? "bg-amber-50 text-amber-700 border-amber-200"
      : "bg-white text-slate-700 border-slate-200";

  const clickable = status !== "booked";

  return (
    <button
      aria-label={`Seat ${id} ${status}`}
      disabled={!clickable}
      onClick={onToggle}
      className={`rounded-md border text-xs md:text-sm flex items-center justify-center h-8 sm:h-9 md:h-10 transition select-none ${
        clickable ? "hover:scale-[1.02] active:scale-95" : "opacity-70"
      } ${color}`}
    >
      {id}
    </button>
  );
}

export default function SeatMap({ onChange }) {
  const [selected, setSelected] = useState([]);

  const layout = useMemo(() => {
    const rows = 8; // A-H
    const cols = 12; // 1-12
    const booked = new Set(["A5", "A6", "B3", "C7", "D8", "F2", "G10", "H11"]);
    const vipRows = new Set(["A", "B"]);
    const items = [];
    for (let r = 0; r < rows; r++) {
      for (let c = 1; c <= cols; c++) {
        const id = String.fromCharCode(65 + r) + c;
        const status = booked.has(id) ? "booked" : vipRows.has(id[0]) ? "vip" : "available";
        items.push({ id, status });
      }
    }
    return items;
  }, []);

  const toggle = (id) => {
    setSelected((prev) => {
      const next = prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id];
      onChange?.(next);
      return next;
    });
  };

  return (
    <section id="seats" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-slate-900">Select your seats</h2>
        <div className="flex items-center gap-3 text-xs text-slate-600">
          <span className="inline-flex items-center gap-1"><span className="w-3 h-3 rounded-sm bg-amber-50 border border-amber-200 inline-block" /> VIP</span>
          <span className="inline-flex items-center gap-1"><span className="w-3 h-3 rounded-sm bg-white border border-slate-200 inline-block" /> Available</span>
          <span className="inline-flex items-center gap-1"><span className="w-3 h-3 rounded-sm bg-slate-200 border border-slate-300 inline-block" /> Booked</span>
          <span className="inline-flex items-center gap-1"><span className="w-3 h-3 rounded-sm bg-indigo-600 border border-indigo-700 inline-block" /> Selected</span>
        </div>
      </div>

      <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
        <div className="mb-3 h-2 rounded-full bg-slate-200" aria-hidden />
        <div className="grid grid-cols-12 gap-2 sm:gap-2.5 md:gap-3">
          {layout.map((seat) => (
            <Seat
              key={seat.id}
              id={seat.id}
              status={selected.includes(seat.id) ? "selected" : seat.status}
              onToggle={() => toggle(seat.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
