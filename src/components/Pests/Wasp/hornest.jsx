import PestInfoPage from "../PestInfoPage";
import TopBar from "../../TopBar";
import Navbar from "../../Navbar";
import ServicesHero from "../../Services/ServicesHero";
import Footer from "@/components/Footer";
import RodentHeroImg from "@/assets/Pests/Wasp/hornesthero.webp";
//import React from "react";

const HornetsWasp = () => {
  return (
    <>
      <TopBar />
      <Navbar />
      <ServicesHero
        title="Hornets Wasp"
        breadcrumb="Home > Pests > Details"
        bgImg={RodentHeroImg}
      />
      <PestInfoPage
        title="About the Hornets Wasp"
        scientificName=""
        description={`One of the most hostile wasps in Dubai is the hornet. Larger than yellowjackets or paper wasps, hornets have a powerful sting and will fiercely defend their colony when disturbed. Their nests can grow rapidly, often unnoticed until the threat is serious. While some build large aerial hives, others form a dangerous underground hornet nest, hidden beneath the soil.
If you've spotted a rising number of large, buzzing wasps, chances are there’s a hornet's nest on or near your property. Accurate Pest Control offers certified hornet control services to remove the danger quickly and safely.`}

        Heading1="Signs of Hornet Infestation"
        desc1="Early detection can prevent a full-scale infestation."
        ListDesc1="Look for:"
        Enddesc1="Hornets defend their nests more aggressively than most wasps and do not approach them."
        pestDescription={[
          {
            value:
              "Increased activity of large wasps near bushes, sheds, or wall crevices",
          },
          { value: "Buzzing near the ground or trees, indicating an underground hornet nest" },
          {
            value:
              "Papery nests that can be seen on tree branches, gutters, or roofs",
          },
          {
            value: "Aggressive behavior when approaching a certain area",
          },
          {
            value:
              "Nighttime movement near porch lights",
          },
        ]}
        List={[]}


        Heading2="Where Hornets Wasp Hide"
        desc2="Hornets build nests in both exposed and hidden locations, often choosing quiet, undisturbed places."
        ListDesc2="Common nesting sites include:"
        Enddesc2="If a hornets nest is out in the open, it can be easy to see, but underground hornet nests are often discovered only after someone gets stung."
        habits={[
          "Trees, bushes, and roof overhangs",
          "Inside attics, barns, or wall cavities",
          "Garden sheds and garages",
          "Ground holes or abandoned rodent burrows",
          "Under decking and staircases",
          "Any shaded corner protected from wind or rain",
        ]}


        habitat={[]}
        additional={[]}

        Heading4="Our Hornet Control Process"
        desc4="Specialized hornet treatments are offered by Accurate Pest Control LLC Dubai, with the goal of safely and swiftly removing nests:"
        ListDesc4=""
        Enddesc4="We prioritize your family’s safety and follow eco-conscious methods approved in the UAE."
        threats={[
          "Examination of the property to find both visible and hidden nests",
          "Identification of nest type: aerial or underground hornet nest",
          "Use of protective gear and regulated products for safe application",
          "Nest neutralization and removal at safe hours (typically dawn or dusk)",
          "Post-removal cleanup and sealing of nest entry points",
          "Guidance on hornet-proofing your property",
        ]}


        ctaHeading="Get Expert Hornet Nest Removal in Dubai"
        ctaText={`Hornets don’t belong near your home or workplace. They can be aggressive, and their stings are painful, making them a threat to both safety and peace of mind.`}
        ctaButtonText="Book Hornet Nest Removal"
      />
      <Footer />
    </>
  );
};

export default HornetsWasp;
