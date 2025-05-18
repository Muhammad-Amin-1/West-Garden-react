import Layout from "@/components/layout/Layout";
import Hero from "./sections/Hero/Hero";
import CardsTop from "./sections/CardsTop/CardsTop";
import GreenArea from "./sections/GreenArea/GreenArea";
import Present from "./sections/Present/Present";
import Lobbi from "./sections/Lobbi/Lobbi";
import Variant from "./sections/Variant/Variant";
import Format from "./sections/Format/Format";
import Otdelka from "./sections/Otdelka/Otdelka";
import Compleks from "./sections/Compleks/Compleks";
import Vid from "./sections/Vidd/Vid";
import Test from "./sections/Test/Test";
import Developer from "./sections/Developer/Developer";
// другие секции...

export default function HomePage() {
  return (
    <Layout>
      <Hero />
      <CardsTop />
      <GreenArea />
      <Vid />
      <Present />
      <Compleks />
      <Lobbi />
      <Variant />
      <Format />
      <Test />
      <Otdelka />
      <Developer />
    </Layout>
  );
}