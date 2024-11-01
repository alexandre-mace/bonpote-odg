import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

import { Phudu } from "next/font/google";
import Image from "next/image";
import { Button } from "@/components/ui/button";

// If loading a variable font, you don't need to specify the font weight
const phudu = Phudu({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-phudu",
});

export const metadata: Metadata = {
  title: "Ordres de grandeur",
  description: "Les ordres de grandeur par BonPote",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${phudu.variable} antialiased`}
      >
        <div className={"border-b bg-bonpote-sand px-2 py-4 md:px-0"}>
          <div
            className={"container mx-auto flex max-w-7xl justify-between gap-4"}
          >
            <div className={"flex items-center gap-4"}>
              <Image
                src={
                  "https://bonpote.com/wp-content/uploads/2024/01/logobp-1.svg"
                }
                alt={"Logo de BonPote"}
                width={118}
                height={30}
              />
              <div className={"hidden translate-y-0.5 md:block"}>
                Média indépendant sur l&#39;environnement, 100% financé par ses
                lecteurs
              </div>
            </div>
            <div className={"flex items-center gap-2"}>
              <Button variant={"default"} asChild>
                <a target={"_blank"} href="https://fr.tipeee.com/bon-pote">
                  Soutenir BonPote
                </a>
              </Button>
              <Button variant={"outline"} asChild>
                <a target={"_blank"} href="https://bonpote.com/newsletter/">
                  Nous suivre
                </a>
              </Button>
            </div>
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}
