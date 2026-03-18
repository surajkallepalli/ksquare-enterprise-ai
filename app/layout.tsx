import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "next-themes";

export const metadata = {
  title: "The KSquare Group | AI-Integrated Enterprise Systems",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
<body className="bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white transition-colors duration-300">
  <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
    <Navbar />
    {children}
    <Footer />
  </ThemeProvider>
</body>
    </html>
  );
}