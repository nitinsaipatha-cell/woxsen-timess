import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Featured from "@/components/Featured";
import NewsGrid from "@/components/NewsGrid";
import Team from "@/components/Team";
import VideoCTA from "@/components/VideoCTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Featured />
      <NewsGrid />
      <Team />
      <VideoCTA />
      <Contact />
      <Footer />
    </>
  );
}
