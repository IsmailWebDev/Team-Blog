import Footer from "./components/ui/Footer";
import Hero from "./components/ui/Hero";
import Mockup from "./components/ui/Mockup";
import SideBySide from "./components/ui/SideBySide";
import Testimonial from "./components/ui/Testimonial";

export default function Home() {
  return (
    <>
      <Hero />
      <main className="py-24">
        <Mockup />
        <SideBySide />
        <Testimonial />
      </main>

      <Footer />
    </>
  );
}
