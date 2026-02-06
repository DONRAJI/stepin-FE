import type { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "solid" | "ghost";
}

export default function Button({
  variant = "solid",
  className = "",
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-md px-3 py-2 text-sm font-medium transition";
  const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
    solid: "bg-slate-900 text-white hover:bg-slate-800",
    ghost: "bg-transparent text-slate-700 hover:bg-slate-100",
  };

  return <button className={`${base} ${variants[variant]} ${className}`} {...props} />;
}
