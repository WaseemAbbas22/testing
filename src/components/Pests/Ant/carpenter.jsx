import PestInfoPage from "../PestInfoPage";
import TopBar from "../../TopBar";
import Navbar from "../../Navbar";
import ServicesHero from "../../Services/ServicesHero";
import RodentHeroImg from "@/assets/Pests/Ant/Cahero.webp";
import Footer from "@/components/Footer";
//import React from "react";

const CarpenterAnt = () => {
  return (
    <>
      <TopBar />
      <Navbar />
      <ServicesHero
        title="Carpenter Ants"
        breadcrumb="Home > Pests > Details"
        bgImg={RodentHeroImg}
      />
      <PestInfoPage
        title="About Carpenter Ants"
        scientificName=""
        description={`Carpenter ants are large ants that are known to bore tunnels into wood in order to build nests. While they don't consume wood like termites, their excavation can cause serious structural damage over time. Often black or dark brown, these ants are commonly found in wooden structures, wall voids, and damp areas. Quick identification and treatment are essential to avoid costly repairs.`}
        Heading1="Signs of a Carpenter Ant Infestation"
        desc1="Although their concealment, and their damage leaves obvious signs:"
        pestDescription={[
          {
            label: "",
            value: "Sawdust-like shavings (frass) near wood surfaces",
          },
          {
            label: "",
            number: "",
            value: "Hollow-sounding wood or rustling noises in walls",
          },
          {
            label: "",
            value: "Large black ant sightings, especially at night",
          },
          {
            label: "",
            value: "Winged ants appearing indoors during spring or summer",
          },
          { label: "", value: "Multiple nests or satellite colonies" },
        ]}
        List={[]}
        
        Heading2="Where They Nest and How They Spread"
        desc2=""
        ListDesc2="Carpenter ants prefer damp, decaying wood and often build nests in:"
        Enddesc2="These ants cut through wood to build their nests rather than eating it like termites do. In a comparison of carpenter ants vs termites, termites consume wood, while carpenter ants remove it to make space."
        habits={[
          "Wooden beams, window frames, and attic spaces",
          "Under decks, sheds, or roof voids",
          "Moist areas near leaky pipes or gutters",
        ]}
        Heading3="Dangers and Structural Concerns"
        desc3="A group of ants might seem harmless at first, but when it comes to carpenter ants, they can:"
        // habitat={[
        //   "Compromise the integrity of wooden structures",
        //   "Spread to multiple parts of your home or business",
        //   "Go unnoticed for months while nesting deep inside walls",
        //   "Be mistaken for other ant species, delaying effective treatment",
        // ]}
        habitat={[
          {
            label: "",
            value: "Compromise the integrity of wooden structures",
          },
          {
            label: "",
            value: "Spread to multiple parts of your home or business",
          },
          {
            label: "",
            value: "Go unnoticed for months while nesting deep inside walls",
          },
          {
            label: "",
            value:
              "Be mistaken for other ant species, delaying effective treatment",
          },
        ]}

        additional={[]}
        Heading4="Effective Carpenter Ant Control"
        desc4="Controlling carpenter ants requires more than bait. The process often includes:"
        Enddesc4=""
        threats={[
          "Locating and eliminating both parent and satellite nests",
          "Sealing entry points and repairing water-damaged wood",
          "Identifying the black carpenter ant queen, as colonies rebuild if she remains",
          "Using safe treatments targeted to nesting zones",
          "In cases of outdoor nesting, certain specialized control strategies may also be adapted",
        ]}
        ctaHeading="Protect Your Property from Carpenter Ant Damage"
        ctaText={`Don’t let carpenter ants silently damage your property. Accurate Pest Control Services LLC Dubai, offers expert detection and elimination to stop them early.`}
        ctaButtonText="Book a Carpenter Ant Inspection Today"
      />
      <Footer />
    </>
  );
};

export default CarpenterAnt;
