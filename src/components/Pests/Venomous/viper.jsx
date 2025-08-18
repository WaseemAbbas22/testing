import PestInfoPage from "../PestInfoPage";
import TopBar from "../../TopBar";
import Footer from "@/components/Footer";
import Navbar from "../../Navbar";
import ServicesHero from "../../Services/ServicesHero";
import RodentHeroImg from "@/assets/Pests/Venomous/arabianhero.webp";
//import React from "react";

const  ArabianHornedViper = () => {
  return (
    <>
      <TopBar />
      <Navbar />
      <ServicesHero
        title="Arabian Horned Viper"
        breadcrumb="Home > Pests > Details"
        bgImg={RodentHeroImg}
      />
      <PestInfoPage
        title="About the Arabian Horned Viper"
        scientificName=""
        description={`The Arabian Horned Viper is a venomous desert-dwelling snake known for the distinctive horn-like scales above its eyes and its ability to move quickly across sandy terrain. Native to the arid regions of the Arabian Peninsula, this viper can occasionally be found near the outskirts of Dubai, especially in desert-adjacent communities, construction zones, or farms.
Because of its attack hunting technique and natural hiding, the Arabian Horned Viper frequently fits in with its surroundings. While it typically avoids human contact, accidental encounters can occur, especially at night or early morning. Due to its venomous nature, immediate professional response is critical.`}
        
        Int=""
        descInt=""
       
        Heading1="Signs of an Arabian Horned Viper Encounter"
        desc1="Spotting one of these elusive creatures can be challenging, but watch out for these telltale signs:"
        ListDesc1=""
        Enddesc1="Even a single sighting should be treated with urgency, as this viper’s bite can be medically significant."
        pestDescription={[
          { value: "Unique winding or sidewinding tracks in soft sand"},
          { value: "Burrowed sand pits or indentations near walls and garden edges"},
          { value: "Sudden snake sightings near rocks, storage piles, or air conditioning units"},
          { value: "Night-time pet distress or barking at shadowed areas"},
          { value: "Remains of small prey (lizards, rodents) near outdoor corners"},
          { value: "Shedding skin or droppings in shaded, rarely visited areas"},
        ]}
        List={[]}


        Int2=""
        descInt2=""

        Heading2="Where Arabian Horned Vipers Hide"
        desc2="These snakes prefer hot, dry environments and stay hidden during the day."
        ListDesc2="Common hiding spots include:"
        Enddesc2="Their ability to burrow or remain motionless makes them hard to detect until it’s too late."

        habits={[
          "Sandy garden borders and landscaping features",
          "Gaps beneath rocks, outdoor steps, or paving slabs",
          "Unsealed perimeter walls or foundation cracks",
          "Unused storerooms or garages with dusty corners",
          "Beneath outdoor furniture, wood piles, or planter boxes",
          "Construction rubble near the property’s edge",
        ]}


        Heading3="How Accurate Pest Control Handles Arabian Horned Viper Cases"
        desc3="Every situation involving dangerous snakes is taken carefully at Accurate Pest Control Services LLC Dubai. Strict safety procedures are followed by our qualified workers to ensure quick containment, removal, and future access prevention."
        ListDesc3="Here's our approach:"       
        Enddesc3="We also educate residents on desert snake behavior and provide seasonal alerts during peak movement months."
        habitat={[
          { value: "Emergency inspection to confirm species and identify habitat risks"},
          { value: "Specialized snake-handling and live-removal equipment used for safe extraction"},
          { value: "Habitat disruption and outdoor modification to prevent re-nesting"},
          { value: "Application of targeted pest control treatment to deter prey and reduce attraction"},
          { value: "Sealing of ground-level entry points and ventilation gaps"},
          { value: "Optional long-term snake monitoring for properties near sandy or desert terrain"},
        ]}





        Heading4="Don’t Risk a Bite. Act Fast."
        desc4=" If you spot a snake with horn-like eyes or sidewinding tracks, call us immediately. Do not try to remove it yourself."
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

export default ArabianHornedViper;
