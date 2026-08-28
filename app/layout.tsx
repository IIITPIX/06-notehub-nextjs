import Footer from "@/components/Footer/page";
import Header from "@/components/Header/page";
import TanStackProvider from "@/components/TanStackProvider/TanStackProvider";
import "./globals.css";
export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>
        <Header />
        <TanStackProvider>{children}</TanStackProvider>
        <Footer />
      </body>
    </html>
  );
}
