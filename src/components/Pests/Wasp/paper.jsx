import PestInfoPage from "../PestInfoPage";
import TopBar from "../../TopBar";
import Navbar from "../../Navbar";
import ServicesHero from "../../Services/ServicesHero";
import Footer from "@/components/Footer";
import RodentHeroImg from "@/assets/Pests/Wasp/paperhero.webp";
//import React from "react";

const PaperWaspNest = () => {
  return (
    <>
      <TopBar />
      <Navbar />
      <ServicesHero
        title="Paper Wasp Nest"
        breadcrumb="Home > Pests > Details"
        bgImg={RodentHeroImg}
      />
      <PestInfoPage
        title="About the Paper Wasp Nest"
        scientificName=""
        description={`Paper wasps are slender, long-legged stinging insects that build umbrella-shaped nests out of a papery material made from chewed wood fibres and saliva. These nests are commonly found under eaves, balconies, sheds, or in garden furniture around Dubai homes and commercial properties. While paper wasps help control garden pests, their nests pose a serious risk to people, especially children, pets, and those allergic to stings.
Paper wasp stings are painful and can become life-threatening in sensitive individuals. If disturbed, even a single paper wasp nest can provoke aggressive swarming. That’s why fast, professional action is essential for safety and peace of mind.`}

        Heading1="Signs of a Paper Wasp Nest Infestation"
        desc1="Normally paper wasp activity occurs during the warmer months."
        ListDesc1="Look out for these early signs of infestation:"
        Enddesc1="Never attempt to destroy a nest during daylight, as this increases the chances of a wasp attack."
        pestDescription={[
          {
            value:
              "Visible nests under roof edges, decks, or window frames",
          },
          { value: "Increased wasp activity around gardens or outdoor seating" },
          {
            value:
              "Persistent buzzing near light fixtures or shaded nooks",
          },
          {
            value: "Wasps hovering near food, trash bins, or compost",
          },
          {
            value:
              "Pets behaving unusually around eaves or open sheds",
          },
        ]}
        List={[]}


        Heading2="Where Paper Wasps Build Their Nests"
        desc2="Paper wasps prefer quiet, undisturbed areas with access to wood and water."
        ListDesc2="Common nest sites include:"
        Enddesc2="Their nests can grow rapidly and often go unnoticed until the colony is fully established."
        habits={[
          "Roof overhangs, soffits, and gables",
          "Attics and under balconies or staircases",
          "Garden sheds, garages, and barns",
          "Inside light fixtures or outdoor electrical boxes",
          "Beneath patio furniture and playground equipment",
          "Tree branches and thick garden shrubs",
        ]}


        habitat={[]}
        additional={[]}

        Heading4="Accurate Pest Control Services LLC  Handles Paper Wasp Removal"
        desc4="Across all kinds of properties, our staff has experience removing paper wasps safely and effectively."
        ListDesc4="Our unique strategy consists of:"
        Enddesc4="We ensure all treatments are carried out with safety and effectiveness in mind, especially in family and pet-friendly areas."
        threats={[
          "Site assessment to locate nests and entry zones",
          "Use of protective gear to avoid stings during removal",
          "Eco-safe spraying or dusting methods to neutralize nests",
          "Removal of nest structure and disposal to prevent re-infestation",
          "Blocking future nesting spots through sealing and exclusion",
          "Optional maintenance visits to prevent seasonal return",
        ]}

        ctaHeading="Book Your Paper Wasp Nest Removal Now"
        ctaText={`Don’t let wasps take over your space. If you want expert paper wasp removal, get in touch with Accurate Pest Control Service LLC Dubai.`}
        ctaButtonText="Book Paper Wasp Removal"
      />
      <Footer />
    </>
  );
};

export default PaperWaspNest;
