export default function CatalogoLoading() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#f7fcff] via-[#dff4ff] to-[#c2edff]" />

      {/* Ambient glows */}
      <div className="animate-float absolute top-20 left-0 h-[300px] w-[300px] rounded-full bg-[#079cfb] opacity-15 blur-[120px] md:h-[500px] md:w-[500px]" />
      <div
        className="animate-float absolute right-0 bottom-0 h-[250px] w-[250px] rounded-full bg-[#00e0ff] opacity-10 blur-[100px] md:h-[400px] md:w-[400px]"
        style={{ animationDelay: "1s", animationDuration: "8s" }}
      />

      <div className="relative z-10 container mx-auto px-6 pt-16 pb-16 md:px-6 lg:px-32">
        {/* Header skeleton */}
        <div className="mb-10 space-y-4">
          <div className="animate-skeleton-shimmer h-6 w-40 rounded-full" />
          <div className="animate-skeleton-shimmer h-12 w-2/3 rounded-2xl" />
          <div className="animate-skeleton-shimmer h-4 w-1/2 rounded-lg" />
        </div>

        <div className="grid gap-6 lg:grid-cols-[280px_1fr] lg:gap-8">
          {/* Filters sidebar skeleton */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 space-y-6 rounded-2xl border border-white/60 bg-white/70 p-6 shadow-[0_4px_20px_rgba(7,156,251,0.08)] backdrop-blur-sm">
              {/* Filter groups */}
              {[0, 1, 2, 3].map((group) => (
                <div key={group} className="space-y-3">
                  <div className="animate-skeleton-shimmer h-5 w-24 rounded-lg" />
                  <div className="space-y-2">
                    <div className="animate-skeleton-shimmer h-8 w-full rounded-lg" />
                    <div className="animate-skeleton-shimmer h-8 w-5/6 rounded-lg" />
                    <div className="animate-skeleton-shimmer h-8 w-3/4 rounded-lg" />
                  </div>
                </div>
              ))}
            </div>
          </aside>

          {/* Product grid skeleton */}
          <div className="space-y-4">
            {/* Toolbar */}
            <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
              <div className="animate-skeleton-shimmer h-10 w-full rounded-xl sm:w-80" />
              <div className="flex gap-3">
                <div className="animate-skeleton-shimmer h-10 w-40 rounded-xl" />
                <div className="animate-skeleton-shimmer h-10 w-24 rounded-xl lg:hidden" />
              </div>
            </div>

            {/* Grid 8 cards */}
            <div className="grid grid-cols-1 gap-4 pt-4 sm:grid-cols-2 md:gap-6 xl:grid-cols-3 2xl:grid-cols-4">
              {Array.from({ length: 8 }).map((_, i) => (
                <div
                  key={i}
                  className="space-y-4 rounded-2xl border border-white/60 bg-white/70 p-4 shadow-[0_4px_20px_rgba(7,156,251,0.08)] backdrop-blur-sm"
                >
                  <div className="animate-skeleton-shimmer aspect-[4/3] rounded-xl" />
                  <div className="space-y-2">
                    <div className="animate-skeleton-shimmer h-3 w-20 rounded-full" />
                    <div className="animate-skeleton-shimmer h-5 w-4/5 rounded-lg" />
                    <div className="animate-skeleton-shimmer h-4 w-2/3 rounded-lg" />
                  </div>
                  <div className="flex items-center justify-between pt-2">
                    <div className="animate-skeleton-shimmer h-6 w-24 rounded-lg" />
                    <div className="animate-skeleton-shimmer h-9 w-9 rounded-full" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
