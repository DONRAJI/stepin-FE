import ActivityHeatmap from "../features/dashboard/components/ActivityHeatmap";
import ComparisonBar from "../features/dashboard/components/ComparisonBar";
import ProgressSection from "../features/dashboard/components/ProgressSection";

export default function DashboardPage() {
  return (
    <section className="space-y-6 p-6">
      <header className="space-y-1">
        <h1 className="text-2xl font-semibold">대시보드</h1>
        <p className="text-sm text-slate-600">
          나의 진행 상황을 한눈에 확인하세요.
        </p>
      </header>
      <div className="grid gap-4 lg:grid-cols-2">
        <ProgressSection />
        <ComparisonBar />
      </div>
      <ActivityHeatmap />
    </section>
  );
}
