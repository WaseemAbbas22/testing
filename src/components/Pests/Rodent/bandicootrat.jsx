import PestInfoPage from "../PestInfoPage";
import TopBar from "../../TopBar";
import Navbar from "../../Navbar";
import ServicesHero from "../../Services/ServicesHero";
import RodentHeroImg from "@/assets/Pests/Rodent/bandhero.webp";
import Footer from "@/components/Footer";
//import React from "react";

const BandicootRat = () => {
  return (
    <>
      <TopBar />
      <Navbar />
      <ServicesHero
        title="Bandicoot Rat (Bandicota bengalensis)"
        breadcrumb="Home > Pests > Details"
        bgImg={RodentHeroImg}
      />
      <PestInfoPage
        title="About Bandicoot Rat "
        scientificName="(Bandicota Bengalensis)"
        description={`The Bandicoot Rat is a large, aggressive rodent commonly found in agricultural zones, drains, and city outskirts. Known for its destructive burrowing and bold behavior, this rat species can cause extensive damage to property and crops. Without timely pest control for rats, infestations can grow quickly and become hard to manage.`}
        Heading1="Identifying the Bandicoot Rat"
        Enddesc1="Their large size and digging ability make them one of the most feared rodents in both urban and rural areas."
        pestDescription={[
          { label: "Color:", value: "Dark brown or grayish-black" },
          {
            label: "Tail length:",
            value: "Nearly equivalent to body length (8 to 12 inches)",
          },
          { label: "Weight:", value: "Up to 1 kilogram" },
          {
            label: "Build:",
            value:
              "Stocky body, coarse fur, blunt snout, and prominent incisors",
          },
          {
            label: "Behavior:",
            value:
              "Primarily nocturnal, strong burrowers, highly aggressive when cornered",
          },
        ]}
        List={[]}
        Heading2="Health Risks and Structural Damage"
        desc2="Bandicoot rats can wreak havoc on both human health and infrastructure:"
        Enddesc2="Because they are not easily trapped, traditional methods often fail without professional intervention using industrial strength rat trap systems."
        habits={[
          "Dig complex tunnels under buildings, causing foundation damage",
          "Destroy food storage and grain supplies in bulk",
          "Contain parasites and illnesses like typhus, leptospirosis, and plague.",
          "Leave greasy trails, gnaw marks, and powerful odors wherever they infest",
        ]}
        Heading3="Habitat and Signs of Infestation"
        desc3="Bandicoot rats prefer:"
        Enddesc3="Typical signs include large burrow holes, scattered grain, gnawed wooden surfaces, and loud squeaking sounds. Only expert pest services can accurately assess the level of infestation and provide the right treatment plan."
        habitat={[
          {
            value:
              "Open fields, garbage dumps, drains, and abandoned buildings",
          },
          { value: "Wet environments like sewers and canals" },
          {
            value:
              "Nesting underground in deep burrows or near food and water sources",
          },
        ]}
        additional={[]}
        Heading4="Professional Control Solutions"
        desc4="Due to their aggressive nature and size, DIY methods are often ineffective. Proper management includes:"
        threats={[
          "Heavy duty rat traps strategically placed near burrow entrances",
          "Sealing burrow holes and eliminating food sources",
          "Thorough disinfection after removal",
          "Regular inspections and monitoring through trained pest control for rats professionals",
        ]}
        ctaHeading="Control Aggressive Bandicoot Rats Now"
        ctaText={`Large burrows, chewed food supplies, and bold sightings are signs of an ugly rat infestation. Our expert team offers powerful, humane solutions to eliminate them before they cause costly damage.`}
        ctaButtonText="Get a Free Bandicoot Rat Inspection Today"
      />
      <Footer />
    </>
  );
};

export default BandicootRat;
