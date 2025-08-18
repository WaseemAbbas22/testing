import PestInfoPage from "../PestInfoPage";
import TopBar from "../../TopBar";
import Navbar from "../../Navbar";
import Footer from "@/components/Footer";
import ServicesHero from "../../Services/ServicesHero";
import RodentHeroImg from "@/assets/Pests/Cockroch/Orhero.webp";
//import React from "react";

const OrientalCockroach = () => {
  return (
    <>
      <TopBar />
      <Navbar />
      <ServicesHero
        title="Oriental Cockroach"
        breadcrumb="Home > Pests > Details"
        bgImg={RodentHeroImg}
      />
      <PestInfoPage
        title="About Oriental Cockroach"
        scientificName=""
        description={`The Oriental Cockroach is one of the more secretive and resilient kinds of cockroaches found in the UAE. Classified as the "water bug," this species is frequently found in basements, waterways, and beneath sinks and grows in moist, dark environments.`}
        Heading1="Identifying the Oriental Cockroach"
        pestDescription={[
          { label: "Color:", value: "Glossy black or dark brown body" },
          {
            label: "Size:",
            value: "Ranges between 1 to 1.25 inches in length",
          },
          {
            label: "Wings:",
            value: "Females are wingless; males have small wings",
          },
          {
            label: "Flight:",
            value: "Both males and females can fly despite wing differences",
          },
          {
            label: "Movement:",
            value: "Not a fast climber; prefers crawling on flat surfaces",
          },
          {
            label: "Distinction:",
            value: "Slower and darker than many other cockroach species",
          },
        ]}
        List={[]}
        Heading2="Where Do They Hide?"
        desc2="Oriental cockroaches are typically found:"
        habits={[
          "Under leaking pipes or wet appliances",
          "In garbage areas and outdoor drains",
          "Beneath bathroom tiles and in sewer systems",
        ]}
        Heading3="Why Are They a Problem?"
        desc3="These pests are more than just unsightly. Like many insects in Dubai, they thrive in high temperatures and humidity. Due to their intake of trash and decomposing organic compounds, oriental cockroaches:"
        habitat={[
          { value: "Contaminate food and surfaces" },
          { value: "Spread bacteria and allergens" },
          { value: "Trigger asthma and other respiratory issues" },
        ]}
        additional={[]}
        Heading4="Integrated Solutions for Lasting Results"
        desc4="We at Accurate Pest Control LLC Dubai use clear and targeted methods to remove Oriental cockroaches. We also offer wasp control, as these pests often live in the same damp places, and it's important to treat both at the same time to avoid further infestations."
        threats={[]}
        ctaHeading="Remove Oriental Cockroaches Before They Spread"
        ctaText={`Oriental cockroaches love dark, damp corners and they won’t go away on their own. Our pest control team is ready to clear them out and safeguard your property.`}
        ctaButtonText="Get a Quick Inspection Now"
      />
      <Footer />
    </>
  );
};

export default OrientalCockroach;
