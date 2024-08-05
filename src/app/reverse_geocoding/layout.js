import { Inter } from "next/font/google";
import Navbar from '../../components/NavBar';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ola Maps",
  description: "Creating a ola maps",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        {children}</body>
    </html>
  );
}
