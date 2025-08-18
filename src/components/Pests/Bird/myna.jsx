import PestInfoPage from "../PestInfoPage";
import TopBar from "../../TopBar";
import Footer from "@/components/Footer";
import Navbar from "../../Navbar";
import ServicesHero from "../../Services/ServicesHero";
import RodentHeroImg from "@/assets/Pests/Bird/mynahero.webp";
//import React from "react";

const CommonMyna = () => {
  return (
    <>
      <TopBar />
      <Navbar />
      <ServicesHero
        title="Common Myna"
        breadcrumb="Home > Pests > Details"
        bgImg={RodentHeroImg}
      />
      <PestInfoPage
        title="About the Common Myna"
        scientificName=""
        description={`One of the most common birds in Dubai is the Common Myna, which can be identified by its brown body, black head, and bright yellow legs and eye patches. Though these birds may seem harmless at first glance, they are invasive and can create serious problems in urban and suburban environments. Being aggressive nesters, Mynas frequently defeat local bird species for nesting locations and food.
In commercial areas, especially food establishments or residential balconies, their droppings can damage surfaces, transmit disease, and create health code violations. Their loud, harsh calls can also become a persistent nuisance for homeowners and business owners alike.`}
        
        Int=""
        descInt=""
       
        Heading1="Signs of a Myna Bird Infestation"
        desc1=""
        ListDesc1=""
        Enddesc1="Their presence can lead to sanitation concerns, especially near HVAC units, food prep areas, or balconies where droppings can corrode surfaces or invite parasites."
        pestDescription={[
          { value: "Nesting materials found in gutters, rooftops, or signboards"},
          { value: "Drops that settled on pavements, window steps, or air conditioners"},
          { value: "Aggressive bird behavior around food waste or pet bowls"},
          { value: "Damaged outdoor wiring or blocked drainage systems"},
        ]}
        List={[]}


        Int2=""
        descInt2=""

        Heading2="Where Common Mynas Nest"
        desc2="Because of their extreme flexibility, mynas often grow in environments that have been changed by humans."
        ListDesc2="Typical nesting or perching areas include:"
        Enddesc2="Their nests are built from twigs, paper, and plastic, often leading to clogs or fire hazards."

        habits={[
          "Rooftop air conditioning units and vents",
          "Billboards, signboards, and building ledges",
          "Cracks in walls or under eaves",
          "Electric poles, balconies, and garden trees",
          "Open garages or warehouse structures",
          "Parking lots and open trash bins",
        ]}


        Heading3="How Accurate Pest Control Treats Myna Bird Infestations"
        desc3="We at Accurate Pest Control Services LLC Dubai use responsible and efficient bird control techniques designed specifically for urban birds in Dubai. By using gentle methods, we hope to discourage future nesting in addition to removing current birds."
        ListDesc3="Our services include:"       
        Enddesc3="All products and methods are compliant with Dubai municipality wildlife protection guidelines, ensuring safe and legal removal."
        habitat={[
          { value: "Installation of anti roosting spikes and shock tracks"},
          { value: "Bird netting for rooftops, vents, and balconies"},
          { value: "Motion-activated bird repellents and sonic deterrents"},
          { value: "Cleaning and disinfecting affected surfaces"},
          { value: "Nest removal and sealing of entry points"},
          { value: "Long-term monitoring and maintenance contracts"},
        ]}





        Heading4=""
        desc4=""
        ListDesc4=""
        Enddesc4=""
        threats={[]}

        Heading5=""
        desc5=""
        additional={[]}


        ctaHeading="Book Your Common Myna Control Service"
        ctaText={`Don’t let birds compromise your comfort or property. Contact Accurate Pest Control LLC Dubai for safe, discreet, and efficient bird control in Dubai.`}
        ctaButtonText="Call now for a free inspection "
      />
      <Footer />
    </>
  );
};

export default CommonMyna;
