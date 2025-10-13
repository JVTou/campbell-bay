import { ThemeProvider } from "react-hook-theme";
import ThemeSwitcher from "./ThemeSwitcher";

function ThemeChooser() {
  return (
    <ThemeProvider
      defaultTheme="light"
      themes={[
        "light",
        "dark",
        "cupcake",
        "bumblebee",
        "emerald",
        "corporate",
        "synthwave",
        "retro",
        "cyberpunk",
        "valentine",
        "halloween",
        "garden",
        "forest",
        "aqua",
        "lofi",
        "pastel",
        "fantasy",
        "wireframe",
        "black",
        "luxury",
        "dracula",
        "cmyk",
        "autumn",
        "business",
        "acid",
        "lemonade",
        "night",
        "coffee",
        "winter",
        "dim",
        "nord",
        "sunset",
      ]}
    >
      <div className="min-h-screen flex items-center justify-center">
        <ThemeSwitcher />
      </div>
    </ThemeProvider>
  );
}

export default ThemeChooser;
