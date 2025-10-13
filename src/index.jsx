import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"
import { ThemeProvider } from "react-hook-theme"

// Clear any existing theme preference to ensure light theme is default
if (typeof window !== 'undefined') {
  localStorage.removeItem('theme')
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <ThemeProvider
      options={{
        theme: "light",
        save: false,
        defaultTheme: "light",
      }}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
)
