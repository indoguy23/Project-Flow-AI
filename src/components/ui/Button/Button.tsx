import clsx from "clsx";
import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant?: "primary" | "outline";
    fullWidth?: boolean;
}

const Button = ({
    children,
    variant = "primary",
    fullWidth = false,
    className,
    ...props
}: ButtonProps) => {
    return (
        <button
            className={clsx(
                "inline-flex h-12 items-center justify-center rounded-xl px-5 text-sm font-semibold transition-all duration-300 focus:outline-none focus:ring-4 disabled:cursor-not-allowed disabled:opacity-60",

                {
                    "bg - gradient - to - r from- cyan - 500 to - blue - 600 text - white shadow - lg hover: -translate - y - 0.5 hover: shadow - xl":
                variant === "primary",

                "border border-slate-300 bg-white text-slate-700 hover:bg-slate-50 hover:border-slate-400 focus:ring-slate-200":
                variant === "outline",

                "w-full": fullWidth,
                },

            className
            )
}
{...props }
        >
    { children }
        </button >
    );
};

export default Button;