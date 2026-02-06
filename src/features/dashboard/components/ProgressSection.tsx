import Card from "../../../shared/components/ui/Card";
import ProgressBar from "../../../shared/components/ui/ProgressBar";

export default function ProgressSection() {
  return (
    <Card>
      <div className="space-y-3">
        <h2 className="text-lg font-semibold">진행률</h2>
        <ProgressBar value={45} />
        <p className="text-sm text-slate-600">
          TODO: 실시간 진행률 데이터를 연결하세요.
        </p>
      </div>
    </Card>
  );
}
