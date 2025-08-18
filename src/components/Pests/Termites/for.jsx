import PestInfoPage from "../PestInfoPage";
import TopBar from "../../TopBar";
import Footer from "@/components/Footer";
import Navbar from "../../Navbar";
import ServicesHero from "../../Services/ServicesHero";
import RodentHeroImg from "@/assets/Pests/Termite/forhero.webp";
//import React from "react";

const FormosanTermites = () => {
  return (
    <>
      <TopBar />
      <Navbar />
      <ServicesHero
        title="About Formosan Termites"
        breadcrumb="Home > Pests > Details"
        bgImg={RodentHeroImg}
      />
      <PestInfoPage
        title="About Drywood Termites"
        scientificName=""
        description={`Formosan termites are among the most aggressive and damaging types of wood termites. These underground bugs, which have their origins in Asia, have spread to warm regions and can quickly cause structural damage in places like Dubai. Unlike typical termites, which eat wood slowly over time, Formosan colonies are massive and feed around the clock, attacking everything from support beams and flooring to books and insulation.
        What sets them apart is their ability to chew through concrete cracks, expand quickly, and remain hidden while doing extensive damage.`}
        Int=""
        descInt=""
        Heading1="Signs of a Formosan Termite Infestation"
        desc1="Formosan termites frequently go unnoticed until significant harm has been done."
        ListDesc1="Watch out for:"
        Enddesc1="Their fast reproduction makes them especially dangerous a single colony can house millions."
        pestDescription={[
          { value: "Mud tubes along foundations and walls"},
          { value: "Swarmers (winged termites) near lights or windows" },
          { value: "Hollowed out wood with a honeycomb interior" },
          { value: "Blistered or sagging wood structures" },
          { value: "Damp or mildew smells in wood rich areas" },
        ]}
        List={[]}


        Int2=""
        descInt2=""

        Heading2="Nesting Habits and Spread Patterns"
        desc2="Formosan termites require moisture and typically construct their nests underground, in comparison to drywood termites. However, they can also build aerial nests inside buildings, particularly if there's a water source nearby."
        ListDesc2="They typically invade:"
        Enddesc2="It may already be a Formosan infestation if you have observed termites eating wood."
        habits={[
          "Foundations and basement walls",
          "Wood near leaking pipes or roofs",
          "Wooden fences, decks, and garden beds",
          "Stored cardboard boxes and paper products",
        ]}


        Heading3="Control Measures by Expert Termite Exterminators"
        desc3="Due to their colony size and hidden nesting, Formosan termites require a highly strategic removal plan. Our team at Accurate Pest Control Services LLC uses advanced detection and elimination strategies that don’t just kill termites they destroy the entire colony."
        Enddesc3="We also educate homeowners on minimizing clutter and reducing indoor insect populations to cut off the spider’s food supply."
        ListDesc3="Our termite exterminator services include:"
        habitat={[
          { value: "Deep-soil and foundation barrier treatments" },
          { value: "Baiting systems that target and eliminate colonies" },
          { value: "Safe and targeted liquid treatments" },
          { value: "High-penetration foam applications for wall voids" },
          { value: "Follow-up inspections to ensure total eradication" },
        ]}
        Heading4=""
        desc4=""
        ListDesc4=""
        Enddesc4=""
        threats={[]}
        Heading5=""
        desc5=""
        additional={[]}
        ctaHeading="Get a Free Termite Inspection Today"
        ctaText={`Accurate Pest Control Services LLC, Dubai, offers free termite inspections.We help homeowners and businesses catch infestations early and provide guaranteed protection against future attacks.`}
        ctaButtonText="Book Your Free Termite Inspection Now"
      />
      <Footer />
    </>
  );
};

export default FormosanTermites;
