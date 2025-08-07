import PestInfoPage from "../PestInfoPage";
import TopBar from "../../TopBar";
import Navbar from "../../Navbar";
import ServicesHero from "../../Services/ServicesHero";
import heroImg from "@/assets/Pests/Wasp/Bot1.svg"; //import React from "react";

const PaperWaspNest = () => {
  return (
    <>
      <TopBar />
      <Navbar />
      <ServicesHero
        title="Paper Wasp Nest"
        breadcrumb="Home > Pests > Details"
        bgImg={heroImg}
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
            label: "",
            value: "Visible nests under roof edges, decks, or window frames",
          },
          { label: "", 
            number: "", 
            value:"Increased wasp activity around gardens or outdoor seating" },
          {
            label: "",
            value: "Persistent buzzing near light fixtures or shaded nooks",
          },
          {
            label: "",
            value:
              "Wasps hovering near food, trash bins, or compost",
          },
          { label: "", value: "Pets behaving unusually around eaves or open sheds" },
          
        ]}
        Heading2="Where Paper Wasps Build Their Nests"
        desc2="Paper wasps prefer quiet, undisturbed areas with access to wood and water."
        Enddesc2="Their nests can grow rapidly and often go unnoticed until the colony is fully established."
        ListDesc2="Common nest sites include:"
        habits={[
          "House mice are active mostly at night, searching for food and nesting material.",
          "They are curious by nature and will explore new spaces quickly.",
          "They build nests in hidden, undisturbed areas using shredded paper, fabric, or insulation.",
          "Mice prefer to feed on grains and seeds but will eat almost anything available.",
        ]}

        Heading3="Accurate Pest Control Services LLC  Handles Paper Wasp Removal"
        desc3="Across all kinds of properties, our staff has experience removing paper wasps safely and effectively."
        ListDesc3 = "Our unique strategy consists of:"
        Enddesc3="We ensure all treatments are carried out with safety and effectiveness in mind, especially in family and pet-friendly areas."
        habitat={[
          "Site assessment to locate nests and entry zones",
          "Use of protective gear to avoid stings during removal",
          "Eco-safe spraying or dusting methods to neutralize nests",
          "Removal of nest structure and disposal to prevent re-infestation",
          "Blocking future nesting spots through sealing and exclusion",
          "Optional maintenance visits to prevent seasonal return",     
        ]}
        threats={[
          "House mice contaminate food with droppings and urine, which can spread harmful bacteria like salmonella.",
          "Their constant gnawing damages furniture, food packaging, electrical wiring, and insulation – increasing fire hazards.",
          "Mice can trigger allergies and asthma, especially in children and sensitive individuals.",
          "Due to rapid reproduction, a small mouse problem can quickly turn into a large infestation.",
        ]}
        ctaHeading="Book Your Paper Wasp Nest Removal Now"
        ctaText={`IDon’t let wasps take over your space. If you want expert paper wasp removal, get in touch with Accurate Pest Control Service LLC Dubai.`}
        ctaButtonText="Book Paper Wasp Removal]"
      />
    </>
  );
};

export default PaperWaspNest;
