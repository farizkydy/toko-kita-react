export default function ServiceCard({
  icon,
  title,
  desc,
  fontFamily,
  highlight = false,
}) {

  const cardStyle = {
    border: highlight ? "2px solid #7c3aed" : "1px solid #e5e7eb",
    borderRadius: 12,
    padding: 16,
    width: 220,
    textAlign: "center",
    backgroundColor: highlight ? "#f3e8ff" : "#ffffff",
    fontFamily,
  };

  return (
    <div style={cardStyle}>
      <div style={{ fontSize: 32 }}>{icon}</div>
      <h3 style={{ fontSize: 20, margin: "8px 0 4px", color: "#111827" }}>
        {title}
      </h3>
      <p style={{ fontSize: 14, margin: "0 0 12px", color: "#6b7280/" }}>
        {desc}
      </p>
      <button onClick={() => alert(title)}>Lihat info</button>
    </div>
  );
}
