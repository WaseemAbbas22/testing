import PestInfoPage from "../PestInfoPage";
import TopBar from "../../TopBar";
import Navbar from "../../Navbar";
import ServicesHero from "../../Services/ServicesHero";
import RodentHeroImg from "@/assets/Pests/Cockroch/Gehero.webp";
import Footer from "@/components/Footer";
//import React from "react";

const GermanCockroach = () => {
  return (
    <>
      <TopBar />
      <Navbar />
      <ServicesHero
        title="German Cockroach"
        breadcrumb="Home > Pests > Details"
        bgImg={RodentHeroImg}
      />
      <PestInfoPage
        title="About German Cockroach"
        scientificName=""
        description={`Among the most common and lasting indoor pests, particularly in warm, humid spaces like bathrooms and kitchens. These cockroaches are a major problem for both residential and business environments because of their small size and great potential for infestation. Because they breed quickly and like to live in hidden areas, immediate German cockroach pest control is essential for both hygiene and safety.`}
        Heading1="Identifying the German Cockroach"
        desc1=""
        pestDescription={[
          {
            label: "Color:",
            value:
              "Two dark, parallel stripes that range in color from light brown to tan are present on its back.",
          },
          { label: "Size:", value: "Adults measure about 1.1 to 1.6 cm long" },
          { label: "Shape:", value: "Flat, oval body with long antennae" },
          {
            label: "Speed:",
            value: "Very fast movers, especially when lights are turned on",
          },
          {
            label: "Habitat:",
            value: "Frequently found in appliances, cabinets, and cracks",
          },
        ]}
        List={[]}
        Heading2="Damage and Health Hazards"
        desc2="Even in small numbers, German cockroaches can lead to major problems that demand german cockroach extermination:"
        habits={[
          "Introduce bacteria and diseases into surfaces, utensils, and food.",
          "Trigger asthma and allergic reactions, especially in children",
          "Leave foul odors from droppings and secretions",
          "Multiply quickly, making infestations hard to control without help",
        ]}
        Heading3="How They Enter and Thrive"
        desc3="German cockroaches gain access to buildings and homes through:"
        habitat={[
          { value: "Grocery bags, luggage, and secondhand appliances" },
          {
            value: "Cracks in walls, plumbing openings, or ventilation systems",
          },
          { value: "Shared pipes and drains in apartment complexes" },
        ]}
        additional={[]}
        Heading4="Integrated Pest Strategy"
        desc4="Targeting German cockroaches requires a layered approach with expert cockroach control services. Successful treatment includes:"
        threats={[
          "Monitoring high-risk zones and identifying infestation levels",
          "Sealing entry points and removing food/water access",
          "Applying bait, gel, or residual insecticides in targeted areas",
          "Educating homeowners on cleanliness and preventive habits",
        ]}
        ctaHeading="Keep Your Space Safe from German Cockroaches"
        ctaText={`Notice droppings under your sink? Smelling a musty odor from your cupboard? German cockroaches hide deep and spread quickly.`}
        ctaButtonText="Book Your Free Cockroach Survey Today"
      />
      <Footer />
    </>
  );
};

export default GermanCockroach;
