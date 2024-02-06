import { useEffect, useState } from "react";

function useColorScheme() {

    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        if (isDark) {
            // document.body.classList.add("dark");
            document.body.setAttribute('data-theme', 'dark');
        } else {
            // document.body.classList.remove("dark");
            document.body.setAttribute('data-theme', 'light');
        }
    }, [isDark]);

    return {
        isDark: isDark,
        setIsDark,
    };
}

export const DarkModeToggle = () => {
    const { isDark, setIsDark } = useColorScheme();

    return (
        <div className="container-switch">
            <span>Light</span>
            <label className="switch">
                <input type="checkbox"
                       onChange={({target}) => setIsDark(target.checked)}
                       checked={isDark}/>
                <span className="slider"></span>
            </label>
            <span>Dark</span>
        </div>

    );
};