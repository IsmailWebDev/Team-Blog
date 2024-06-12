interface ButtonProps {
  children: String;
  className: String;
}
export default function Button({ children, className }: ButtonProps) {
  return (
    <button className={`rounded px-11 py-[11px] ${className}`}>
      {children}
    </button>
  );
}
