import PestInfoPage from "../PestInfoPage";
import TopBar from "../../TopBar";
import Navbar from "../../Navbar";
import ServicesHero from "../../Services/ServicesHero";
import RodentHeroImg from "@/assets/Pests/RedBug/Hehero.webp";
//import React from "react";

const CimexHemipterus = () => {
  return (
    <>
      <TopBar />
      <Navbar />
      <ServicesHero
        title="Cimex Hemipterus (Tropical Bed Bug)"
        breadcrumb="Home > Pests > Details"
        bgImg={RodentHeroImg}
      />
      <PestInfoPage
        title="About Cimex Hemipterus"
        scientificName="(Tropical Bed Bug)"
        description={`TCimex Hemipterus is the tropical cousin of the common bed bug and is commonly found in humid regions like the UAE. These reddish-brown insects are slightly longer than their temperate counterparts and are known for their persistent feeding behaviour. Active primarily at night, they hide in mattresses, furniture, and small cracks feeding on human blood and causing itchy welts, disturbed sleep, and anxiety.
With increasing reports of bed bug Dubai infestations in homes, hotels, and labour accommodations, it’s important to identify and treat the problem quickly.`}
        Heading1="Signs of a Cimex hemipterus Infestation"
        desc1="You might not spot the bugs directly, but here are the signs:"
        pestDescription={[
          {
            label: "",
            value:
              "Small, itchy bite marks in lines or clusters, often found after waking",
          },
          {
            label: "",
            value:
              "Rust-colored stains or dark spots on bed sheets and furniture",
          },
          {
            label: "",
            value:
              "Presence of bed bug eggs tiny, white, and sticky in mattress folds or wooden joints",
          },
          {
            label: "",
            value:
              "Molted skins and a sweet, musty smell in heavily infested areas",
          },
          { label: "", value: "Increased irritation and loss of sleep" },
        ]}
        List={[]}
        Heading2="Where They Hide and How They Travel"
        desc2="These pests are expert hiders and can be transported unknowingly in personal belongings. Common hiding places include:"
        Enddesc2="Even the cleanest spaces can suffer from infestations when bed bug pest control is delayed."
        habits={[
          "Seams of mattresses, box springs, and sofas",
          "Behind headboards, inside wooden cracks, and curtain folds.",
          "In luggage, backpacks, and even secondhand electronics or furniture",
        ]}
        Heading3="Health Risks and Impact"
        desc3="While Cimex hemipterus doesn’t spread disease, it can cause:"
        Enddesc3="In high humidity zones like the UAE, these tropical bed bugs can multiply rapidly and are harder to eliminate without professional help."
        habitat={[
          { value: "Severe itching and secondary skin infections" },
          { value: "Stress, insomnia, and reduced productivity" },
          {
            value:
              "Allergic reactions, especially in children or sensitive individuals",
          },
        ]}
        additional={[]}
        Heading4="Our Cimex Hemipterus Removal Process"
        desc4="We provide effective, safe, and certified bed bug treatment Dubai. Our method includes:"
        Enddesc4="We focus on long-term results, targeting all life stages of Cimex hemipterus from newly hatched nymphs to fully grown adults."
        threats={[
          "Deep cleaning and high-temperature steam treatment",
          "Application of advanced bed bug killer spray for cracks, crevices, and hidden nests",
          "Full-room inspection to locate breeding zones and adult hiding places",
          "Custom treatment plans for homes, hotels, and shared accommodations",
          "Follow-up visits to ensure complete eradication and prevent future outbreaks",
        ]}
        ctaHeading="Safe & Guaranteed Bed Bug Removal in Dubai"
        ctaText={`Don’t let sleepless nights and skin irritation affect your life. Our trained experts offer discreet, fast, and guaranteed solutions tailored for tropical bed bug Dubai infestations.`}
        ctaButtonText="Book Your Free Cimex hemipterus Inspection Today"
      />
    </>
  );
};

export default CimexHemipterus;
