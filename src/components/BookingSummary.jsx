import { useMemo } from "react";
import { Check } from "lucide-react";

export default function BookingSummary({ selection }) {
  const { seats, total } = useMemo(() => {
    const vipRows = new Set(["A", "B"]);
    const prices = { regular: 10, vip: 16 };
    const seats = selection;
    const total = seats.reduce((sum, id) => {
      const isVip = vipRows.has(id[0]);
      return sum + (isVip ? prices.vip : prices.regular);
    }, 0);
    return { seats, total };
  }, [selection]);

  return (
    <section id="summary" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-slate-900">Booking summary</h3>
        <p className="mt-1 text-slate-600 text-sm">Review your selection before checkout</p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div>
            <p className="text-sm text-slate-500">Selected seats</p>
            {seats.length ? (
              <p className="mt-1 font-medium text-slate-900">{seats.join(", ")}</p>
            ) : (
              <p className="mt-1 text-slate-600">No seats selected</p>
            )}
          </div>
          <div>
            <p className="text-sm text-slate-500">Estimated total</p>
            <p className="mt-1 font-semibold text-slate-900">${total.toFixed(2)}</p>
          </div>
        </div>

        <div className="mt-6">
          <button
            disabled={!seats.length}
            className="w-full inline-flex items-center justify-center gap-2 rounded-md bg-indigo-600 px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Check className="w-4 h-4" />
            Proceed to checkout
          </button>
        </div>

        <p className="mt-3 text-xs text-slate-500">
          Prices: VIP $16 • Regular $10. Taxes included. This demo does not process payments.
        </p>
      </div>
    </section>
  );
}
