import Button from "@/components/ui/Button/Button";
import Input from "@/components/ui/Input/Input";
import {
    Eye,
    EyeOff,
    GitBranch,
    Lock,
    Mail,
    User,
} from "lucide-react";
import { useState } from "react";

const RegisterForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    return (
        <div className="rounded-3xl border border-slate-200 bg-white px-8 py-7 shadow-lg">

            {/* Logo */}

            <div className="mb-7 flex items-center gap-4">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 text-xl font-bold text-white">
                    PF
                </div>

                <div>

                    <h1 className="text-xl font-bold text-slate-900">
                        ProjectFlow AI
                    </h1>

                    <p className="text-sm text-slate-500">
                        AI Workspace
                    </p>

                </div>

            </div>

            {/* Heading */}

            <h2 className="text-3xl font-bold text-slate-900">
                Create Account
            </h2>

            <p className="mt-2 text-sm text-slate-500">
                Join ProjectFlow AI and start managing projects smarter.
            </p>

            {/* Inputs */}

            <div className="mt-6 space-y-4">

                <Input
                    label="Full Name"
                    placeholder="Aryan Dewangan"
                    leftIcon={<User size={18} />}
                />

                <Input
                    label="Email"
                    type="email"
                    placeholder="aryan@example.com"
                    leftIcon={<Mail size={18} />}
                />

                <Input
                    label="Password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    leftIcon={<Lock size={18} />}
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

                <Input
                    label="Confirm Password"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="••••••••"
                    leftIcon={<Lock size={18} />}
                    rightIcon={
                        <button
                            type="button"
                            onClick={() =>
                                setShowConfirmPassword(!showConfirmPassword)
                            }
                        >
                            {showConfirmPassword ? (
                                <EyeOff size={18} />
                            ) : (
                                <Eye size={18} />
                            )}
                        </button>
                    }
                />

            </div>

            {/* Terms */}

            <label className="mt-5 flex items-start gap-3 text-sm text-slate-600">

                <input
                    type="checkbox"
                    className="mt-1 h-4 w-4 accent-cyan-600"
                />

                <span>
                    I agree to the{" "}
                    <button className="font-semibold text-cyan-600 hover:text-cyan-700">
                        Terms
                    </button>{" "}
                    and{" "}
                    <button className="font-semibold text-cyan-600 hover:text-cyan-700">
                        Privacy Policy
                    </button>
                </span>

            </label>

            {/* Button */}

            <Button
                fullWidth
                className="mt-6"
            >
                Create Account
            </Button>

            {/* Divider */}

            <div className="my-6 flex items-center">

                <div className="h-px flex-1 bg-slate-200" />

                <span className="mx-4 text-xs uppercase tracking-[0.25em] text-slate-400">
                    OR
                </span>

                <div className="h-px flex-1 bg-slate-200" />

            </div>

            {/* Social */}

            <div className="grid grid-cols-2 gap-4">

                <Button variant="outline">

                    <img
                        src="https://www.svgrepo.com/show/475656/google-color.svg"
                        alt="Google"
                        className="mr-2 h-5 w-5"
                    />

                    Google

                </Button>

                <Button variant="outline">

                    <GitBranch
                        size={18}
                        className="mr-2"
                    />

                    GitHub

                </Button>

            </div>

            {/* Footer */}

            <div className="mt-6 text-center text-sm text-slate-500">

                Already have an account?{" "}

                <button className="font-semibold text-cyan-600 hover:text-cyan-700">
                    Sign In
                </button>

            </div>

        </div>
    );
};

export default RegisterForm;