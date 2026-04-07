import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Country Web App",
  description: "View the Country API in action",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className={`${geist.className} bg-gray-50 min-h-full flex flex-col`}>
        <header className="bg-white shadow-sm">
          <nav className="max-w-4xl mx-auto px-4 py-4">
            <Link href="/" className="text-xl font-bold text-blue-600">
              Country Web App
            </Link>
          </nav>
        </header>
        <main className="max-w-4xl mx-auto w-full px-4 py-8 flex-1">
          {children}
        </main>
      </body>
    </html>
  );
}