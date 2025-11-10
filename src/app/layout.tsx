import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Site Search Demo",
  description: "Apples and oranges search test",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
