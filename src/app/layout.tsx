import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yandex ШРИ. Создание проекта на React",
  description: "Создание проекта на React",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
