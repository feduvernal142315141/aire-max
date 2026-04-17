export default function ProductDetailLoading() {
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

      {/* Breadcrumb */}
      <div className="relative z-10 border-b border-white/40 bg-white/30 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-2">
            <div className="animate-skeleton-shimmer h-4 w-14 rounded-lg" />
            <div className="animate-skeleton-shimmer h-4 w-3 rounded-full" />
            <div className="animate-skeleton-shimmer h-4 w-20 rounded-lg" />
            <div className="animate-skeleton-shimmer h-4 w-3 rounded-full" />
            <div className="animate-skeleton-shimmer h-4 w-36 rounded-lg" />
          </div>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8 md:px-6 lg:px-16">
        {/* Gallery + Info */}
        <div className="mb-16 grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Gallery */}
          <div className="space-y-4">
            <div className="animate-skeleton-shimmer aspect-square rounded-3xl border border-white/60 bg-white/70 shadow-[0_8px_32px_rgba(7,156,251,0.15)] backdrop-blur-sm" />
            <div className="grid grid-cols-4 gap-3">
              {[0, 1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="animate-skeleton-shimmer aspect-square rounded-xl border border-white/60 bg-white/70 backdrop-blur-sm"
                />
              ))}
            </div>
          </div>

          {/* Info */}
          <div className="space-y-6">
            <div className="space-y-3">
              <div className="animate-skeleton-shimmer h-6 w-28 rounded-full" />
              <div className="animate-skeleton-shimmer h-10 w-full rounded-2xl" />
              <div className="animate-skeleton-shimmer h-10 w-3/4 rounded-2xl" />
            </div>

            <div className="flex gap-2">
              <div className="animate-skeleton-shimmer h-7 w-20 rounded-full" />
              <div className="animate-skeleton-shimmer h-7 w-24 rounded-full" />
              <div className="animate-skeleton-shimmer h-7 w-16 rounded-full" />
            </div>

            <div className="space-y-2">
              <div className="animate-skeleton-shimmer h-4 w-full rounded-lg" />
              <div className="animate-skeleton-shimmer h-4 w-11/12 rounded-lg" />
              <div className="animate-skeleton-shimmer h-4 w-4/5 rounded-lg" />
            </div>

            {/* Price */}
            <div className="space-y-3 rounded-2xl border border-white/60 bg-white/70 p-6 shadow-[0_4px_20px_rgba(7,156,251,0.08)] backdrop-blur-sm">
              <div className="animate-skeleton-shimmer h-4 w-20 rounded-lg" />
              <div className="animate-skeleton-shimmer h-10 w-48 rounded-2xl" />
              <div className="animate-skeleton-shimmer h-4 w-32 rounded-lg" />
            </div>

            {/* CTAs */}
            <div className="flex flex-col gap-3 sm:flex-row">
              <div className="animate-skeleton-shimmer h-14 flex-1 rounded-2xl" />
              <div className="animate-skeleton-shimmer h-14 flex-1 rounded-2xl" />
            </div>
          </div>
        </div>

        {/* Specs */}
        <div className="mb-12 space-y-5 rounded-2xl border border-white/60 bg-white/70 p-6 shadow-[0_4px_20px_rgba(7,156,251,0.08)] backdrop-blur-sm md:p-8">
          <div className="animate-skeleton-shimmer h-8 w-56 rounded-2xl" />
          <div className="grid grid-cols-1 gap-x-8 gap-y-3 md:grid-cols-2">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="flex justify-between gap-4 border-b border-white/60 pb-2">
                <div className="animate-skeleton-shimmer h-4 w-32 rounded-lg" />
                <div className="animate-skeleton-shimmer h-4 w-24 rounded-lg" />
              </div>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="space-y-5 rounded-2xl border border-white/60 bg-white/70 p-6 shadow-[0_4px_20px_rgba(7,156,251,0.08)] backdrop-blur-sm md:p-8">
          <div className="animate-skeleton-shimmer h-8 w-48 rounded-2xl" />
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="animate-skeleton-shimmer h-8 w-8 shrink-0 rounded-full" />
                <div className="animate-skeleton-shimmer h-4 flex-1 rounded-lg" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
