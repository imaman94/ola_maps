import { Inter } from "next/font/google";
import Navbar from '../../components/NavBar';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ola Maps Autocomplete",
  description: "Ola Maps autocomplete api",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        
        {children}</body>
    </html>
  );
}
