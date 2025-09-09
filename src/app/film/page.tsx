import Link from "next/link";

export default function Films() {
  return (
    <div>
      <div className="p-8">Films</div>
      <div className="pl-8">
        <Link href="/film/1" className="block text-blue-500">
          Фильм 1
        </Link>
        <Link href="/film/2" className="block text-blue-500">
          Фильм 2
        </Link>
      </div>
    </div>
  );
}
