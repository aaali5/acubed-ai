import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import CaseStudy from "@/components/CaseStudy";
import About from "@/components/About";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

function Sep() {
  return <div className="sep" style={{ margin: "0 auto", maxWidth: 1100 }} />;
}

export default function Home() {
  return (
    <SmoothScroll>
      <Navbar />
      <main>
        <Hero />
        <Sep />
        <Services />
        <Sep />
        <HowItWorks />
        <Sep />
        <CaseStudy />
        <Sep />
        <About />
        <Sep />
        <CTA />
      </main>
      <Footer />
    </SmoothScroll>
  );
}
