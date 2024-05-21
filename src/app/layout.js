import { Inter } from "next/font/google";
import "./globals.css";
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Badou Thrift Store",
  description: "A community for thrifters, by thrifters",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <ToastContainer />
        </body>
    </html>
  );
}
