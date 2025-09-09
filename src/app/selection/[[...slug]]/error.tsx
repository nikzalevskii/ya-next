"use client";

export default function SelectionSlugError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="p-8">
      <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded">
        <h2 className="font-bold">Ошибка в динамическом маршруте Selection!</h2>
        <p>Проблема с: {error.message}</p>
        <button
          onClick={reset}
          className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded mt-2"
        >
          Перезагрузить
        </button>
      </div>
    </div>
  );
}
