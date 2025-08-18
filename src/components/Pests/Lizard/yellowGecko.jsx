import PestInfoPage from "../PestInfoPage";
import TopBar from "../../TopBar";
import Footer from "@/components/Footer";
import Navbar from "../../Navbar";
import ServicesHero from "../../Services/ServicesHero";
import RodentHeroImg from "@/assets/Pests/Lizard/yellowhero.webp";
//import React from "react";

const YellowGecko = () => {
  return (
    <>
      <TopBar />
      <Navbar />
      <ServicesHero
        title="Yellow-Bellied House Gecko"
        breadcrumb="Home > Pests > Details"
        bgImg={RodentHeroImg}
      />
      <PestInfoPage
        title="About Yellow-Bellied House Gecko"
        scientificName=""
        description={`The yellow-bellied house gecko is a small, agile lizard that commonly invades Dubai homes, especially at night. The pale yellow underside, sticky toes, and flying motions across walls and ceilings are characteristics of these reptiles. Though not harmful to humans, their presence can be unsettling and often indicates a larger insect population nearby.`}
        
        Int=""
        descInt=""
       
        Heading1="Why You Might Be Seeing Geckos Indoors"
        desc1="Being proactive, geckos usually enter homes to find insects, warmth, and secure hiding places. If your property has outdoor lights, open vents, or cracked windows, it may attract more than just bugs and it could be inviting geckos as well.
The House Gecko, a close cousin of the yellow-bellied variety, is equally common in residential spaces across the UAE. Both species tend to follow the same behavior patterns, feeding on moths, ants, and small roaches while nesting in dark crevices or behind furniture."
        ListDesc1=""
        Enddesc1=""
        pestDescription={[]}
        List={[]}


        Int2=""
        descInt2=""

        Heading2="Key Signs of a Yellow-Bellied Gecko Infestation"
        desc2="Mediterranean Geckos are resilient and adaptive like many desert lizard species. They prefer dry, warm, and dim places that offer easy access to insects."
        ListDesc2="Common hiding spots include:"
        Enddesc2=""

        habits={[
          "Multiple sightings of pale or yellow-bellied lizards indoors",
          "Small droppings near walls and windowsills",
          "Chirping or clicking sounds at night",
          "Skin shedding flakes around baseboards or light fixtures",
          "Footprints or smudges near ceiling lights or wall corners",
        ]}


        Heading3="Where They Hide and Thrive"
        desc3="Yellow-bellied geckos prefer warm, sheltered, and insect-rich environments."
        ListDesc3="Common hiding places include:"       
        Enddesc3="These behaviours are also seen in other small tropical lizards, like crested gecko lizards, although the yellow bellied gecko is much more prevalent in UAE homes."
        habitat={[
          { value: "Behind wall clocks, paintings, or loose wallpaper"},
          { value: "Inside cabinets, under appliances, and around electrical outlets"},
          { value: "Around indoor gardens or potted plants"},
          { value: "In ceiling cracks, attic spaces, or AC ducting"},
        ]}





        Heading4="Our Professional Gecko Control Approach"
        desc4="At Accurate Pest Control LLC, our lizard control specialists follow a proven process to safely and effectively remove geckos:"
        ListDesc4=""
        Enddesc4="We offer customized plans that ensure your home stays lizard free, backed by a satisfaction guarantee."
        threats={[
          "Detailed examination of the exterior and interior to identify possible hiding places",
          "Sealing Entry Points to eliminate access routes",
          "Non-toxic Repellents designed for geckos and other lizard types",
          "Insect Source Elimination to cut off their food supply",
          "Ongoing Monitoring and prevention strategies",
        ]}

        Heading5=""
        desc5=""
        additional={[]}


        ctaHeading="Reclaim Your Gecko-Free Home in Dubai"
        ctaText={`Don’t let geckos turn your ceiling into their playground. For secure and effective Yellow-Bellied house gecko removal in Dubai, get in touch with us right now.`}
        ctaButtonText="Book Your Inspection"
      />
      <Footer />
    </>
  );
};

export default YellowGecko;
