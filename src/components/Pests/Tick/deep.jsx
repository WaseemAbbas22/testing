import PestInfoPage from "../PestInfoPage";
import TopBar from "../../TopBar";
import Footer from "@/components/Footer";
import Navbar from "../../Navbar";
import ServicesHero from "../../Services/ServicesHero";
import RodentHeroImg from "@/assets/Pests/Tick/deerhero.webp";
//import React from "react";

const DeepTick = () => {
  return (
    <>
      <TopBar />
      <Navbar />
      <ServicesHero
        title="Deer Tick"
        breadcrumb="Home > Pests > Details"
        bgImg={RodentHeroImg}
      />
      <PestInfoPage
        title="About the Deer Tick"
        scientificName=""
        description={`The Deer Tick, also known as the black-legged tick, is a tiny parasitic arachnid responsible for spreading serious diseases like Lyme disease. In Dubai’s green areas, villa gardens, and pet-friendly communities, these ticks pose a hidden but growing threat, especially in landscaped properties, parks, and animal shelters.
Even being small, deer ticks can be dangerous due to their ability to move silently and consume waste.A tick insect bite may go unnoticed at first, but can lead to significant irritation, infection, or long-term illness if not identified early. Prompt inspection and targeted control are essential to protect your health and home.`}
        
        Int=""
        descInt=""
       
        Heading1="Signs of a Deer Tick Infestation"
        desc1="These ticks are often active during cooler parts of the day or in shady areas."
        ListDesc1="Signs may include:"
        Enddesc1="Ticks are expert hiders, clinging to clothing, fur, or skin and embedding themselves for long periods."
        pestDescription={[
          {value:"Itchy or inflamed bite marks, particularly on ankles or behind knees"},
          {value:"Ticks attached to pet fur or bedding"},
          {value:"Unusual scratching or discomfort in animals"},
          {value:"Small reddish-brown insects on curtains, walls, or carpets"},
          {value:"Tick clusters in tall grass or garden soil"},
        ]}
        List={[]}


        Int2=""
        descInt2=""

        Heading2="Where They Hide"
        desc2="Deer Ticks prefer shaded, humid environments and areas frequented by animals or humans."
        ListDesc2="Common hiding spots include:"
        Enddesc2="Even a clean home can fall victim to ticks brought in by pets or outdoor visitors."

        habits={[
          "Dense garden vegetation or long grass",
          "Pet bedding, kennels, and shaded corners of yards",
          "Under wooden decks, logs, or garden furniture",
          "Cracks in flooring or carpets in pet-accessible areas",
          "Piles of leaves, compost, or overgrown shrubs",
          "Around water hoses, fountains, or pet drinking areas",
        ]}



        Heading3=""
        desc3=""
        ListDesc3=""       
        Enddesc3=""
        habitat={[]}





        Heading4="How Accurate Pest Control Handles Deer Tick Removal"
        desc4="Our expert team is trained in eco-safe treatments and long-term tick elimination strategies."
        ListDesc4="Our process includes:"
        Enddesc4="Our control plans are safe for children, pets, and the environment, yet strong enough to break the tick lifecycle and stop repeat infestations."
        threats={[
          "Full-property inspection to identify tick nests, habitats, and hosts",
          "Safe application of approved pesticides and repellents for tick zones",
          "Treatment of pet-accessible areas using non-toxic, vet-friendly solutions",
          "Environmental modifications such as trimming overgrowth and removing debris",
          "Sealing of potential re-entry zones and nesting gaps",
          "Scheduled follow-up visits during peak tick season",
        ]}

        Heading5="Safety First"
        desc5="If you suspect a Deer Tick infestation, avoid scratching the affected area and seek professional help quickly. Don’t attempt to remove embedded ticks without proper tools or technique, as improper removal can lead to infection."
        additional={[]}


        ctaHeading="Book Your Deer Tick Control Service Now"
        ctaText={`Ticks are silent threats, but we’re here to eliminate them. Contact Accurate Pest Control Services LLC Dubai today for swift and expert Deer Tick removal across Dubai.`}
        ctaButtonText="Book Deer Tick Removal"
      />
      <Footer />
    </>
  );
};

export default DeepTick;
