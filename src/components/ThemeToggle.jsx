import { useState } from "react";

function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div
      style={{
        backgroundColor: darkMode ? "#222" : "#f5f5f5",
        color: darkMode ? "white" : "#222",
        padding: "40px",
        borderRadius: "10px",
        textAlign: "center",
      }}
    >
      <h2>Welcome to My React Page</h2>

      <p>
        This is a simple landing page created using React.
      </p>

      <button onClick={toggleTheme}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  );
}

export default ThemeToggle;