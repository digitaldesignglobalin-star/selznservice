import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Selznservice - India's Fastest Hyperlocal Marketplace",
    description: "Find products, services and vendors near you.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
          <html lang="en">
                <body className={inter.className}>{children}</body>body>
          </html>html>
        );
}
</html>
