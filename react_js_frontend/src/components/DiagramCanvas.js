import React from "react";

// PUBLIC_INTERFACE
/**
 * Main interactive canvas for drawing and editing the flow diagram.
 */
function DiagramCanvas({ children }) {
  return (
    <main
      style={{
        flex: 1,
        background: "#fff",
        minHeight: "calc(100vh - 56px)",
        padding: 0,
        margin: 0,
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        overflow: "auto",
      }}
      data-testid="diagram-canvas"
    >
      {/* Diagram rendering placeholder */}
      <div
        style={{
          width: "98%",
          height: "90vh",
          border: "1.5px dashed #e67e22",
          borderRadius: 12,
          margin: 16,
          minWidth: 400,
          background: "#fafbfc",
          boxSizing: "border-box",
          display: "flex",
          position: "relative",
        }}
      >
        {children || (
          <span
            style={{
              color: "#e67e22",
              fontWeight: 400,
              margin: "auto",
              letterSpacing: 0.4,
            }}
          >
            Diagram Canvas (Drag nodes and edges here)
          </span>
        )}
      </div>
    </main>
  );
}

export default DiagramCanvas;
