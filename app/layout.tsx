import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sudoku by Mujahidin, S. Pd.",
  description: "Asah Logika, Taklukkan Tantangan!",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="id"><body>{children}</body></html>;
}
