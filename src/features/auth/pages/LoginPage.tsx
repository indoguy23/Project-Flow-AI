import AuthCard from "@/components/auth/AuthCard";
import AuthLayout from "../components/AuthLayout";
import LoginForm from "../components/LoginForm";

const LoginPage = () => {
    return (
        <AuthLayout>
            <AuthCard>
                <LoginForm />
            </AuthCard>
        </AuthLayout>
    );
};

export default LoginPage;