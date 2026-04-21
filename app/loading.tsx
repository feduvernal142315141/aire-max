export default function Loading() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background gradient consistent with hero */}
      <div className="bg-section absolute inset-0" />

      {/* Ambient glows */}
      <div className="animate-float absolute top-20 left-0 h-[300px] w-[300px] rounded-full bg-[#079cfb] opacity-15 blur-[120px] md:h-[500px] md:w-[500px]" />
      <div
        className="animate-float absolute right-0 bottom-0 h-[250px] w-[250px] rounded-full bg-[#00e0ff] opacity-10 blur-[100px] md:h-[400px] md:w-[400px]"
        style={{ animationDelay: "1s", animationDuration: "8s" }}
      />

      <div className="relative z-10 container mx-auto px-6 pt-20 pb-16 md:px-6 lg:px-32">
        {/* Hero shimmer */}
        <div className="mb-20 grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-6">
            <div className="animate-skeleton-shimmer h-8 w-52 rounded-full" />
            <div className="space-y-3">
              <div className="animate-skeleton-shimmer h-12 w-full rounded-2xl" />
              <div className="animate-skeleton-shimmer h-12 w-11/12 rounded-2xl" />
              <div className="animate-skeleton-shimmer h-12 w-3/4 rounded-2xl" />
            </div>
            <div className="space-y-2">
              <div className="animate-skeleton-shimmer h-4 w-full rounded-lg" />
              <div className="animate-skeleton-shimmer h-4 w-5/6 rounded-lg" />
            </div>
            <div className="flex gap-3 pt-4">
              <div className="animate-skeleton-shimmer h-14 w-44 rounded-2xl" />
              <div className="animate-skeleton-shimmer h-14 w-44 rounded-2xl" />
            </div>
          </div>
          <div className="relative h-[350px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
            <div className="animate-skeleton-shimmer absolute inset-0 rounded-[2.5rem] shadow-[0_0_80px_rgba(255,255,255,0.6),0_20px_60px_rgba(7,156,251,0.15)]" />
          </div>
        </div>

        {/* Cards shimmer */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-4">
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className="space-y-4 rounded-2xl border border-white/60 bg-white/70 p-4 shadow-[0_4px_20px_rgba(7,156,251,0.08)] backdrop-blur-sm"
            >
              <div className="animate-skeleton-shimmer aspect-[4/3] rounded-xl" />
              <div className="space-y-2">
                <div className="animate-skeleton-shimmer h-5 w-3/4 rounded-lg" />
                <div className="animate-skeleton-shimmer h-4 w-1/2 rounded-lg" />
              </div>
              <div className="animate-skeleton-shimmer h-10 w-full rounded-xl" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
