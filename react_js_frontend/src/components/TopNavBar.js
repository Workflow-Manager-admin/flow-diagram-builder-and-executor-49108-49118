import React from "react";

// PUBLIC_INTERFACE
/**
 * Top navigation bar with project branding.
 * Displays project name/title and future navigation/menu items.
 */
function TopNavBar() {
  return (
    <nav
      style={{
        height: 56,
        width: "100%",
        backgroundColor: "#3498db",
        display: "flex",
        alignItems: "center",
        padding: "0 24px",
        color: "#fff",
        fontWeight: 700,
        fontSize: 20,
        letterSpacing: 1.2,
        boxSizing: "border-box",
        boxShadow: "0 2px 6px rgba(52,152,219,0.05)",
        borderBottom: "1px solid #e9ecef",
        zIndex: 10,
        position: "relative",
      }}
      data-testid="top-navbar"
    >
      Flow Diagram Builder & Executor
    </nav>
  );
}

export default TopNavBar;
