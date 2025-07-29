import React from "react";

// PUBLIC_INTERFACE
/**
 * Panel with diagram editing tools/buttons (left sidebar).
 * Supplies basic actions: add node, add edge, delete, etc.
 * More buttons/logic can be added as diagram implementation progresses.
 */
function ToolsPanel({ onSelectTool, selectedTool }) {
  const tools = [
    { id: "select", label: "Select", icon: "⭳" },
    { id: "add-node", label: "Add Node", icon: "⬤" },
    { id: "add-edge", label: "Add Edge", icon: "→" },
    { id: "delete", label: "Delete", icon: "🗑️" },
  ];

  return (
    <aside
      style={{
        width: 70,
        background: "#f8f9fa",
        borderRight: "1px solid #e9ecef",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: 16,
        minHeight: "calc(100vh - 56px)",
        boxSizing: "border-box",
        position: "relative",
        gap: 8,
      }}
      data-testid="diagram-tools-panel"
    >
      {tools.map((tool) => (
        <button
          key={tool.id}
          title={tool.label}
          aria-label={tool.label}
          className={selectedTool === tool.id ? "active-tool-btn" : ""}
          style={{
            width: 40,
            height: 40,
            border: "none",
            borderRadius: 8,
            background:
              selectedTool === tool.id
                ? "#e67e22"
                : "transparent",
            color: selectedTool === tool.id ? "#fff" : "#282c34",
            fontSize: 18,
            fontWeight: 600,
            cursor: "pointer",
            transition: "background 0.2s, color 0.2s",
          }}
          onClick={() => onSelectTool(tool.id)}
        >
          {tool.icon}
        </button>
      ))}
    </aside>
  );
}

export default ToolsPanel;
