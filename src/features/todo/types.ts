export type TodoStatus = "pending" | "in_progress" | "done";
export type TodoCategory = "study" | "practice" | "review" | "other";

export interface Todo {
  id: string;
  title: string;
  status: TodoStatus;
  category: TodoCategory;
  dueDate?: string;
}
