import { Jost, Inter } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/theme-provider";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { siteConfig } from "@/lib/site-data";

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-jost",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL 
  ? new URL(process.env.NEXT_PUBLIC_BASE_URL) 
  : new URL("http://localhost:3000"); // Fallback production URL

export const metadata = {
  title: `${siteConfig.name} | ${siteConfig.brand} — ${siteConfig.title}`,
  description: siteConfig.tagline,
  appleWebApp: {
    title: "Zen WebWorks",
  },
  // Pass the URL object here
  metadataBase: baseUrl, 
  alternates: {
    // metadataBase will automatically prepend to this if you pass a relative path
    // or you can leave it as baseUrl if you want the absolute root
    canonical: "/", 
  },
  openGraph: {
    title: "Zen WebWorks",
    description: "Full Stack Developer & Freelance Web Developer",
    url: "/", // Next.js will automatically resolve this against metadataBase
    siteName: "Zen WebWorks",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-image.png", // Added leading slash for absolute resolving
        width: 1200,
        height: 630,
        alt: "Zen WebWorks - Full Stack Developer & Freelance Web Developer",
        type: "image/png"
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zen WebWorks - Full Stack Developer & Freelance Web Developer",
    description: "Full Stack Developer & Freelance Web Developer",
    images: ["/og-image.png"], // Added leading slash
  },
};


export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F6F8FC" },
    { media: "(prefers-color-scheme: dark)", color: "#0B1120" },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${jost.variable} ${inter.variable}`} suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
