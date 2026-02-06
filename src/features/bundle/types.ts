export interface BundleTodo {
  id: string;
  title: string;
  isCompleted: boolean;
}

export interface Bundle {
  id: string;
  title: string;
  description?: string;
  todos: BundleTodo[];
}
