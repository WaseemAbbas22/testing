import PestInfoPage from "../PestInfoPage";
import TopBar from "../../TopBar";
import Footer from "@/components/Footer";
import Navbar from "../../Navbar";
import ServicesHero from "../../Services/ServicesHero";
import RodentHeroImg from "@/assets/Pests/Lizard/medhero.webp";
//import React from "react";

const MedGecko = () => {
  return (
    <>
      <TopBar />
      <Navbar />
      <ServicesHero
        title="Mediterranean Gecko"
        breadcrumb="Home > Pests > Details"
        bgImg={RodentHeroImg}
      />
      <PestInfoPage
        title="About Mediterranean Gecko"
        scientificName=""
        description={`The Mediterranean Gecko is a widespread reptile in Dubai, commonly seen clinging to walls, ceilings, and windows during warm nights. Known for their translucent skin, sticky toe pads, and fast movements, these geckos can quickly take over your home or office space if not managed properly.
While they help reduce insect populations, including small flies and mosquitoes, their presence indoors can be alarming. Just like a gecko lizard, the Mediterranean variety hides during the day and becomes active at night, often drawn to artificial lights where prey insects gather.`}
        
        Int=""
        descInt=""
       
        Heading1="Signs of a Mediterranean Gecko Problem"
        desc1=""
        ListDesc1=""
        Enddesc1="If you notice these signs, it's a strong indicator of a growing gecko population in or around your property."
        pestDescription={[
          { value: "Regular sightings of pale, spotted lizards on walls or windows"},
          { value: "Chirping or squeaky sounds during the night"},
          { value: "Droppings that resemble small dark pellets with white tips"},
          { value: "Shedding skin flakes in corners or near lighting fixtures"},
          { value: "Stains or tail marks on paint, curtains, or wallpaper"},
          { value: "Nesting behind picture frames, AC vents, or electrical boxes"},
        ]}
        List={[]}


        Int2=""
        descInt2=""

        Heading2="Where Mediterranean Geckos Hide"
        desc2="Mediterranean Geckos are resilient and adaptive like many desert lizard species. They prefer dry, warm, and dim places that offer easy access to insects."
        ListDesc2="Common hiding spots include:"
        Enddesc2=""

        habits={[
          "Outdoor light fixtures that attract insects",
          "Small gaps in walls or window frames",
          "Behind electrical appliances or AC ducts",
          "Under furniture or inside cardboard storage boxes",
          "Inside cracks in ceilings or tiled walls",
          "Near garden areas where other insects are present",
        ]}


        Heading3="How We Control Mediterranean Gecko Infestations"
        desc3="At Accurate Pest Control Services LLC Dubai, we offer proven solutions to manage gecko infestations efficiently without harming the ecosystem."
        ListDesc3="Our gecko treatments include:"       
        Enddesc3="We often combine this service with other pest control solutions, like wasp control, to eliminate additional food sources that attract geckos."
        habitat={[
          { value: "Full inspection of the property structure and exterior"},
          { value: "Application of eco safe deterrent sprays and gels"},
          { value: "Closing off entry points, cracks, and wall gaps"},
          { value: "Humidity and light source management to reduce attraction"},
          { value: "Use of humane traps and gecko repelling technology"},
        ]}





        Heading4=""
        desc4=""
        ListDesc4=""
        Enddesc4=""
        threats={[]}

        Heading5=""
        desc5=""
        additional={[]}


        ctaHeading="Don’t Let Mediterranean Geckos Take Over Your Home"
        ctaText={`Ready to remove unwanted reptilian guests from your space? For expert, secure, and long lasting Mediterranean gecko lizard control services, get in touch with Accurate Pest Control LLC Dubai right now.`}
        ctaButtonText="Book Your Free Inspection"
      />
      <Footer />
    </>
  );
};

export default MedGecko;
