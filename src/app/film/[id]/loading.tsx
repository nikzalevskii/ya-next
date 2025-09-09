export default function FilmLoading() {
  return (
    <div className="p-8">
      <div className="flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
        <span className="ml-2">Загрузка фильма...</span>
      </div>
    </div>
  );
}
