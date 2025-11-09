import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./styles/globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
    title: "Portfolio - Séraphin Benoit",
    description: "Ce portfolio est un aperçu de mon parcours académique au cours de ma formation en développement web.",
    applicationName: 'Portfolio - Séraphin Benoit',
    authors: { name: 'Séraphin Benoit', url: 'https://seraphin-benoit.vercel.app/'},
    keywords: ['portfolio', 'developpeur', 'web', 'développeur web', 'front-end', 'back-end',
        'epitech', 'projets', 'angular', 'nestjs', 'nextjs', 'javascript', 'typescript',
        'php', 'react', 'web@cademie', 'jira', 'git', 'github'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        {children}
      </body>
    </html>
  );
}
