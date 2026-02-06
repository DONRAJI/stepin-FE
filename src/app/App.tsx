import { RouterProvider } from "react-router-dom";

import router from "./routes";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* TODO: Add app-level providers (theme, query, auth) here. */}
      <RouterProvider router={router} />
    </div>
  );
}
