import type { Todo } from "../types";

export interface TodoStoreState {
  todos: Todo[];
}

export const todoStore: TodoStoreState = {
  todos: [],
};

// TODO: Replace with a state management solution when wiring real data.
