import { NavLink } from "react-router-dom";

const links = [
  { label: "온보딩", to: "/onboarding" },
  { label: "번들", to: "/bundles" },
  { label: "나의 계획", to: "/plan" },
  { label: "대시보드", to: "/dashboard" },
];

export default function Sidebar() {
  return (
    <aside className="hidden w-52 shrink-0 flex-col gap-2 rounded-2xl bg-white p-4 shadow-sm md:flex">
      <nav className="space-y-1">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              `block rounded-lg px-3 py-2 text-sm font-medium transition ${
                isActive
                  ? "bg-slate-900 text-white"
                  : "text-slate-600 hover:bg-slate-100"
              }`
            }
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
