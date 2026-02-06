import type { ID } from "./common";

export interface User {
  id: ID;
  name: string;
  email: string;
}

export interface Company {
  id: ID;
  name: string;
  industry?: string;
}

export interface Job {
  id: ID;
  title: string;
  level?: "junior" | "mid" | "senior";
}

export interface PlanSummary {
  totalTodos: number;
  completedTodos: number;
}
