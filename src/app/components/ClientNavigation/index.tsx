// src/app/components/ClientNavigation.tsx
"use client";

import { useRouter } from "next/navigation";
import { LinkComponent } from "@/app/components/LinkComponent";

export default function ClientNavigation() {
  const router = useRouter();

  return (
    <>
      <LinkComponent link={"user"} title={"Пользователь"} />
      <button
        className="text-blue-500 hover:underline"
        onClick={() => router.push("/selection")}
      >
        Selection
      </button>
      <LinkComponent link={"film"} title={"Фильм"} />
      <LinkComponent link={"new"} title={"Новое"} />
      <LinkComponent link={"section"} title={"Раздел"} />
    </>
  );
}
