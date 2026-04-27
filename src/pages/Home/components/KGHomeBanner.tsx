function KGHomeBanner() {
  return (
    <section className="grid gap-10 md:grid-cols-2 md:items-center">
      <div className="space-y-4">
        <h2 className="text-4xl font-medium tracking-tight text-black sm:text-5xl">
          Knowledge Graph
        </h2>
        <p className="max-w-3xl text-base font-normal leading-7 text-gray-500 sm:text-lg">
          A kickstarter place to get to know more about the Knowledge Graph buzz you have
          probably heard about recently, with clear starting points and practical context.
        </p>
      </div>

      <div className="rounded-xl border border-dashed border-gray-300 bg-gray-50 p-6 text-sm text-gray-600">
        Animated SVG area reserved. Replace this placeholder with the final animation.
      </div>
    </section>
  );
}

export default KGHomeBanner;
