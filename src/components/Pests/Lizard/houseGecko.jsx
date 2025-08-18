import PestInfoPage from "../PestInfoPage";
import TopBar from "../../TopBar";
import Footer from "@/components/Footer";
import Navbar from "../../Navbar";
import ServicesHero from "../../Services/ServicesHero";
import RodentHeroImg from "@/assets/Pests/Lizard/househero.webp";
//import React from "react";

const HouseGecko = () => {
  return (
    <>
      <TopBar />
      <Navbar />
      <ServicesHero
        title="House Gecko"
        breadcrumb="Home > Pests > Details"
        bgImg={RodentHeroImg}
      />
      <PestInfoPage
        title="About the House Gecko"
        scientificName=""
        description={`The House Gecko is a common reptilian intruder in Dubai homes and buildings, easily recognized by its small, agile body, sticky feet, and nocturnal activity. These creatures are not just harmless; they also help reduce insect populations. However, their sudden appearance indoors, especially in kitchens or bedrooms, often raises concerns about hygiene, odor, and property cleanliness.
House gecko lizard sightings usually increase during warmer months, when open windows or cracks invite them in. While they don’t pose direct harm to humans, their droppings, skin shedding, and eggs can lead to discomfort, especially in food-related or hospitality environments.`}
        
        Int=""
        descInt=""
       
        Heading1="Signs of a House Gecko Infestation"
        desc1=""
        ListDesc1=""
        Enddesc1="Not deadly, geckos are a definite sign of easy access to insects for food or structural entry points on the property."
        pestDescription={[
          { value: "Frequent chirping or clicking sounds at night"},
          { value: "Small black droppings with white tips near windows or walls"},
          { value: "Gecko lizard eggs are hidden in corners, behind appliances, or under furniture"},
          { value: "Shedding skin flakes found near warm lights or air vents"},
          { value: "Rapid movement along ceilings or wall corners when lights are turned on"},
          { value: "Stains or smudges where geckos have been nesting or crawling"},
        ]}
        List={[]}


        Int2=""
        descInt2=""

        Heading2="Where They Nest"
        desc2="House Lizards prefer warm, sheltered environments that provide both safety and a steady insect food source."
        ListDesc2="Common nesting spots include:"
        Enddesc2="These creatures are mostly active at night and can enter through the tiniest openings, so proper sealing is crucial."

        habits={[
          "Inside light fixtures and lamp covers",
          "Behind photo frames or wall décor",
          "Air-conditioning units or ceiling corners",
          "Cracks in tiles or wooden flooring",
          "Cardboard storage boxes or under appliances",
          "Outdoor light sources that attract prey insects",
        ]}


        Heading3="How Accurate Pest Control LLC Treats House Gecko Infestations"
        desc3="At Accurate Pest Control Services LLC Dubai, we combine habitat disruption and humane exclusion techniques to keep your home house lizard-free."
        ListDesc3="Our approach includes:"       
        Enddesc3="We ensure that treatments are safe for children and pets while being effective at driving out lizards without harming them."
        habitat={[
          { value: "A thorough examination of the property to identify areas for nesting and egg-laying"},
          { value: "Safe chemical and natural deterrents applied to entry points"},
          { value: "Sealing cracks and gaps in walls, windows, and air vents"},
          { value: "Installing lizard-repelling UV or ultrasonic devices (non-invasive)"},
          { value: "Scent paths can be removed by cleaning droppings and using deodorizers."},
          { value: "Long term follow-up service for persistent locations"},
        ]}





        Heading4=""
        desc4=""
        ListDesc4=""
        Enddesc4=""
        threats={[]}

        Heading5=""
        desc5=""
        additional={[]}


        ctaHeading="Book Your House Gecko Service Today"
        ctaText={`Don’t let geckos make your home their playground. Contact Accurate Pest Control Services  LLC, Dubai, for reliable, safe, and prompt house gecko removal.`}
        ctaButtonText="Book Your House Gecko Service"
      />
      <Footer />
    </>
  );
};

export default HouseGecko;
