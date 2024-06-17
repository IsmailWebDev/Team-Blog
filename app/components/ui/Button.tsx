"use client";

interface ButtonProps {
  children: String;
  className?: String;
  onClick?: () => void;
}

export default function Button({ children, className, onClick }: ButtonProps) {
  return (
    <button
      className={`rounded px-11 py-[11px] ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
