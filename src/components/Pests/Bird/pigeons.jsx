import PestInfoPage from "../PestInfoPage";
import TopBar from "../../TopBar";
import Footer from "@/components/Footer";
import Navbar from "../../Navbar";
import ServicesHero from "../../Services/ServicesHero";
import RodentHeroImg from "@/assets/Pests/Bird/pigeonhero.webp";
//import React from "react";

const Pigeons = () => {
  return (
    <>
      <TopBar />
      <Navbar />
      <ServicesHero
        title="Pigeons"
        breadcrumb="Home > Pests > Details"
        bgImg={RodentHeroImg}
      />
      <PestInfoPage
        title="About Pigeons"
        scientificName=""
        description={`Pigeons are one of the most common nuisance birds found across Dubai. Known for their adaptability, they thrive in both residential and commercial environments. Often nesting on building ledges, rooftops, and air conditioning units, pigeons pose serious health risks due to their droppings, feathers, and nesting debris.
Each pigeon egg laid can lead to more long-term nesting habits if not addressed early. These birds are persistent and highly territorial, returning to the same nesting sites repeatedly unless proper deterrents are installed.`}
        
        Int=""
        descInt=""
       
        Heading1="Signs of a Pigeon Infestation"
        desc1=""
        ListDesc1=""
        Enddesc1="Left untreated, pigeons can carry mites, fungi, and bacteria into living or working spaces."
        pestDescription={[
          { value: "White droppings on ledges, windows, or driveways"},
          { value: "Nests made of sticks, feathers, and debris under roofs or balconies"},
          { value: "Foul odor from accumulated waste"},
          { value: "Frequent cooing sounds, especially in the early morning"},
          {value:"Damaged ventilation systems or clogged drains"},
          {value:"Visible pigeon egg clusters in hidden areas"},
        ]}
        List={[]}


        Int2=""
        descInt2=""

        Heading2="Pigeon Lifespan & Reproduction"
        desc2="A typical pigeon lifespan is 3 to 5 years in the wild, but it can stretch up to 15 years in protected urban environments. Pigeons reproduce year round in Dubai’s climate, with each female laying 1–3 eggs per clutch. With such rapid reproduction and long life, infestations can grow fast if not professionally managed."
        ListDesc2=""
        Enddesc2=""

        habits={[]}


        Heading3="How Accurate Pest Control Handles Pigeon Problems"
        desc3="Our expert bird control technicians follow a proven system to deal with pigeons safely and humanely:"
        ListDesc3=""       
        Enddesc3="Every treatment is tailored to your property's needs and the level of the infestation."
        habitat={[
          { value: "Site inspection to assess nesting zones and damage"},
          { value: "Nest and egg removal in compliance with UAE guidelines"},
          { value: "Installation of physical deterrents like spikes and nets"},
          { value: "Use of eco safe pigeon repellent systems"},
          { value: "Sanitization and disinfection of contaminated areas"},
          { value: "Long-term exclusion strategies to prevent return"},
        ]}





        Heading4="The Importance of Pigeon Control"
        desc4="Pigeons may appear harmless at first, but in densely populated areas like Dubai, they can quickly become a major problem. In addition to being ugly, their droppings are extremely acidic, which destroys metal fittings, damages paint, and stains windows. All of this may eventually require expensive maintenance and repairs."
        ListDesc4=""
        Enddesc4=""
        threats={[]}

        Heading5=""
        desc5=""
        additional={[]}


        ctaHeading="Schedule Your Pigeon Control Today"
        ctaText={`Call Accurate Pest Control Services LLC  today for affordable and effective pigeon removal in Dubai. Let’s protect your space from damage and health risks caused by persistent flocks.`}
        ctaButtonText="Book Your Pigeon Service Now"
      />
      <Footer />
    </>
  );
};

export default Pigeons;
