import {
    createContext,
    useEffect,
    useMemo,
    useState,
    type ReactNode,
} from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
    setTheme: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextType | null>(null);

interface ThemeProviderProps {
    children: ReactNode;
}

const ThemeProvider = ({ children }: ThemeProviderProps) => {
    const [theme, setTheme] = useState<Theme>(() => {
        const savedTheme = localStorage.getItem("theme");

        if (savedTheme === "dark" || savedTheme === "light") {
            return savedTheme;
        }

        return "light";
    });

    useEffect(() => {
        document.documentElement.classList.remove("light", "dark");
        document.documentElement.classList.add(theme);

        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
    };

    const value = useMemo(
        () => ({
            theme,
            toggleTheme,
            setTheme,
        }),
        [theme]
    );

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;