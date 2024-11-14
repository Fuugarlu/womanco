import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Woman Coommunication",
  description: "Find hidden meanings!",
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
