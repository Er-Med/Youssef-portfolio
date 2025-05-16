import AboutMe from "@/components/About-me"
import Hero from "@/components/Hero"
import PortfolioSection from "@/components/Portfolio-section"
import SkillsSection from "@/components/Skills-section"
import ServicesSection from '../components/ServicesSection';
import MarqueeSection from "@/components/MarqueeSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <main className="" >
      {/* <Suspense fallback={<Loader />}> */}
      <Hero />

      <section className="min-h-screen bg-[#212228] flex items-center justify-center text-white">
        <ServicesSection />
      </section>


      {/* Home Section */}
      <section id="home" className="min-h-screen bg-[#26272e] flex items-center justify-center text-white">
        {/* <Container> */}
        <AboutMe />
        {/* </Container> */}
      </section>

      {/* Marquee-section */}
      <section className="bg-[#26272e]">
        <MarqueeSection />
      </section>

      <section id="about" className=" min-h-screen bg-[#26272e] flex items-center justify-center text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-52">
          <PortfolioSection />
        </div>
      </section>

      {/* Works Section */}
      <section id="works" className="min-h-screen bg-gray-900 flex items-center justify-center text-white">
        <SkillsSection />
      </section>

      {/* About Section */}

      <section id="about" className="min-h-screen bg-gray-900 flex items-center justify-center text-white">
        <ContactSection />
      </section>
    </main>
  )
}
