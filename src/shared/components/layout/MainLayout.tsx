import { Outlet } from "react-router-dom";

import Header from "./Header";
import Sidebar from "./Sidebar";

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Header />
      <div className="mx-auto flex w-full max-w-6xl gap-6 px-6 py-6">
        <Sidebar />
        <main className="min-w-0 flex-1 rounded-2xl bg-white shadow-sm">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
