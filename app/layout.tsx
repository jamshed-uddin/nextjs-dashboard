import "@/app/ui/global.css";
import { inter } from "@/app/ui/fonts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s |  Acme Dashboard",
    default: "Acme Dashboard",
  },
  openGraph: {
    title: "Acme Dashboard",
    description: "This is the dashboard for Acme",
    images: "./opengraph-image.png",
  },
  description: "Acme dashboard",
  metadataBase: new URL("https://www.google.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
