// components/ui/tabs.tsx
import React, { useState, createContext, useContext } from "react";

const TabsContext = createContext<{
  value: string;
  setValue: (val: string) => void;
} | null>(null);

export function Tabs({
  defaultValue,
  children,
}: {
  defaultValue: string;
  children: React.ReactNode;
}) {
  const [value, setValue] = useState(defaultValue);
  return (
    <TabsContext.Provider value={{ value, setValue }}>
      <div>{children}</div>
    </TabsContext.Provider>
  );
}

export function TabsList({ children }: { children: React.ReactNode }) {
  return <div className="flex space-x-2">{children}</div>;
}

export function TabsTrigger({
  value,
  children,
}: {
  value: string;
  children: React.ReactNode;
}) {
  const context = useContext(TabsContext);
  if (!context) throw new Error("TabsTrigger must be inside Tabs");
  const { value: current, setValue } = context;

  const isActive = current === value;

  return (
    <button
      onClick={() => setValue(value)}
      className={`px-4 py-2 rounded ${
        isActive ? "bg-black text-white" : "bg-gray-100"
      }`}
    >
      {children}
    </button>
  );
}
