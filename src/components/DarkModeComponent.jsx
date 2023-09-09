import React, { useEffect, useState } from "react"

const DarkModeComponent = () => {
  const [theme, setTheme] = useState("light") // Set the initial theme to light

  useEffect(() => {
    const selectedTheme = localStorage.getItem("selectedTheme")
    if (selectedTheme) {
      applyTheme(selectedTheme)
    }
  }, [])

  const applyTheme = (theme) => {
    document.querySelector("body").setAttribute("data-theme", theme)
    setTheme(theme) // Update the theme state
  }

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark"
    applyTheme(newTheme)
    localStorage.setItem("selectedTheme", newTheme)
  }
  return (
    <div className="dark-mode">
      <input
        className="dark-mode-input"
        type="checkbox"
        id="darkmode-toggle"
        onChange={toggleTheme}
        checked={theme === "dark"} // Use the theme state to determine checked state
      />
      <label htmlFor="darkmode-toggle">
        {theme === "dark" ? (
          <i className="ri-sun-line"></i> // Use sun icon for dark mode
        ) : (
          <i className="ri-moon-line"></i> // Use moon icon for light mode
        )}
      </label>
    </div>
  )
}

export default DarkModeComponent
