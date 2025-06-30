import { Inter } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";
import Sidebar from "@/components/Sidebar";
import ProfileCard from "@/components/ProfileCard";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Pandu Kolli - Portfolio",
  description: "Personal art portfolio of Pandu Kolli",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-background text-foreground min-h-screen flex flex-col md:flex-row`}>
        <Sidebar />
        <div className="flex flex-1 flex-col md:flex-row">
          <ProfileCard />
          <main className="flex-1 p-4 md:p-8">{children}</main>
        </div>
      </body>
    </html>
  );
}