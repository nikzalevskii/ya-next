import ClientNavigation from "@/app/components/ClientNavigation";

export default function Home() {
  return (
    <div className="p-8">
      <div className="text-2xl font-bold">Роуты</div>
      <ClientNavigation />
    </div>
  );
}
