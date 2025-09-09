"use client";

import { useRouter } from "next/navigation";
import { LinkComponent } from "./components/LinkComponent";

export default function Home() {
  const router = useRouter();
  return (
    <div className="p-8">
      <div className="text-2xl font-bold">Роуты</div>
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
    </div>
  );
}
