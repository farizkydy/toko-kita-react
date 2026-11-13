export default function ServiceCard({ icon, title, desc }) {
  return (
    <div>
      <div>{icon}</div>
      <h3>{title}</h3>
      <p>{desc}</p>
      <button onClick={() => alert(title)}>Lihat info</button>
    </div>
  );
}
