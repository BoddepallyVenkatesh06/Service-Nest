import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import NextAuthSessionProvider from "./Provider";
import { Toaster } from "sonner";

const inter = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Service Nest",
  description: "Generated Terminal_boyz",
  icons: {
    icon: '/assets/logo/smart-home-logo.jpg'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextAuthSessionProvider>

          <div className="">
            <Header />
            <Toaster />
            {children}
            <Footer />
          </div>

        </NextAuthSessionProvider>
      </body>
    </html>
  );
}
