import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "SMART Pump Account Manager",
  description: "A user-friendly web app to manage SMART Pump accounts: login, balance check, and profile updates. Built with Node.js, lowdb, and a responsive UI.",
  keywords: ["SMART Pump", "account manager", "Node.js", "lowdb", "technical challenge", "user login", "balance viewer", "profile update"],
  author: "Gabriel Dalí Rangel Ahumada",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
