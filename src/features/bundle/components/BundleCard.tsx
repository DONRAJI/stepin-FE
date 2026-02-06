import Badge from "../../../shared/components/ui/Badge";
import Card from "../../../shared/components/ui/Card";

export default function BundleCard() {
  return (
    <Card>
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">신규 번들</h3>
          <Badge>샘플</Badge>
        </div>
        <p className="text-sm text-slate-600">
          TODO: 번들 설명과 진행률을 연결하세요.
        </p>
      </div>
    </Card>
  );
}
