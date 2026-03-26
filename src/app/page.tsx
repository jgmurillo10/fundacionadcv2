import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ODS from "@/components/ODS";
import Services from "@/components/Services";
import Programs from "@/components/Programs";
import Impact from "@/components/Impact";
import Gallery from "@/components/Gallery";
import EnterpriseCTA from "@/components/EnterpriseCTA";
import Allies from "@/components/Allies";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <ODS />
      <Services />
      <Programs />
      <Impact />
      <Gallery />
      <EnterpriseCTA />
      <Allies />
      <Contact />
      <Footer />
    </>
  );
}
