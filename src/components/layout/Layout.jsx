import Header from "@/components/header/header";
import Footer from "@/components/footer/Footer";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}