import type {Metadata} from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
});

export const metadata: Metadata = {
  title: 'Madon Daycare & Aftercare | Learning is Fun',
  description: 'Providing a safe, nurturing, and structured environment for children from 3 months to Grade 7.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} dark`}>
      <body className="font-sans antialiased bg-slate-950 text-slate-100">
        {children}
      </body>
    </html>
  );
}
