import FilterSidebar from "../features/todo/components/FilterSidebar";
import TodoList from "../features/todo/components/TodoList";

export default function MyPlanPage() {
  return (
    <section className="grid gap-6 p-6 lg:grid-cols-[240px_1fr]">
      <FilterSidebar />
      <div className="space-y-4">
        <h1 className="text-2xl font-semibold">나의 계획</h1>
        <TodoList />
      </div>
    </section>
  );
}
