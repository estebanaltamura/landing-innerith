export default function App() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      <div className="relative min-h-screen flex items-center justify-center px-6">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-white/5 blur-3xl" />
          <div className="absolute top-1/2 left-1/2 h-[760px] w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.10)_0%,rgba(0,0,0,0)_55%)]" />
        </div>

        <section className="relative w-full max-w-3xl text-center">
          <div className="text-[11px] tracking-[0.35em] text-white/60">
            SITE UNDER CONSTRUCTION
          </div>
          <h1 className="mt-5 text-4xl sm:text-6xl font-semibold tracking-[0.35em]">
            COMING SOON
          </h1>
          <div className="mt-10 mx-auto h-1.5 w-full max-w-md rounded-full bg-white/10">
            <div className="h-1.5 w-[62%] rounded-full bg-gradient-to-r from-cyan-400 via-violet-500 to-pink-500" />
          </div>
          <div className="mt-3 text-xs text-white/60">62%</div>
        </section>
      </div>
    </main>
  )
}
