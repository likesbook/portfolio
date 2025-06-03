// components/ui/card.tsx
import React, { type HTMLAttributes } from "react";

export function Card({
  children,
  ...props
}: { children: React.ReactNode } & HTMLAttributes<HTMLDivElement>) {
  return (
    <div className="rounded-lg border bg-white p-4 shadow" {...props}>
      {children}
    </div>
  );
}

export function CardContent({ children }: { children: React.ReactNode }) {
  return <div className="mt-2">{children}</div>;
}
