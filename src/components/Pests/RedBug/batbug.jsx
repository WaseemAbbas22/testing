import PestInfoPage from "../PestInfoPage";
import TopBar from "../../TopBar";
import Navbar from "../../Navbar";
import ServicesHero from "../../Services/ServicesHero";
import RodentHeroImg from "@/assets/Pests/RedBug/Bathero.webp";
//import React from "react";

const BatBug = () => {
  return (
    <>
      <TopBar />
      <Navbar />
      <ServicesHero
        title="Bat Bugs (Cimex adjunctus)"
        breadcrumb="Home > Pests > Details"
        bgImg={RodentHeroImg}
      />
      <PestInfoPage
        title="About Bat Bugs"
        scientificName="(Cimex adjunctus)"
        description={`Bat bugs look almost identical to baby bed bugs, which often leads to misidentification. Though similar to Cimex lectularius, they primarily feed on bats and are usually found in attics, wall voids, or near chimneys where bats nest. However, when bats leave or die, bat bugs migrate indoors and start biting humans. They don’t spread disease, but can cause itching, irritation, and allergic reactions, requiring prompt action and best pest control practices.`}
        Heading1="Signs of a Bat Bug Infestation"
        desc1="While they resemble bed bugs, key signs of bat bugs include:"
        pestDescription={[
          {
            label: "",
            value:
              "Bites similar to those of bed bugs, especially near the upper body",
          },
          {
            label: "",
            value: "Presence of bugs near attics, ceiling lights, or vents",
          },
          {
            label: "",
            value: "Discovery of bat nesting sites in the structure",
          },
          { label: "", value: "Comparable to the bed bug life cycle stages" },
          {
            label: "",
            value:
              "Persistent bites despite bed bug treatments (a clue it's bat bugs)",
          },
        ]}
        List={[]}
        Heading2="Where They Hide and How They Spread"
        desc2="Bat bugs typically hide in:"
        habits={[
          "Cracks and crevices near the ceilings or upper walls",
          "Attics and insulation materials",
          "Around old or inactive bat roosting sites",
          "In ducts or air vents where bats previously nested",
        ]}
        Heading3="Health Concerns and Irritation"
        desc3="Though bat bugs do not transmit disease, they still cause:"
        habitat={[
          { value: "Red, itchy welts and irritation" },
          { value: "Anxiety, stress, and sleep disruption" },
          { value: "Ongoing infestations of bat colonies are not removed" },
          {
            value:
              "Confusion with standard bed bugs, delaying proper pest control UAE action",
          },
        ]}
        additional={[]}
        Heading4="Effective Bat Bug Control"
        desc4="The removal of the bat species and any remaining bat bugs is necessary for an effective therapy."
        threats={[
          "Sealing entry points to exclude bats",
          "Professional attic and wall fumigation if infestation is severe",
          "Vacuuming and heat/steam treatments in affected areas",
          "Monitoring for remaining bugs even after host removal",
          "Choosing the best pest control teams that understand the distinction between bat bugs and bed bugs",
        ]}
        ctaHeading="Fast & Safe Bat Bug Treatment in UAE"
        ctaText={`Still getting bitten after bed bug treatments? It might be bat bugs. Our expert team offers targeted solutions backed by years of experience in pest control UAE. We identify, eliminate, and prevent bat bug infestations from returning.`}
        ctaButtonText="Schedule Your Free Bat Bug Inspection Today"
      />
    </>
  );
};

export default BatBug;
