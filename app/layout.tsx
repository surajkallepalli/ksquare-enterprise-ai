import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "next-themes";

export const metadata = {
  title: "The KSquare Group | AI-Integrated Enterprise Systems",
  description: "Enterprise AI transformation across 5 countries — building intelligent systems that drive measurable results.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "The KSquare Group | AI-Integrated Enterprise Systems",
    description: "Enterprise AI transformation across 5 countries — building intelligent systems that drive measurable results.",
    url: "https://theksquaregroup.com",
    siteName: "The KSquare Group",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Outfit:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white transition-colors duration-300" style={{ fontFamily: "'Outfit', sans-serif" }}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}