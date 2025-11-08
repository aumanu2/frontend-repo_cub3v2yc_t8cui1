import { CalendarDays, Clock } from "lucide-react";
import { useState } from "react";

const dates = Array.from({ length: 7 }).map((_, i) => {
  const d = new Date();
  d.setDate(d.getDate() + i);
  return d;
});

const showtimes = ["12:30", "14:00", "16:30", "19:00", "21:30"];

export default function ShowtimePicker({ onSelect }) {
  const [activeDate, setActiveDate] = useState(0);
  const [activeTime, setActiveTime] = useState(null);

  const selectTime = (time) => {
    setActiveTime(time);
    onSelect?.({ date: dates[activeDate], time });
  };

  return (
    <section id="showtimes" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex items-center gap-2 mb-4">
        <CalendarDays className="w-5 h-5 text-indigo-600" />
        <h2 className="text-lg font-semibold text-slate-900">Choose a date</h2>
      </div>
      <div className="flex gap-3 overflow-x-auto pb-2">
        {dates.map((d, i) => (
          <button
            key={i}
            onClick={() => {
              setActiveDate(i);
              setActiveTime(null);
            }}
            className={`min-w-[92px] rounded-lg border px-3 py-2 text-left text-sm transition ${
              i === activeDate
                ? "border-indigo-600 bg-indigo-50 text-indigo-700"
                : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
            }`}
          >
            <p className="font-medium">
              {d.toLocaleDateString(undefined, { weekday: "short" })}
            </p>
            <p className="text-xs text-slate-500">
              {d.toLocaleDateString(undefined, { month: "short", day: "numeric" })}
            </p>
          </button>
        ))}
      </div>

      <div className="flex items-center gap-2 mt-8 mb-4">
        <Clock className="w-5 h-5 text-indigo-600" />
        <h2 className="text-lg font-semibold text-slate-900">Pick a time</h2>
      </div>
      <div className="flex flex-wrap gap-2">
        {showtimes.map((t) => (
          <button
            key={t}
            onClick={() => selectTime(t)}
            className={`rounded-md border px-3 py-2 text-sm transition ${
              t === activeTime
                ? "border-indigo-600 bg-indigo-50 text-indigo-700"
                : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
            }`}
          >
            {t}
          </button>
        ))}
      </div>
    </section>
  );
}
