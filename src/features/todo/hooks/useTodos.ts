import type { Todo } from "../types";

export function useTodos() {
  const todos: Todo[] = [];

  return {
    todos,
    isLoading: false,
  };
}
