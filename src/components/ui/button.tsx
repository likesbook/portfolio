// components/ui/button.tsx
import React from "react";

export function Button({
  children,
  onClick,
  type = "button",
}: {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition"
    >
      {children}
    </button>
  );
}
