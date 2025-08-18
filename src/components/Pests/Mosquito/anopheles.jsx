import PestInfoPage from "../PestInfoPage";
import TopBar from "../../TopBar";
import Navbar from "../../Navbar";
import ServicesHero from "../../Services/ServicesHero";
import Footer from "@/components/Footer";
import RodentHeroImg from "@/assets/Pests/Mosquito/anohero.webp";
//import React from "react";

const AnophelesMosquito = () => {
  return (
    <>
      <TopBar />
      <Navbar />
      <ServicesHero
        title="Anopheles Mosquito"
        breadcrumb="Home > Pests > Details"
        bgImg={RodentHeroImg}
      />
      <PestInfoPage
        title="About the Anopheles Mosquito"
        scientificName=""
        description={`It is a notorious vector responsible for spreading malaria across many regions, including Dubai and the wider UAE. Known for its slender body, long legs, and resting posture with the body at an angle, this mosquito is often mistaken for a big mosquito due to its elongated shape. Unlike the Aedes, the Anopheles bites primarily at night, making evening protection essential.
These mosquitoes breed in still, clear water and are most active from sunset to sunrise. Because the female must feed on blood to develop eggs, even a small population can become a serious health risk without professional help.`}
       
        Heading1="Symptoms of a Possible Anopheles Mosquito Infestation"
        desc1=""
        Enddesc1="Due to its link to malaria, even small infestations should not be ignored."
        pestDescription={[
          {
            value:
              "Mosquito bites at night, usually on bare legs and feet",
          },
          { value: "Sudden increase in mosquito activity after sunset" },
          {
            value:
              "Visual awareness of long, thin mosquitoes laying inclined",
          },
          {
            value: "The eggs of mosquitoes are seen in sources of clean, standing water",
          },
          {
            value:
              "More mosquito nuisance after rain or near water bodies",
          },
        ]}
        List={[]}


        Heading2="Where They Breed"
        desc2="Anopheles Mosquitoes seek out clean, still water to lay their eggs especially in outdoor or semi-covered containers."
        ListDesc2="Common breeding grounds include:"
        Enddesc2="With a life cycle that can be finished in 7–10 days, a single female can lay up to 200 eggs at once."
        habits={[
          "Rain-filled buckets or discarded containers",
          "Water in clogged roof gutters",
          "Slow-draining garden beds and irrigation trays",
          "Pools of water near construction sites",
          "Open water tanks or animal troughs",
          "Water collected in shaded garden areas",
        ]}

        habitat={[]}
        additional={[]} 
        Heading4="How Accurate Pest Control Services LLC Dubai Treats Anopheles Mosquito Infestations"
        desc4="At Accurate Pest Control Services LLC Dubai, we understand how to remove mosquito populations at the root. Our tailored strategies for Mosquito control combine expert inspection, cutting-edge treatments, and long-term prevention."
        ListDesc4="We offer:"
        Enddesc4="Our mission is not just to reduce bites but to break the breeding cycle completely."
        threats={[
          "Thermal fogging and ULV misting for nighttime mosquito control",
          "Application of pesticide to breeding areas of greatest risk, such as water tanks and drains",
          "Biological and chemical solutions that are pet- and child-safe",
          "Environmental management tips for eliminating breeding grounds",
          "Scheduled visits to monitor mosquito activity and prevent resurgence",
        ]}
        ctaHeading="Book Your Anopheles Mosquito Service Today"
        ctaText={`Don't let a single mosquito turn into a health hazard. Accurate Pest Control Services LLC Dubai is ready with expert solutions, affordable packages, and fast response times.`}
        ctaButtonText="Book Your Anopheles Mosquito Service"
      />
      <Footer />
    </>
  );
};

export default AnophelesMosquito;
