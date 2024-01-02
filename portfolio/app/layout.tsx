import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Manyaka | Personal Portfolio",
  description: "Manyaka is a full stack developer with 1 year of  experience.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // !scroll-smooth is used to enable smooth scrolling on the page  and ! is used to  give the property
    //priority over other properties that may conflict with it
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative  h-[5000px] pt-28 sm:pt-36`}
      >
        <div
          className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] 
          w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"
        ></div>
        <div
          className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] 
          w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33] lg:left-[-28rem] 
          xl:left-[-15rem] 2xl:left-[-5rem]"
        ></div>
        <ActiveSectionContextProvider>
          <Header />
          {children}
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
