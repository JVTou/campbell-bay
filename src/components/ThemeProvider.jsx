import { ThemeProvider } from "react-hook-theme";
import { useEffect } from "react";

function ThemeChooser() {
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", "aqua");
  }, []);

  return (
    <ThemeProvider
      defaultTheme="aqua"
      themes={["aqua"]}
    >
      <div className="min-h-screen flex items-center justify-center">
        {/* Theme is fixed to aqua, no switcher needed */}
      </div>
    </ThemeProvider>
  );
}

export default ThemeChooser;
