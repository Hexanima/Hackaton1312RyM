import { ReactNode } from "react";

export function Button({
  className,
  children,
  onClick,
}: {
  className?: string;
  children?: ReactNode;
  onClick?: () => void;
}) {
  return (
    <button className={`p-2 rounded-xl ${className || ""}`} onClick={onClick}>
      {children}
    </button>
  );
}
