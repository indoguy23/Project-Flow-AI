import clsx from "clsx";
import type { InputHTMLAttributes, ReactNode } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
    error?: string;
}

const Input = ({
    leftIcon,
    rightIcon,
    label,
    error,
    className,
    ...props
}: InputProps) => {
    return (
        <div className="w-full">
            {label && (
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                    {label}
                </label>
            )}

            <div className="relative">
                {leftIcon && (
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                        {leftIcon}
                    </div>
                )}

                <input
                    {...props}
                    className={clsx(
                        "h-12 w-full rounded-xl border border-slate-300 bg-white outline-none transition-all duration-300",
                        leftIcon ? "pl-12 pr-4" : "px-4",
                        rightIcon ? "pr-12" : "",
                        "focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10",
                        error &&
                        "border-red-500 focus:border-red-500 focus:ring-red-100",
                        className
                    )}
                   
                />

                {rightIcon && (
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">
                        {rightIcon}
                    </div>
                )}
            </div>

            {error && (
                <p className="mt-2 text-sm text-red-500">
                    {error}
                </p>
            )}
        </div>
    );
};

export default Input;