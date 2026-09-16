import Navbar from "../components/Navbar";
import Hero from "../sections/home/Hero";
import Benefits from "../sections/home/Benefits";
import AboutPreview from "../sections/home/AboutPreview";
import ServicesPreview from "../sections/home/ServicesPreview";
import PortfolioPreview from "../sections/home/PortfolioPreview";
import ContactCTA from "../sections/home/ContactCTA";

function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Benefits />
        <AboutPreview />
        <ServicesPreview />
        <PortfolioPreview />
        <ContactCTA />
      </main>
    </>
  );
}

export default Home;