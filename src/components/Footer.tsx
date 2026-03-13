const links = ["Services", "Process", "Results", "About"];

export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid rgba(255,255,255,0.04)", padding: "32px 0" }}>
      <div className="container-main" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
        <span style={{ fontSize: 13, fontWeight: 600, color: "#ededed" }}>
          a<sup style={{ fontSize: 8, color: "#34d399", position: "relative", top: -4 }}>3</sup>
          <span style={{ color: "#666", fontWeight: 500, marginLeft: 5 }}>AI</span>
        </span>

        <div style={{ display: "flex", gap: 24 }}>
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} style={{ fontSize: 12, color: "#666", textDecoration: "none" }}>
              {l}
            </a>
          ))}
        </div>

        <span style={{ fontSize: 12, color: "#444" }}>
          &copy; 2026 a&sup3; AI
        </span>
      </div>
    </footer>
  );
}
