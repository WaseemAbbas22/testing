import PestInfoPage from "../PestInfoPage";
import TopBar from "../../TopBar";
import Navbar from "../../Navbar";
import ServicesHero from "../../Services/ServicesHero";
import RodentHeroImg from "@/assets/Pests/Cockroch/Smhero.webp";
import Footer from "@/components/Footer";
//import React from "react";

const SmokyBrownCockroach = () => {
  return (
    <>
      <TopBar />
      <Navbar />
      <ServicesHero
        title="Smoky Brown Cockroach"
        breadcrumb="Home > Pests > Details"
        bgImg={RodentHeroImg}
      />
      <PestInfoPage
        title="About Smoky Brown Cockroach"
        scientificName=""
        description={`Among the many types of cockroaches found in UAE homes and gardens, the Smoky Brown Cockroach stands out for its large size, glossy dark brown body, and strong flying ability. These pests are mostly active at night and are often seen flying toward lights in humid outdoor environments.`}
        Heading1="Easy Ways to Identify This Pest"
        desc1=""
        pestDescription={[
          { label: "Color:", value: "Uniform dark brown or mahogany" },
          { label: "Size:", value: "Grows up to 1.5 inches in length" },
          { label: "Wings:", value: "Long wings that extend past the abdomen" },
          {
            label: "Body Shape:",
            value: "Sleek and flat, allowing it to squeeze into tight spaces",
          },
          {
            label: "Movement:",
            value: "Agile and capable of gliding short distances",
          },
          {
            label: "Detection Difficulty:",
            value:
              "Often goes unnoticed until infestation increases due to its ability to hide well",
          },
        ]}
        List={[]}
        Heading2="Where They Live and Thrive"
        desc2="Areas that are warm, humid, and abundant in organic matter are preferred by smokey browns, such as:"
        habits={[
          "Roof gutters and attics",
          "Gardens and mulch beds",
          "Outdoor garbage bins",
          "Bathrooms and basements with high humidity",
        ]}
        Heading3="The Health Hazards They Bring"
        desc3="These cockroaches are more than a nuisance. Their presence can:"
        habitat={[
          { value: "Contaminate surfaces and food" },
          { value: "Trigger allergies and asthma" },
          { value: "Carry bacteria from outdoor waste to indoor kitchens" },
        ]}
        additional={[]}
        Heading4="Get Rid of Smoky Brown Cockroaches the Right Way"
        desc4="While many cockroach varieties can infest your property, smoky browns require specific treatments. At Accurate Pest Control, our technicians:"
        threats={[
          "Identify infestation zones",
          "Apply targeted treatment",
          "Seal entry points",
          "Offer post-treatment monitoring",
        ]}
        ctaHeading="Don’t Let Smoky Brown Roaches Take Over"
        ctaText={`Smoky Brown cockroaches are masters at hiding and multiplying. If you’ve spotted even one, it’s time to act fast. Book a professional inspection and stop the spread early.`}
        ctaButtonText="Book Your Inspection Today"
      />
      <Footer />
    </>
  );
};

export default SmokyBrownCockroach;
