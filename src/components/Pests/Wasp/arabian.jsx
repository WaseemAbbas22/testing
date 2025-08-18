import PestInfoPage from "../PestInfoPage";
import TopBar from "../../TopBar";
import Navbar from "../../Navbar";
import ServicesHero from "../../Services/ServicesHero";
import Footer from "@/components/Footer";
import RodentHeroImg from "@/assets/Pests/Wasp/arabianhero.webp";
//import React from "react";

const ArabianPaperWasp = () => {
  return (
    <>
      <TopBar />
      <Navbar />
      <ServicesHero
        title="Arabian Paper Wasp"
        breadcrumb="Home > Pests > Details"
        bgImg={RodentHeroImg}
      />
      <PestInfoPage
        title="Arabian Paper Wasp"
        scientificName=""
        description={`The Arabian paper wasp is a slender-bodied stinging insect commonly found across Dubai and surrounding desert regions. This species, which can be identified by its long legs and yellow-black stripes, constructs umbrella-shaped nests beneath building roofs, tree branches, and protected corners. While not as aggressive as hornets, they will defend their nest if disturbed, especially during warmer months when their activity levels are at their peak.
We at Accurate Pest Control Services LLC Dubai,  provide professional wasp removal services with a focus on long-term prevention, speed, and safety. Whether at your villa, garden, or business property, we ensure the complete elimination of nests and wasps before they become a hazard.`}

        Heading1="Signs of Arabian Paper Wasp Infestation"
        desc1="Look out for these early warning signs:"
        ListDesc1=""
        Enddesc1="Arabian paper wasps usually build their nests in places that are easy to miss until the colony becomes too large."
        pestDescription={[
          {
            value:
              "Small umbrella-like nests attached to shaded surfaces",
          },
          { value: "Repeated buzzing near the same spot on roofs or outdoor walls"},
          {
            value:
              "Wasps are entering through wall cracks or roof joints",
          },
          {
            value: "Increased sting risk around children, pets, or allergic individuals",
          },
          {
            value:
              "Group swarming behavior around flowering plants or trash bins",
          },
        ]}
        List={[]}


        Heading2="Common Hiding Spots"
        desc2="Arabian paper wasps prefer dry, shaded areas that offer cover and minimal disturbance."
        ListDesc2="You may find them in:"
        Enddesc2="Spotting a single wasp is often a sign that a nearby nest is forming."
        habits={[
          "Under roof eaves or window awnings",
          "Inside garden sheds and pergolas",
          "Corners of balconies and patios",
          "Tree trunks and leafy branches",
          "Air vents or cracks in concrete",
          "Around outdoor lighting fixtures",
        ]}


        habitat={[]}
        additional={[]}

        Heading4="How We Remove Wasp Nests"
        desc4="Our wasp control service includes safe removal and future prevention:"
        ListDesc4=""
        Enddesc4="We hold to all safety regulations for pest control set forth by the Dubai Municipality."
        threats={[
          "Full property survey to locate active wasp nests",
          "Identification of the Arabian paper wasp species",
          "Safe and eco-approved pesticide application by trained technicians",
          "Taking apart and removing the nest during low activity hours, such as dawn or dusk",
          "Nesting site sealing and guidance for future prevention",
          "Optional follow-up for recurring infestations",
        ]}


        ctaHeading="Book Arabian Paper Wasp Removal in Dubai"
        ctaText={`Protect your space from unexpected stings. We deliver fast, certified removal services to homes, schools, hotels, and offices across Dubai.`}
        ctaButtonText="Book Arabian Paper Wasp Removal"
      />
      <Footer />
    </>
  );
};

export default ArabianPaperWasp;
