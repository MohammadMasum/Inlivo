import "@/app/assets/fonts/monument-extended/stylesheet.css";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/app/components/Header/Header";
import Footer from "@/app/components/Footer/Footer";

const dm_sans = DM_Sans({ 
  subsets: ["latin"],
  weight: ['100', '300', '400', '500', '600', '700' ],
  variable: '--font-dm-sans',
});

export const metadata = {
  title: "Inlivo",
  description: "Inlivo",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`${dm_sans.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
