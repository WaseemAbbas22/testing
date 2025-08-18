import PestInfoPage from "../PestInfoPage";
import TopBar from "../../TopBar";
import Navbar from "../../Navbar";
import ServicesHero from "../../Services/ServicesHero";
import RodentHeroImg from "@/assets/Pests/Rodent/norwayhero.webp";
import Footer from "@/components/Footer";
//import React from "react";

const NorwayRat = () => {
  return (
    <>
      <TopBar />
      <Navbar />
      <ServicesHero
        title="Norway Rat (Rattus norvegicus)"
        breadcrumb="Home > Pests > Details"
        bgImg={RodentHeroImg}
      />
      <PestInfoPage
        title="About Norway Rat"
        scientificName=" (Rattus norvegicus)"
        description={`The Norway rat, also called the brown rat or sewer rat, is a large, aggressive rodent known for its destructive habits and strong survival instincts. Commonly found in sewers, basements, and ground level structures, this pest poses a major health and hygiene threat in urban areas. Due to their resilience, Norway rats require comprehensive pest solutions to eliminate them effectively.`}
        Heading1="Identifying the Norway Rat"
        Enddesc1="These rats are commonly associated with unsanitary environments and are often found in places where Dubai insects also thrive, such as drains, trash areas, and poorly maintained yards."
        pestDescription={[
          { label: "Color:", value: "Brown to gray with a pale underside" },
          {
            label: "Length:",
            value:
              "7–10 inches in length with a stout, scaly tail that’s shorter than its body.",
          },
          { label: "Weight:", value: "200–500 grams" },
          { label: "Shape:", value: "Stocky build, small ears, blunt nose" },
          {
            label: "Behavior:",
            value: "Strong swimmers and burrowers, active mostly at night",
          },
        ]}
        List={[]}
        Heading2="Risks to Health and Property"
        desc2="Norway rats are one of the most hazardous rodents to coexist with:"
        Enddesc2="In homes, warehouses, and commercial kitchens, these pests multiply rapidly and can lead to dangerous infestations if not addressed through home fumigation or other professional methods."
        habits={[
          "Spread diseases like rat bite fever, leptospirosis, and hantavirus",
          "Contaminate surfaces and food with urine and excrement",
          "Chew through insulation, pipelines, and wires, causing water damage and fire",
          "Undermine structural foundations with their deep burrowing systems",
        ]}
        Heading3="Infestation Signs and Nesting Sites"
        desc3="If you observe: You may be struggling with a Norway rat issue."
        Enddesc3="They prefer lower levels of buildings and often nest in garbage piles, basements, and sewer systems. They coexist with other Dubai insects, making integrated pest management essential."
        habitat={[
          { value: "Gnaw marks on food containers or wooden surfaces" },
          { value: "Burrows along walls, under floors, or around foundations" },
          {
            value:
              "Greasy smear marks and large droppings, bigger than those of mice",
          },
          { value: "Nocturnal scratching, squeaking, or movement sounds" },
        ]}
        additional={[]}
        Heading4="Effective Pest Management"
        desc4="Eliminating Norway rats requires more than just traps or repellents. Here’s how professionals handle it:"
        threats={[
          "Comprehensive inspection and sealing of entry points",
          "Use of targeted baiting stations and traps",
          "Home fumigation for high level infestations",
          "Frequent inspections by a licensed rat control",
          "Sustainable pest management methods for long-term control.",
        ]}
        ctaHeading="Eliminate Norway Rats Before They Wreck Your Property"
        ctaText={`Noticing burrows, gnaw marks, or droppings in basements or near drains? Dubai Insects are destructive and quick to multiply. Our team provides expert removal and prevention to keep your space safe.`}
        ctaButtonText="Schedule Your Free Norway Rat Inspection Today"
      />
      <Footer />
    </>
  );
};

export default NorwayRat;
