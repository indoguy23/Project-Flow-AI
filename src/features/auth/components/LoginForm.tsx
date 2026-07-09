import Button from "@/components/ui/Button/Button";
import Input from "@/components/ui/Input/Input";
import { Eye, EyeOff, GitBranch, Mail } from "lucide-react";
import { useState } from "react";

const LoginForm = () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="mx-auto w-full max-w-[360px] rounded-2xl border border-slate-200 bg-white px-5 py-5 shadow-lg">

            {/* Logo */}

            <div className="mb-4 flex items-center gap-3">

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 text-base font-bold text-white">
                    PF
                </div>

                <div>

                    <h1 className="text-lg font-bold text-slate-900">
                        ProjectFlow AI
                    </h1>

                    <p className="text-xs text-slate-500">
                        AI Workspace
                    </p>

                </div>

            </div>

            {/* Heading */}

            <h2 className="text-2xl font-bold text-slate-900">
                Welcome Back 👋
            </h2>

            <p className="mt-2 text-sm text-slate-500">
                Sign in to continue managing your projects.
            </p>

            {/* Form */}

            <div className="mt-5 space-y-3">

                <Input
                    label="Email"
                    type="email"
                    placeholder="john@example.com"
                    leftIcon={<Mail size={18} />}
                    className="h-11"
                />

                <Input
                    label="Password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    className="h-11"
                    rightIcon={
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? (
                                <EyeOff size={18} />
                            ) : (
                                <Eye size={18} />
                            )}
                        </button>
                    }
                />

            </div>

            {/* Options */}

            <div className="mt-3 flex items-center justify-between">

                <label className="flex items-center gap-2 text-sm text-slate-600">

                    <input
                        type="checkbox"
                        className="h-4 w-4 accent-cyan-600"
                    />

                    Remember me

                </label>

                <button className="text-sm font-medium text-cyan-600 hover:text-cyan-700">
                    Forgot password?
                </button>

            </div>

            {/* Button */}

            <Button fullWidth className="mt-5 h-11">
                Sign In
            </Button>

            {/* Divider */}

            <div className="my-5 flex items-center">

                <div className="h-px flex-1 bg-slate-200" />

                <span className="mx-4 text-xs uppercase tracking-[0.25em] text-slate-400">
                    OR
                </span>

                <div className="h-px flex-1 bg-slate-200" />

            </div>

            {/* Social */}

            <div className="grid grid-cols-2 gap-3">

                <Button variant="outline" className="h-11 px-3">

                    <img
                        src="https://www.svgrepo.com/show/475656/google-color.svg"
                        alt="Google"
                        className="mr-2 h-5 w-5"
                    />

                    Google

                </Button>

                <Button variant="outline" className="h-11 px-3">

                    <GitBranch
                        size={18}
                        className="mr-2"
                    />

                    GitHub

                </Button>

            </div>

            {/* Footer */}

            <div className="mt-5 text-center text-sm text-slate-500">

                Don't have an account?{" "}

                <button className="font-semibold text-cyan-600 hover:text-cyan-700">
                    Create Account
                </button>

            </div>

        </div>
    );
};

export default LoginForm;
