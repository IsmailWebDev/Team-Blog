import Image from "next/image";

interface InputProps {
  className: string;
  placeholder: string;
  type: string;
  icon: string;
}
export default function Input({
  className,
  placeholder,
  type,
  icon,
}: InputProps) {
  return (
    <form action="#" className="flex max-sm:w-input lg:w-[350px]">
      <input
        placeholder={placeholder}
        type={type}
        className={`w-full rounded px-4 py-3 ${className}`}
      />
      <Image
        className="-translate-x-10"
        src={icon}
        alt="Arrow forward"
        width={15}
        height={15}
      />
    </form>
  );
}
