export default function FilmModal({ params }: { params: { id: string } }) {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: "rgba(0,0,0,0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ background: "#fff", padding: 32, borderRadius: 8 }}>
        <h2>Модалка фильма {params.id}</h2>
        <p>Это модальное окно для фильма {params.id} внутри раздела /section</p>
      </div>
    </div>
  );
}
