import "./globals.css";
import { ThemeProvider } from "next-themes";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import KSquareAssistant from "@/components/KSquareAssistant"; // <- import the new assistant

export const metadata = {
  title: "The KSquare Group | AI-Integrated Enterprise Systems",
  description:
    "The KSquare Group transforms enterprises through strategy, cloud, systems engineering, and advanced AI.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white transition-colors duration-300">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          {children}
          <Footer />
          <KSquareAssistant /> {/* Floating assistant widget */}
        </ThemeProvider>
      </body>
    </html>
  );
}