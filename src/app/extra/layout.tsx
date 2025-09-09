export default function ExtraLayout({
  children,
  movies,
  series,
}: {
  children: React.ReactNode;
  movies: React.ReactNode;
  series: React.ReactNode;
}) {
  return (
    <div className="p-8 flex flex-col gap-4">
      {children} {movies} {series}
    </div>
  );
}
