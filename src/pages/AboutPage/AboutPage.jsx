import Layout from "@/components/layout/Layout";
import Hero from "./sections/Hero/Hero";
import CardsTop from "./sections/CardsTop/CardsTop";
// другие секции...

export default function HomePage() {
  return (
    <Layout>
      <Hero />
      <CardsTop />
    </Layout>
  );
}