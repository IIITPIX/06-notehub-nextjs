import Footer from "@/components/footer/page";
import Header from "@/components/header/page";
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
