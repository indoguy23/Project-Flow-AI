import type { ReactNode } from "react";
import BrandPanel from "./BrandPanel";

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <main className="min-h-screen bg-slate-50">
      <div className="grid min-h-screen lg:grid-cols-[42%_58%]">
        {/* Left Side */}

        <section className="flex items-center justify-center px-8 py-8">
          <div className="w-full max-w-[440px]">
            {children}
          </div>
        </section>

        {/* Right Side */}

        <BrandPanel />
      </div>
    </main>
  );
};

export default AuthLayout;