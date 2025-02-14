import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Navigation } from "@/components/navigation";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Michal Kolasa - Developer Portfolio",
  description:
    "I'm a software developer based in the Netherlands. I specialize in building web applications with modern technologies.",
  keywords: ["web developer", "software engineer", "portfolio"],
  icons: "/pfp.jpg",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <div className="min-h-screen">
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Navigation />
            {children}
            <div id="copyright" className="text-center mt-10">
              <p className="text-muted-foreground mb-10">
                © {new Date().getFullYear()} Michal Kolasa. All rights reserved.
              </p>
            </div>
            <Toaster />
          </ThemeProvider>
        </div>
      </body>
    </html>
  );
}
