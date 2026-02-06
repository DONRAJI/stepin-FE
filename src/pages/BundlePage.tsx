import BundleList from "../features/bundle/components/BundleList";

export default function BundlePage() {
  return (
    <section className="space-y-6 p-6">
      <header className="space-y-1">
        <h1 className="text-2xl font-semibold">번들</h1>
        <p className="text-sm text-slate-600">관심 번들을 빠르게 살펴보세요.</p>
      </header>
      <BundleList />
    </section>
  );
}
