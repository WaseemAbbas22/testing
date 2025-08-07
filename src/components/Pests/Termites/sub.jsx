import PestInfoPage from "../PestInfoPage";
import TopBar from "../../TopBar";
import Navbar from "../../Navbar";
import ServicesHero from "../../Services/ServicesHero";
import RodentHeroImg from "@/assets/Pests/Rodent/rodenthero.svg";
//import React from "react";  

const SubterraneanTermites = () => {
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
      description={`The house mouse is one of the most common and troublesome pests found in homes and commercial buildings worldwide.\nSmall but persistent, these rodents easily adapt to indoor environments and can multiply rapidly if not controlled.`}
      pestDescription={[
        { label: "Color", value: "Light brown to gray with a lighter-colored belly" },
        { label: "Legs", value: "4" },
        { label: "Shape", value: "Small slender body with a pointed nose and large ears" },
        { label: "Size", value: "Body length about 2.5 – 4 inches long; tail about the same as body; weight ranges from 0.5–1 ounce" },
        { label: "Antennae", value: "None" },
        { label: "Region", value: "Found globally, especially in human dwellings" },
      ]}
      habits={[
        "House mice are active mostly at night, searching for food and nesting material.",
        "They are curious by nature and will explore new spaces quickly.",
        "They build nests in hidden, undisturbed areas using shredded paper, fabric, or insulation.",
        "Mice prefer to feed on grains and seeds but will eat almost anything available.",
      ]}
      habitat={[
        "Indoors, house mice live in walls, cabinets, attics, basements, and storage areas close to food and water sources.",
        "Outdoors, they can nest in fields, gardens, and garages but usually move indoors during cold weather.",
        "They can squeeze through holes as small as a dime to gain entry into buildings.",
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

export default SubterraneanTermites;
