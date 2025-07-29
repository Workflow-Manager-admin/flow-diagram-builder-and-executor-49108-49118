import React from "react";

// PUBLIC_INTERFACE
/**
 * Displays the generated JavaScript code from the diagram,
 * allows running code, and displays output or errors.
 */
function CodeSidePanel({
  code,
  output,
  onRun,
  onSave,
  onLoad,
  onClear,
  isRunning,
}) {
  return (
    <aside
      style={{
        width: 400,
        background: "#f4f6f7",
        borderLeft: "1px solid #e9ecef",
        minHeight: "calc(100vh - 56px)",
        display: "flex",
        flexDirection: "column",
        padding: 20,
        boxSizing: "border-box",
        gap: 8,
      }}
      data-testid="code-side-panel"
    >
      <div style={{ fontWeight: 600, color: "#e67e22", fontSize: 17 }}>
        JS Code Preview
      </div>
      <pre
        style={{
          background: "#fff",
          border: "1px solid #e67e22",
          borderRadius: 6,
          minHeight: 180,
          padding: 12,
          fontSize: 14,
          color: "#222",
          fontFamily: "Fira Mono, monospace",
          overflowX: "auto",
        }}
        data-testid="code-preview"
      >
        {code || "// Generated JavaScript code will appear here."}
      </pre>
      <div style={{ display: "flex", gap: 8, margin: "8px 0 6px" }}>
        <button
          style={{
            background: "#2ecc71",
            color: "#fff",
            border: "none",
            borderRadius: 7,
            padding: "7px 16px",
            fontWeight: 600,
            cursor: isRunning ? "not-allowed" : "pointer",
            opacity: isRunning ? 0.6 : 1,
            transition: "opacity 0.2s",
          }}
          onClick={onRun}
          disabled={isRunning}
        >
          ▶ Run
        </button>
        <button
          style={{
            background: "#e67e22",
            color: "#fff",
            border: "none",
            borderRadius: 7,
            padding: "7px 14px",
            fontWeight: 500,
            cursor: "pointer",
          }}
          onClick={onSave}
        >
          💾 Save
        </button>
        <button
          style={{
            background: "#fff",
            color: "#e67e22",
            border: "1.5px solid #e67e22",
            borderRadius: 7,
            padding: "7px 14px",
            fontWeight: 500,
            cursor: "pointer",
          }}
          onClick={onLoad}
        >
          ⭳ Load
        </button>
        <button
          style={{
            background: "#fff",
            color: "#e74c3c",
            border: "1.5px solid #e74c3c",
            borderRadius: 7,
            padding: "7px 14px",
            fontWeight: 500,
            cursor: "pointer",
          }}
          onClick={onClear}
        >
          ✕ Clear
        </button>
      </div>
      <div style={{ fontWeight: 600, color: "#3498db", fontSize: 16, marginTop: 7 }}>
        Output
      </div>
      <div
        style={{
          background: "#fff",
          border: "1px solid #3498db",
          minHeight: 48,
          borderRadius: 6,
          padding: 10,
          fontSize: 13,
          color: "#444",
          fontFamily: "Fira Mono, monospace",
          wordWrap: "break-word",
        }}
        data-testid="code-execution-output"
      >
        {output || "Execution result will be shown here."}
      </div>
    </aside>
  );
}

export default CodeSidePanel;
