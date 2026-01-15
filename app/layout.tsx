import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "My 3D Blog",
  description: "A blog about 3D art, modeling, and design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={ `antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
