import PestInfoPage from "../PestInfoPage";
import TopBar from "../../TopBar";
import Navbar from "../../Navbar";
import ServicesHero from "../../Services/ServicesHero";
import RodentHeroImg from "@/assets/Pests/Rodent/househero.webp";
import Footer from "@/components/Footer";
//import React from "react";

const HouseMouse = () => {
  return (
    <>
      <TopBar />
      <Navbar />
      <ServicesHero
        title="House Mouse (Mus musculus)"
        breadcrumb="Home > Pests > Details"
        bgImg={RodentHeroImg}
      />
      <PestInfoPage
        title="About House Mouse"
        scientificName="Mus musculus"
        description={`The house mouse is a tiny but highly destructive rodent, commonly found in urban environments, including homes, restaurants, and warehouses. Known for its adaptability and rapid reproduction, the house mouse poses serious health and hygiene risks if not properly managed. Quick pest control is essential to prevent infestation and structural damage.`}
        Heading1="Identifying the House Mouse"
        pestDescription={[
          {
            label: "Color:",
            value: "Light brown to gray with a lighter-colored belly",
          },
          { label: "Legs:", value: "4" },
          {
            label: "Shape:",
            value: "Small slender body with a pointed nose and large ears",
          },
          {
            label: "Size:",
            value:
              "Body length about 2.5 – 4 inches long; tail about the same as body; weight ranges from 0.5–1 ounce",
          },
          { label: "Antennae:", value: "None" },
          {
            label: "Region:",
            value: "Found globally, especially in human dwellings",
          },
        ]}
        List={[]}
        Heading2="Damage and Health Hazards"
        desc2="House mice can cause major problems that require immediate rodent treatment:"
        habits={[
          "Contaminate food and surfaces with droppings and urine",
          "Chew wires and insulation, creating electrical hazards",
          "Spread harmful bacteria like salmonella",
          "Trigger asthma and allergies, particularly in children",
        ]}
        Heading3="How They Enter and Survive"
        desc3="Mice enter buildings through openings as small as 6 mm. Typically, they live:"
        habitat={[
          {
            label: "Indoors:",
            value: "behind appliances, in attics, basements, and cupboards",
          },
          {
            label: "Outdoors:",
            value:
              " in sheds, garages, gardens but often enter homes during colder months",
          },
          {
            label: "",
            value:
              "Near food and water sources: kitchens, storage areas, and pantries",
          },
        ]}
        additional={[]}
        Heading4="Integrated Pest Solutions"
        desc4="While mice are the primary concern, their presence can also attract other pests like wasps due to shared shelter or food sources."
        threats={[
          "Monitoring, exclusion techniques, and traps are crucial for effective pest control.",
          "Cleaning, sealing entryways, and ongoing measures are key parts of rodent treatment.",
          "If wasps nest in the same area, you may need to eliminate the threat.",
          "Avoid painful stings and damage by hiring a professional wasp exterminator.",
        ]}
        ctaHeading="Keep Your Home Safe from House Mice"
        ctaText={`Do you see chewed cables, hear scratching noises, or notice droppings? Act fast. Our expert team provides quick, discreet, and effective house mouse removal to safeguard your home and health.`}
        ctaButtonText="Schedule Your Free Mouse Inspection Today"
      />
      <Footer />
    </>
  );
};

export default HouseMouse;
