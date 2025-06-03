import { useEffect, useRef, useState } from "react";

export function BookCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  const [open, setOpen] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dialogRef.current && !dialogRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <div style={{ position: "relative", margin: "1rem" }}>
      <div
        onClick={() => setOpen(true)}
        style={{
          width: "100px",
          height: "140px",
          background: "#ccc",
          cursor: "pointer",
          margin: "auto",
        }}
      />
      <p>{title}</p>

      {open && (
        <div
          onClick={() => setOpen(true)}
          style={{
            width: "100px",
            height: "140px",
            background: "#ccc",
            cursor: "pointer",
            margin: "auto",
          }}
        >
          <div
            ref={dialogRef}
            style={{
              position: "absolute",
              top: "0",
              left: "110px",
              background: "white",
              border: "1px solid #aaa",
              padding: "10px",
              width: "200px",
              zIndex: 1000,
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            }}
          >
            {description}
          </div>
        </div>
      )}
    </div>
  );
}
