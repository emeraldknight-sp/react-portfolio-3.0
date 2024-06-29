import clsx from "clsx";
import { Link } from "react-router-dom";
import { LinkButtonProps } from "../vite-env";

export function LinkButton({
  children,
  variant = "primary",
  size = "md",
  onClick,
  ...rest
}: LinkButtonProps) {
  return (
    <Link
      role="button"
      className={clsx(
        "max-w-fit font-bold font-mono text-gray-900 text-center outline-none transition-all duration-300 rounded after:content-['/>']",
        size === "md" ? "px-5 py-3 text-md" : "px-10 py-5 text-xl",
        variant === "primary"
          ? "bg-emerald-400 hover:bg-white"
          : "bg-white hover:bg-emerald-400",
      )}
      onClick={onClick}
      {...rest}
    >
      {children}
    </Link>
  );
}
