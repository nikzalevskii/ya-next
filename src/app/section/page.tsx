import Link from "next/link";

export default function SectionPage() {
  return (
    <div className="p-8">
      <div>Section</div>
      <Link href="/film/123" className="block text-blue-500">
        Film
      </Link>
    </div>
  );
}
