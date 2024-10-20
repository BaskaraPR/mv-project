import { cva, type VariantProps } from "class-variance-authority";
import { default as NextLink, LinkProps as NextLinkProps } from "next/link";
import {
  ComponentPropsWithoutRef,
  HTMLAttributeAnchorTarget,
  MouseEventHandler,
  ReactNode,
} from "react";

import cn from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center gap-2 rounded-full transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-purple-400", // Added focus ring
  {
    variants: {
      variant: {
        primary:
          "bg-purple-600 text-white px-6 py-2 hover:bg-purple-700 hover:scale-105 shadow-sm",
        secondary:
          "bg-white text-gray-700 px-4 py-2 hover:bg-gray-100 hover:scale-105 border border-gray-300",
        tertiary:
          "bg-transparent hover:text-purple-500 text-black px-3 py-2 disabled:text-neutral-500",
        quartiary:
          "bg-white px-6 py-3 border border-neutral-100 text-black hover:border-purple-400 hover:bg-purple-50 hover:text-purple-500 rounded-full disabled:bg-neutral-300",
      },
      size: {
        small: "text-sm px-4 py-2",
        medium: "text-base px-6 py-3",
        large: "text-lg px-8 py-4",
      },
    },
    defaultVariants: {
      size: "medium",
      variant: "primary",
    },
  }
);

interface LinkButtonProps
  extends NextLinkProps,
    VariantProps<typeof buttonVariants> {
  children?: ReactNode;
  href: string;
  scroll?: boolean;
  target?: HTMLAttributeAnchorTarget;
  className?: string;
  download?: boolean;
  disabledProgressBar?: boolean;
}

interface ButtonProps
  extends ComponentPropsWithoutRef<"button">,
    VariantProps<typeof buttonVariants> {
  children?: ReactNode;
  type?: "button" | "reset" | "submit";
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
}

export default function Link({
  children,
  href,
  variant,
  className,
  target,
  scroll,
  download,
  disabledProgressBar,
  ...props
}: Readonly<LinkButtonProps>) {
  return (
    <NextLink
      href={href}
      className={cn(buttonVariants({ variant }), className)}
      target={target}
      scroll={scroll}
      download={download}
      data-disable-nprogress={disabledProgressBar}
      {...props}
    >
      {children}
    </NextLink>
  );
}

export function Button({
  children,
  type,
  onClick,
  className,
  variant,
  ...props
}: Readonly<ButtonProps>) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={cn(buttonVariants({ variant }), className)}
      {...props}
    >
      {children}
    </button>
  );
}
