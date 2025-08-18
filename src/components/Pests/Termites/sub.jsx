import PestInfoPage from "../PestInfoPage";
import TopBar from "../../TopBar";
import Footer from "@/components/Footer";
import Navbar from "../../Navbar";
import ServicesHero from "../../Services/ServicesHero";
import RodentHeroImg from "@/assets/Pests/Termite/subhero.webp";
//import React from "react";

const SubterraneanTermites = () => {
  return (
    <>
      <TopBar />
      <Navbar />
      <ServicesHero
        title="Subterranean Termites"
        breadcrumb="Home > Pests > Details"
        bgImg={RodentHeroImg}
      />
      <PestInfoPage
        title="About Subterranean Termites"
        scientificName=""
        description={`Subterranean Termites are among the most destructive species, silently invading homes through soil contact and moisture rich entry points. Often hidden underground or within walls, they form massive colonies that feed on wooden structures 24/7. These termites thrive in dark, moist environments and frequently remain undetected until serious structural damage occurs. That’s why prompt termite service is crucial to protect your home or business from long-term losses.`}
        
        Int=""
        descInt=""
       
        Heading1="Signs of a Subterranean Termite Infestation"
        desc1="Think you may have termites in your home? Watch for these warning signs:"
        ListDesc1=""
        Enddesc1="Don’t wait for visible damage. Early detection and pest control termites solutions are key to avoiding costly repairs."
        pestDescription={[
          { value: "Mud tubes along walls, foundations, or pipes"},
          { value: "Hollow-sounding wooden surfaces"},
          { value: "Bubbling paint or discolored drywall"},
          { value: "Dropped wings near windows or doors"},
          { value:"Swollen or distorted wood structures"},
        ]}
        List={[]}


        Int2=""
        descInt2=""

        Heading2="Where They Live and How They Invade"
        desc2="As they travel in search of food, subterranean termites construct colonies underground and conceal themselves by constructing mud tunnels:"
        ListDesc2="Common hiding zones include:"
        Enddesc2="They often enter through structural cracks, plumbing lines, and expansion joints. Once inside, they feed on anything cellulose-based from beams to books."

        habits={[
          "Beneath concrete slabs and patios",
          "Inside crawlspaces and foundation gaps",
          "Around leaking pipes or garden irrigation",
          "In poorly ventilated basements",
          "Near wooden furniture touching the floor",
        ]}


        Heading3="Prevention with Professional Termite Services"
        desc3="Preventing infestation is better than dealing with damage. To prevent termites from entering a foundation from below, Accurate Pest Control Services LLC Dubai provides professional inspections and preventative anti-termite treatment. Our foundation barriers and pre-construction soil treatments provide a durable line of defense."
        Enddesc3="We also educate homeowners on minimizing clutter and reducing indoor insect populations to cut off the spider’s food supply."
        ListDesc3="We also offer:"       
        habitat={[
          { value: "Detailed inspection and detection services"},
          { value: "Preventive anti-termite treatment for wood"},
          { value: "Customized barrier and baiting systems"},
          { value: "Safe, government-approved chemical application"},
          { value:"Long-term protection plans for homeowners and contractors"},
        ]}





        Heading4=""
        desc4=""
        ListDesc4=""
        Enddesc4=""
        threats={[]}

        Heading5=""
        desc5=""
        additional={[]}


        ctaHeading="Schedule Your Termite Control Service Today"
        ctaText={`With our specialized termite treatment options, tailored for Dubai’s soil and weather you get the peace of mind that your investment is protected.`}
        ctaButtonText="Book Your Termite Inspection with Us"
      />
      <Footer />
    </>
  );
};

export default SubterraneanTermites;
