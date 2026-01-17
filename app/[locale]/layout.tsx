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
            <ResizableNavbar />
            {children}
            <Footer />
          </ThemeProvider>
        </IntlayerClientProvider>
      </body>
    </html>
  );
}
