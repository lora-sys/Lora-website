import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { ResizableNavbar } from "@/components/layout/resizable-navbar";
import { Footer } from "@/components/layout/footer";
import "../globals.css";
import { IntlayerClientProvider } from "next-intlayer";
import { Locales } from "intlayer";

export const metadata: Metadata = {
  title: "My 3D Blog",
  description: "A blog about 3D art, modeling, and design.",
};

export function generateStaticParams() {
  return [
    { locale: Locales.ENGLISH },
    { locale: Locales.CHINESE },
  ];
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={` antialiased
        bg-background text-foreground`}
        style={{ overflowX: "hidden" }}
        suppressHydrationWarning
      >
        <IntlayerClientProvider locale={locale}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <a
              href="#main-content"
              className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-background focus:px-3 focus:py-2 focus:text-sm focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
            >
              Skip to main content
            </a>
            <ResizableNavbar />
            <div id="main-content">{children}</div>
            <Footer />
          </ThemeProvider>
        </IntlayerClientProvider>
      </body>
    </html>
  );
}
