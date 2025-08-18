import PestInfoPage from "../PestInfoPage";
import TopBar from "../../TopBar";
import Footer from "@/components/Footer";
import Navbar from "../../Navbar";
import ServicesHero from "../../Services/ServicesHero";
import RodentHeroImg from "@/assets/Pests/Venomous/sandhero.webp";
//import React from "react";

const  SandBoa = () => {
  return (
    <>
      <TopBar />
      <Navbar />
      <ServicesHero
        title="Sand Boa"
        breadcrumb="Home > Pests > Details"
        bgImg={RodentHeroImg}
      />
      <PestInfoPage
        title="About the Sand Boa"
        scientificName=""
        description={`The Sand Boa is a non-venomous, burrowing snake commonly found in arid regions like the outskirts of Dubai. Recognized by its short, thick body and blunt tail, this species prefers loose, sandy soil where it can remain hidden beneath the surface. While not dangerous to humans, its sudden appearance, especially in gardens, garages, or desert-facing villas, can cause alarm for residents unfamiliar with its behavior.
Due to its discreet and underground lifestyle, Sand Boa sightings often go unnoticed until they surface for food or warmth. Early identification and humane removal are essential to prevent recurring visits or property disturbances.`}
        
        Int=""
        descInt=""
       
        Heading1="Signs of a Sand Boa Infestation"
        desc1="Though generally shy, Sand Boas leave behind subtle clues:"
        ListDesc1=""
        Enddesc1="While harmless, their presence may indicate ideal nesting conditions for other pests or reptiles as well."
        pestDescription={[
          { value: "Shallow tracks in soft soil or garden beds"},
          { value: "Small, rounded holes near foundations or pathways"},
          { value: "Occasional sightings during early morning or evening"},
          { value: "Disrupted landscaping or potted plants"},
          { value: "Pet agitation near soil areas or fencing"},
          { value: "Dry, scale-like skin sheds in shaded corners"},
        ]}
        List={[]}


        Int2=""
        descInt2=""

        Heading2="Where Sand Boas Nest"
        desc2="These snakes, who are masters of hiding, favor warm, dry, and peaceful environments."
        ListDesc2="Common nesting sites close to homes or buildings include:"
        Enddesc2="Although they don’t pose the same risk as venomous snakes, having a Sand Boa indoors can still be a concern, especially in homes with pets or young children."

        habits={[
          "Sandy garden edges or under decorative stones",
          "Beneath wooden decks or planter boxes",
          "Unused garden sheds or items stored beneath",
          "Dry crawlspaces with loose soil access",
          "Near HVAC foundations or backyard drains",
          "Piles of dried mulch or compost",
        ]}


        Heading3="How Accurate Pest Control Handles Sand Boa Removal"
        desc3="For the safe removal of Sand Boas from your house, Accurate Pest Control Services LLC Dubai, provides quick and compassionate solutions. Our staff use advanced tools and restrictive techniques to ensure results because we are aware of their nesting behaviors."
        ListDesc3="Our service process includes:"       
        Enddesc3="We ensure that all treatments are environmentally responsible and do not involve the use of harmful chemicals, keeping your home safe for kids and pets"
        habitat={[
          { value: "On-site inspection to locate and confirm Sand Boa presence"},
          { value: "Use of the best snake trap equipment for safe, live capture"},
          { value: "Relocation of the snake away from residential zones"},
          { value: "Identification and sealing of soil entry points or gaps"},
          { value: "Tips for maintaining your garden and outdoor space to avoid nesting in the future"},
          { value: "Optional follow-up visits for properties in sandy or rural zones"},
        ]}





        Heading4="Did You Spot a Snake?"
        desc4="If you suspect a Sand Boa or any other snake around your home, don’t attempt removal yourself. Contact our trained experts for fast, secure, and professional support."
        ListDesc4=""
        Enddesc4=""
        threats={[]}

        Heading5=""
        desc5=""
        additional={[]}


        ctaHeading="Book Your Sand Boa Removal Today"
        ctaText={`Trust Accurate Pest Control Services LLC Dubai, to handle all reptile concerns with care and precision. For expert snake removal anywhere in Dubai.`}
        ctaButtonText="Book Sand Boa Control"
      />
      <Footer />
    </>
  );
};

export default SandBoa;
