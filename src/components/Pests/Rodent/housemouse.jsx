import PestInfoPage from "../PestInfoPage";
import TopBar from "../../TopBar";
import Navbar from "../../Navbar";
import ServicesHero from "../../Services/ServicesHero";
import RodentHeroImg from "@/assets/Pests/Rodent/rodenthero.svg";
//import React from "react";  

const HouseMouse = () => {
  return (
    <>
    <TopBar />
            <Navbar />
            <ServicesHero
              title="Trusted Rodent Exterminator Services"
              breadcrumb="Home > Pests > Details"
              bgImg={RodentHeroImg}
            />
    <PestInfoPage
      title="About House Mouse"
      scientificName="Mus musculus"
      description={`The house mouse is a tiny but highly destructive rodent, commonly found in urban environments, including homes, restaurants, and warehouses. Known for its adaptability and rapid reproduction, the house mouse poses serious health and hygiene risks if not properly managed. Quick pest control is essential to prevent infestation and structural damage.`}
      
      Heading1="Identifying the House Mouse"
      pestDescription={[
        { label: "Color", value: "Light brown to gray with a lighter-colored belly" },
        { label: "Legs", value: "4" },
        { label: "Shape", value: "Small slender body with a pointed nose and large ears" },
        { label: "Size", value: "Body length about 2.5 – 4 inches long; tail about the same as body; weight ranges from 0.5–1 ounce" },
        { label: "Antennae", value: "None" },
        { label: "Region", value: "Found globally, especially in human dwellings" },
      ]}


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
        { label: "Indoors:", value: "behind appliances, in attics, basements, and cupboards" },
        { label: "Outdoors:", value: " in sheds, garages, gardens but often enter homes during colder months" },
        { label: "", value: "Near food and water sources: kitchens, storage areas, and pantries" },
       ]}


      threats={[
        "House mice contaminate food with droppings and urine, which can spread harmful bacteria like salmonella.",
        "Their constant gnawing damages furniture, food packaging, electrical wiring, and insulation – increasing fire hazards.",
        "Mice can trigger allergies and asthma, especially in children and sensitive individuals.",
        "Due to rapid reproduction, a small mouse problem can quickly turn into a large infestation.",
      ]}
      ctaHeading="Protect Your Home from House Mice"
      ctaText={`If you notice droppings, gnaw marks, or scratching noises in your home, don't wait for the problem to grow.\nOur professional pest control team offers safe, effective, and discreet house mouse removal to protect your family and property.`}
      ctaButtonText="Call us today for a free inspection"
    />
    </>
  );
};

export default HouseMouse;
