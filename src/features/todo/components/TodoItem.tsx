import Badge from "../../../shared/components/ui/Badge";

export default function TodoItem() {
  return (
    <div className="flex items-center justify-between rounded-lg border border-slate-200 p-3">
      <div>
        <p className="font-medium">자료 정리</p>
        <p className="text-xs text-slate-500">TODO: 일정 및 태그 표시</p>
      </div>
      <Badge>대기</Badge>
    </div>
  );
}
