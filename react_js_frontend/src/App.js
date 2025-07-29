import React, { useState, useEffect } from "react";
import "./App.css";
import TopNavBar from "./components/TopNavBar";
import ToolsPanel from "./components/ToolsPanel";
import DiagramCanvas from "./components/DiagramCanvas";
import CodeSidePanel from "./components/CodeSidePanel";

// PUBLIC_INTERFACE
/**
 * Root app component.
 * Manages theme, state for selected tool, JS code, code execution output; and renders main UI layout.
 */
function App() {
  const [theme, setTheme] = useState("light");
  const [selectedTool, setSelectedTool] = useState("select");
  const [code, setCode] = useState("");
  const [output, setOutput] = useState("");
  const [isRunning, setIsRunning] = useState(false);

  // Effect to apply theme to document element (used for theme toggling)
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  // PUBLIC_INTERFACE
  /**
   * Handler to toggle the app theme between light and dark.
   */
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  // Placeholder: when run is clicked, execute JS code in a sandboxed way (minimal for now)
  // PUBLIC_INTERFACE
  const handleRun = () => {
    setIsRunning(true);
    setTimeout(() => {
      try {
        // eslint-disable-next-line no-eval
        // DO NOT use eval for anything sensitive! Only for demo (sandboxing not implemented yet)
        // Will improve with true sandboxing; for now show result or error
        // NOTE: This only runs synchronous code and is for demo use only
        // In the real product, consider running code in a Worker.
        // For now, use a dummy code result
        // eslint-disable-next-line no-eval
        // Output last expression's value, or undefined
        // Here just simulate by returning OK
        // In interim, just output 'Executed!' if code is set.
        let result = code
          ? String(eval(code))
          : "No code to execute.";
        setOutput(result);
      } catch (err) {
        setOutput(
          "[Execution Error] " + (err && err.message ? err.message : String(err))
        );
      }
      setIsRunning(false);
    }, 200);
  };

  // PUBLIC_INTERFACE
  const handleSave = () => {
    // Save diagram/code state to localStorage
    localStorage.setItem(
      "diagram-app-saved",
      JSON.stringify({
        code,
        // can add diagram data here in the future
      })
    );
    setOutput("Diagram and code saved locally!");
  };

  // PUBLIC_INTERFACE
  const handleLoad = () => {
    // Restore from localStorage
    const saved = localStorage.getItem("diagram-app-saved");
    if (saved) {
      const parsed = JSON.parse(saved);
      setCode(parsed.code || "");
      setOutput("Loaded saved code.");
      // If/when diagram state is implemented, add restoration here
    } else {
      setOutput("No saved diagram/code found.");
    }
  };

  // PUBLIC_INTERFACE
  const handleClear = () => {
    setCode("");
    setOutput("");
    // When diagram data is implemented, clear that too
  };

  return (
    <div className="App" style={{ minHeight: "100vh", background: "var(--bg-primary)" }}>
      {/* Top Navbar */}
      <div style={{ position: "fixed", width: "100%", top: 0, left: 0, zIndex: 10 }}>
        <TopNavBar />
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
        >
          {theme === "light" ? "🌙 Dark" : "☀️ Light"}
        </button>
      </div>
      {/* Main layout below navbar */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          paddingTop: 56,
          minHeight: "100vh",
        }}
      >
        {/* Left tools panel */}
        <ToolsPanel onSelectTool={setSelectedTool} selectedTool={selectedTool} />
        {/* Center canvas */}
        <DiagramCanvas>{/* Diagram elements will go here */}</DiagramCanvas>
        {/* Right code/output panel */}
        <CodeSidePanel
          code={code}
          output={output}
          onRun={handleRun}
          onSave={handleSave}
          onLoad={handleLoad}
          onClear={handleClear}
          isRunning={isRunning}
        />
      </div>
    </div>
  );
}

export default App;
