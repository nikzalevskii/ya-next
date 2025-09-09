export default function TitleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ border: "2px solid #4f46e5", padding: 16, borderRadius: 8 }}>
      <h2 style={{ color: "#4f46e5" }}>Layout для раздела Title</h2>
      {children}
    </div>
  );
}
