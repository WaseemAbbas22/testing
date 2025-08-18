import PestInfoPage from "../PestInfoPage";
import TopBar from "../../TopBar";
import Navbar from "../../Navbar";
import ServicesHero from "../../Services/ServicesHero";
import RodentHeroImg from "@/assets/Pests/Rodent/Roofhero.webp";
import Footer from "@/components/Footer";

//import React from "react";

const RoofRat = () => {
  return (
    <>
      <TopBar />
      <Navbar />
      <ServicesHero
        title="Roof Rat (Rattus Rattus)"
        breadcrumb="Home > Pests > Details"
        bgImg={RodentHeroImg}
      />
      <PestInfoPage
        title="About Roof Rat"
        scientificName="(Rattus Rattus)"
        description={`The roof rat, also known as the black rat or ship rat, is a sleek and agile rodent commonly found in urban areas. Unlike its cousin the Norway rat, the roof rat prefers elevated spaces and nests in roofs, attics, trees, and false ceilings. Its presence poses serious health and safety risks, and immediate pest control for rats is essential to prevent damage and contamination.`}
        Heading1="Identifying the Roof Rat"
        pestDescription={[
          {
            label: "Color:",
            value: "Dark brown or black with a brighter underside",
          },
          {
            label: "Body Length:",
            value: "6 to 8 inches; tail length: longer and scaly",
          },
          {
            label: "Shape:",
            value: "Slim figure ,big ears, sharp nose and big eyes.",
          },
          { label: "Weight:", value: "Around 5–10 ounces" },
          {
            label: "Habits:",
            value:
              "Excellent climbers, active mostly at night, prefer warm and elevated nesting sites",
          },
        ]}
        List={[]}
        Heading2="Damage and Health Concerns"
        desc2="Roof rats are dangerous rodents that are more than simply annoying. They can:"
        Enddesc2="Although they reproduce fast and are unclear an infestation can quickly become out of control."
        habits={[
          "Chew through electrical wires, creating fire risks",
          "Contaminate food with droppings and urine",
          "Spread illnesses like rat-bite fever, salmonella, and leptospirosis",
          "Destroy insulation, stored materials, and structural components",
        ]}
        Heading3="Entry Points and Nesting Habits"
        desc3="Roof rats typically enter buildings through:"
        Enddesc3="Once inside, they build nests in insulation, attics, and storage boxes. Unlike ground dwelling rats, they rarely nest in sewers or basements. Professional pest services can assess these hard-to-reach areas for signs of activity and nesting."
        habitat={[
          { label: "", value: "Gaps in roofs, vents, and eaves" },
          { label: "", value: "Tree branches or utility lines close to homes" },
          { label: "", value: "Damaged soffits and loose tiles" },
        ]}
        additional={[]}
        Heading4="Effective Control and Prevention"
        desc4="A multi-layered method is necessary to manage a roof rat infestation:"
        threats={[
          "Use baited rat traps along high ledges, attic beams, and rafters",
          "Seal entry points, prune trees, and remove roof debris",
          "Engage expert pest control for rats for proper assessment and treatment",
          "Sanitize affected areas and monitor for new activity",
        ]}
        ctaHeading="Stop Roof Rats Before They Take Over"
        ctaText={`If you hear noises in the attic or find droppings along rafters and beams, you could have a rodent problem. Our trained team delivers safe, targeted removal to protect your home from damage and disease.`}
        ctaButtonText="Book a Free Roof Rat Inspection Today"
      />
      <Footer />
    </>
  );
};

export default RoofRat;
