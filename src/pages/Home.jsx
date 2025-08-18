import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroMain from "../components/Home/HeroMain";
import TopBar from "../components/TopBar";
import Rating from "../components/Home/Ratings";
//import { Contact } from "lucide-react"
import ContactReq from "../components/Home/ContactReq";
import AboutHome from "../components/Home/AboutHome";
import Branches from "../components/Home/Branches";
//import Services from "../components/Home/Services"
import Process from "../components/Home/Process";
import TrustSec from "../components/Home/TrustSec";
import OurTeam from "../components/Home/OurTeam";
import Clients from "../components/Home/Clients";
import Reviews from "../components/Home/Reviews";
import Form from "../components/Home/Form";
import LastSec from "../components/Home/LastSec";
import PestsGrid from "../components/Home/PestsGrid";
//import PestsGrid from "../components/Pests/PestsGrid"
import TawkToWidget from "@/components/TawkToWidget";
import SEO from "../components/SEO";

const Home = () => {
  const homeData = {
    "@context": "http://schema.org/",
    "@type": "LocalBusiness",
    name: "Accurate Pest Control Services LLC Dubai",
    image: "https://accuratepestcontrol.ae/",
    priceRange: "150 To 300 AED",
    telephone: "+971 52 449 6173",
    url: "https://accuratepestcontrol.ae/",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "Warehouse No.1, Plot No. 247-289, Al Qusais Industrial Area 4, Dubai - UAE",
      addressLocality: "Dubai",
      addressRegion: "",
      addressCountry: "United Arab Emirates",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Sunday",
          "Saturday",
        ],
        opens: "08:00",
        closes: "22:00",
      },
    ],
    sameAs: [
      "https://www.facebook.com/accuratepestcontrolservices/",
      "https://www.instagram.com/accuratepestcontrolservices",
      "https://www.linkedin.com/company/accurate-pest-control-services-llc",
      "https://twitter.com/AccuratePestC",
      "https://www.pinterest.com/accuratepestcontrolservice/",
      "https://youtube.com/@AccuratePestControlServices",
    ],
  };

  return (
    <>
      <div className="relative">
        <SEO
          title="Dubai Municipality Pest Control | Trusted Services"
          description="Get certified pest control in Dubai with municipality-approved experts. Fast response, safe chemicals & guaranteed satisfaction. Call us today!"
          author="Muhammad Waqas Chughtai"
          copyright="Accurate Pest Control Services LLC"
          robots="index, follow"
          structuredData={homeData}
        />
        <TopBar />
        <Navbar />
        <HeroMain />
        <Rating />
        <ContactReq />
        <AboutHome />
        <Branches />
        {/*<Services />*/}
        {/*<PestsGrid />*/}
        <PestsGrid />
        <Process />
        <TrustSec />
        <OurTeam />
        <Clients />
        <Reviews />
        <Form />
        <LastSec />
        <TawkToWidget />
        {/* Scroll-to-top button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="
          fixed
          bottom-6
          left-6
          z-50
          bg-white
          text-darkgreen
          text-2xl
          font-extrabold
          px-6
          py-3
          rounded-full
          shadow
          hover:bg-gray-100
          transition
        "
        >
          ↑
        </button>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

export default Home;
