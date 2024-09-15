import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import Link, { LinkProps } from "next/link";

type Props = LinkProps & {
  className?: string;
  children: ReactNode;
};

export function NavigationItem({ className, ...rest }: Props) {
  return (
    <li
      className={cn(
        "text-gray-500 hover:text-gray-700 transition-all duration-150",
        className
      )}
    >
      <Link {...rest} />
    </li>
  );
}
