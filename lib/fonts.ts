import localFont from 'next/font/local';
import { Inter } from 'next/font/google';

export const calSans = localFont({
  src: '../public/fonts/CalSans-SemiBold.woff2',
  variable: '--font-cal'
});

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
});
