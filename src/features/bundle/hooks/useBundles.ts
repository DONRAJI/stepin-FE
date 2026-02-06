import type { Bundle } from "../types";

export function useBundles() {
  const bundles: Bundle[] = [];

  return {
    bundles,
    isLoading: false,
  };
}
