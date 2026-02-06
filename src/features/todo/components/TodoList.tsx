import Card from "../../../shared/components/ui/Card";
import TodoItem from "./TodoItem";

export default function TodoList() {
  return (
    <Card>
      <div className="space-y-3">
        <h2 className="text-lg font-semibold">할 일</h2>
        <TodoItem />
        <TodoItem />
      </div>
    </Card>
  );
}
