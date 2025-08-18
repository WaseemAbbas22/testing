import PestInfoPage from "../PestInfoPage";
import TopBar from "../../TopBar";
import Navbar from "../../Navbar";
import ServicesHero from "../../Services/ServicesHero";
import RodentHeroImg from "@/assets/Pests/Cockroch/Brhero.webp";
import Footer from "@/components/Footer";
//import React from "react";

const BrownBandedCockroach = () => {
  return (
    <>
      <TopBar />
      <Navbar />
      <ServicesHero
        title="Brown-Banded Cockroach"
        breadcrumb="Home > Pests > Details"
        bgImg={RodentHeroImg}
      />
      <PestInfoPage
        title="About Brown-Banded Cockroach"
        scientificName=""
        description={`One of the most elusive cockroach species, known for its preference for warm, dry environments. Unlike other cockroach breeds, this species tends to stay above ground, often hiding behind picture frames, inside cabinets, and within electronics. Though smaller in size, their secretive behaviour and fast reproduction make them a stubborn pest in homes and offices across the UAE.`}
        Heading1="Identifying the Brown-Banded Cockroach"
        pestDescription={[
          {
            label: "Color:",
            value:
              "Light brown, with the wings and belly having two lighter bands.",
          },
          { label: "Size:", value: "About ½ inch (10–14 mm) long" },
          { label: "Shape:", value: "Flat and oval with long antennae." },
          {
            label: "Behaviour:",
            value: "Active at night, avoids water, can fly.",
          },
          {
            label: "Common Regions:",
            value:
              "Found worldwide, especially in warm, indoor locations such as homes and offices in the UAE.",
          },
        ]}
        List={[]}
        Heading2="Damage and Infestation Risks"
        desc2="The brown-banded cockroach is not the largest, yet it can still be extremely harmful and contaminating:"
        habits={[
          "Contaminates food and kitchen surfaces",
          "Leaves behind egg casings and droppings",
          "Can trigger allergies and asthma symptoms",
          "May damage electronics and paper items due to nesting",
        ]}
        Heading3="Where They Hide and Thrive"
        desc3="Brown-banded cockroaches avoid moisture and prefer higher, hidden spots:"
        habitat={[
          { value: "Inside electrical appliances like TVs and routers" },
          { value: "Behind wall hangings and picture frames" },
          { value: "In dry storage areas, closets, and ceilings" },
          { value: "Anywhere dark, warm, and undisturbed" },
        ]}
        additional={[]}
        Heading4="Effective Control and Prevention"
        desc4="Getting rid of this pest requires more than surface sprays. Professional cockroach treatment focuses on:"
        threats={[
          "Identifying specific hiding zones",
          "Using bait stations and residual insecticides",
          "Applying dust in wall voids and appliance spaces",
          "Educating homeowners on sanitation and sealing methods",
        ]}
        ctaHeading="Take Action Today"
        ctaText={`Seeing signs of infestation? Don’t wait. Brown-banded cockroaches are small but persistent. Let our expert team help you restore comfort and cleanliness to your home or business.`}
        ctaButtonText="Schedule Your Cockroach Inspection Now"
      />
      <Footer />
    </>
  );
};

export default BrownBandedCockroach;
