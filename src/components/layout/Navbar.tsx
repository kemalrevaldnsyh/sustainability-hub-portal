export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        <div>
          <p className="text-sm font-semibold text-slate-900">
            Sustainability Hub
          </p>
          <p className="text-xs text-slate-500">Central Portal Dashboard</p>
        </div>
      </div>
    </header>
  );
}
