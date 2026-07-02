import { RoadScene } from "./RoadScene";

export function RoadDashboard() {
  return (
    <div className="space-y-8">
      <section className="max-w-2xl">
        <p className="text-xs font-medium uppercase tracking-[0.14em] text-slate-500">
          KPN Downstream Sustainability
        </p>
        <h1 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
          Sustainability Hub Portal
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-slate-600">
          Ikuti jalan sustainability — klik rambu hijau di setiap persimpangan
          untuk membuka modul aktif.
        </p>
      </section>

      <RoadScene />
    </div>
  );
}
