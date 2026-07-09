interface AuthCardProps {
    children: React.ReactNode;
};

const AuthCard = ({ children }: AuthCardProps) => {
    return (
        <div className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-10 shadow-xl">
            {children}
        </div>
    );
};

export default AuthCard;