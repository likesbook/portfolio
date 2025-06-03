import { useEffect, useRef } from "react";

type Props = {
  title: string;
  description: string;
  imageUrl: string;
  onClose: () => void;
};

export function BookModal({ title, description, imageUrl, onClose }: Props) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  return (
    <div style={styles.overlay}>
      <div ref={modalRef} style={styles.modal}>
        <img src={imageUrl} alt={title} style={styles.image} />
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}

const styles = {
  overlay: {
    position: "fixed" as const,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 999,
  },
  modal: {
    background: "white",
    padding: "2rem",
    borderRadius: "8px",
    width: "90%",
    maxWidth: "500px",
    textAlign: "center" as const,
    boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
  },
  image: {
    width: "100%",
    height: "auto",
    marginBottom: "1rem",
  },
};
