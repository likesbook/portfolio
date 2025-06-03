// components/ui/input.tsx
import React from "react";

export function Input({
  value,
  onChange,
  placeholder,
}: {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}) {
  return (
    <input
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="border rounded px-3 py-2 w-full"
    />
  );
}
