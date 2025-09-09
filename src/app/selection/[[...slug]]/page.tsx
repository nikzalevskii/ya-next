"use client";

import { useState } from "react";

interface Props {
  params: {
    slug: string[];
  };
}

export default function Selection({ params }: Props) {
  const [shouldError, setShouldError] = useState(false);

  // Искусственно вызываем ошибку для демонстрации
  if (shouldError) {
    throw new Error("Это тестовая ошибка для демонстрации error.tsx!");
  }

  const slug = params.slug ?? [];
  return (
    <div className="p-8">
      Selection {slug && slug.join("/")}
      <ul>
        {slug &&
          slug.map((segment, idx) => (
            <li key={idx}>
              {segment}
              {idx < slug.length - 1 && " > "}
            </li>
          ))}
      </ul>
      <button
        onClick={() => setShouldError(true)}
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4"
      >
        Вызвать ошибку
      </button>
    </div>
  );
}
