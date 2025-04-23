import Header from "./component/Header";
import Sidebar from "./component/Sidebar";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import localFont from "next/font/local";

const poppins = localFont({
  src: "./poppins.ttf",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-[#1b1b1b]">
      <body className={`bg-[#1b1b1b] antialiased ${poppins.className}`}>
        <Header />
        <div className="max-w-[1540px] mx-auto flex relative">
          <Sidebar />
          <main className="w-full  mx-auto bg-[url(/Body.svg)] bg-cover bg-center lg:pl-[400px] sm:pl-0">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
