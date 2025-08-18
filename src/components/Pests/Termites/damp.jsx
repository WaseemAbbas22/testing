import PestInfoPage from "../PestInfoPage";
import TopBar from "../../TopBar";
import Footer from "@/components/Footer";
import Navbar from "../../Navbar";
import ServicesHero from "../../Services/ServicesHero";
import RodentHeroImg from "@/assets/Pests/Termite/damphero.webp";
//import React from "react";

const DampwoodTermites = () => {
  return (
    <>
      <TopBar />
      <Navbar />
      <ServicesHero
        title="Dampwood Termites"
        breadcrumb="Home > Pests > Details"
        bgImg={RodentHeroImg}
      />
      <PestInfoPage
        title="About Dampwood Termites"
        scientificName=""
        description={`Dampwood Termites prefer wet decomposing wood and are bigger than the majority of termite species. Unlike subterranean termites, they don’t need contact with soil, making them especially dangerous in high-humidity environments or homes with plumbing issues. These pests can quietly destroy structural beams, door frames, and even cause infestations involving termites in carpet and furniture.`}

        Int=""
        descInt=""
        
        Heading1="How to Spot a Dampwood Termite Infestation"
        desc1="Unlike Drywood or Formosan termites, Dampwood termites don’t create mud tubes. But here are some clear warning signs:"
        ListDesc1=""
        Enddesc1_2="They typically nest in:"
        Enddesc1="Ignoring them can result in unhygienic living conditions and significant wood destruction."
        pestDescription={[
          { value: "Wood that feels soft or crumbly"},
          { value: "Walls or floors that sound hollow" },
          { value: "Swarms of large, winged termites near lights" },
          { value: "Faint clicking noises from inside the walls" },
          { value: "Presence of termites inside house structures or damp areas" },
        ]}
        List={[
          "Leaky roof wood",
          "Rotten window sills and door frames",
          "Damaged flooring or baseboards",
          "Moist areas around bathrooms or kitchens",
        ]}


        Int2=""
        descInt2=""

        Heading2="Where Dampwood Termites Thrive"
        desc2="These termites need moisture, and their presence often points to plumbing leaks, poor ventilation, or water damage. They frequently infest:"
        ListDesc2=""
        Enddesc2="They rarely infest dry wood or perfectly ventilated structures."
        habits={[
          "Wooden furniture left in moist environments",
          "Carpets exposed to damp conditions",
          "Wood near leaking pipes or roof eaves",
          "Basements with poor drainage",
        ]}



        Heading3="Effective Treatments Using Termite Spray & Prevention"
        desc3="At Accurate Pest Control Services LLC, Dubai, we use targeted termite spray techniques to neutralize Dampwood termite colonies fast. Our team identifies the moisture source, treats infected wood, and prevents recurrence through long-term strategies."
        Enddesc3="We also educate homeowners on minimizing clutter and reducing indoor insect populations to cut off the spider’s food supply."
        ListDesc3="Our solutions include:"
        habitat={[
          { value: "Application of industry-grade anti-termite spray in moisture-prone zones" },
          { value: "Termite looks can be reduced by drying and sealing the damaged wood." },
          { value: "Replace the damaged wood if it affects the timber's structural integrity." },
          { value: "To prevent reinfestation, the surrounding environment should be inspected and treated." },
        ]}

        Heading4=""
        desc4=""
        ListDesc4=""
        Enddesc4=""
        threats={[]}
        Heading5=""
        desc5=""
        additional={[]}
        ctaHeading="Schedule Dampwood Termite Control in Dubai Today"
        ctaText={`If you've seen signs of termites inside house corners or suspect activity near moist wood, don't wait for damage to worsen. Accurate Pest Control Services LLC offers safe, family friendly solutions to keep your home termite free.`}
        ctaButtonText="Book Your Inspection and Anti Termite Spray Service Now"
      />
      <Footer />
    </>
  );
};

export default DampwoodTermites;
