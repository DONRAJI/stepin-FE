import BundleCard from "./BundleCard";

export default function BundleList() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <BundleCard />
      <BundleCard />
    </div>
  );
}
