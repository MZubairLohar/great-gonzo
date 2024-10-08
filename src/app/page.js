import Hero from "./componants/hero";
import SectionThree from "./componants/sectionThree";
import SectionTwo from "./componants/sectionTwo";
// import Trade from "./trade/page";
import Tokenommics from "./componants/tokenoimics";
import Roadmap from "./componants/roadmap";
import LastSection from "./componants/lastSection";
import Footer from "./componants/footer";
import Navbar from "./componants/navbar";
export default function Home() {
  return (
    <div className=" w-full relative h-auto bg-center bg-fixed bg-contain no-repeat bg-no-repeat" alt="hero">
      <div className="lg:mt-20">
        <Navbar />
        {/* section 1 */} 
        <Hero />
        {/* section 2 */}
        
        <SectionTwo />

        {/* section 3 */}
        <SectionThree />
        {/* section 4 */}

        <Tokenommics />
        {/* section 5 */}
        <Roadmap />
        {/* Last Section */}
        <LastSection />
        {/* footer */}
        <Footer />
      </div>
    </div>
  );
}
