import PestInfoPage from "../PestInfoPage";
import TopBar from "../../TopBar";
import Footer from "@/components/Footer";
import Navbar from "../../Navbar";
import ServicesHero from "../../Services/ServicesHero";
import RodentHeroImg from "@/assets/Pests/Venomous/cobrahero.webp";
//import React from "react";

const ArabianCobra = () => {
  return (
    <>
      <TopBar />
      <Navbar />
      <ServicesHero
        title="Arabian Cobra"
        breadcrumb="Home > Pests > Details"
        bgImg={RodentHeroImg}
      />
      <PestInfoPage
        title="About the Arabian Cobra"
        scientificName=""
        description={`SThe Arabian Cobra is one of the most dangerous venomous snakes found in the Arabian Peninsula, including certain outskirts of Dubai. Easily identified by its hooded neck and hissing posture, this snake prefers dry, rocky environments but can occasionally find its way into human settlements, especially in villas near desert landscapes, construction sites, or neglected storage areas.
        There are significant health risks associated with a cobra on or near your property, even if sightings are uncommon in central urban areas. Immediate identification and professional handling are critical to avoid bites or panic.`}
        
        Int=""
        descInt=""
       
        Heading1="Signs of an Arabian Cobra Presence"
        desc1="The following indicators may point to the existence of cobras in the area, even though they are impossible and frequently active at night:"
        ListDesc1=""
        Enddesc1="A cobra may enter through cracked tiles, drainpipes, or open ventilation holes, especially during warmer months or after rain when they seek dry refuge."
        pestDescription={[
          { value: "Shed snake skin in dark corners, basements, or storage sheds"},
          { value: "Unusual hissing or rustling noises near outdoor bushes or vents"},
          { value: "Snake marks in dust or sand, especially near entrances"},
          { value: "Sudden disappearance of rodents (their common prey)"},
          { value:"Visible droppings in hidden, humid areas"},
          { value:"Pet distress or barking at specific outdoor spots"},
        ]}
        List={[]}


        Int2=""
        descInt2=""

        Heading2="Where They Hide"
        desc2="The Arabian Cobra prefers shady, ignored areas that provide warmth and protection. In residential or commercial areas, these may include:"
        ListDesc2=""
        Enddesc2="Their behavior is territorial, so repeated sightings in the same area may suggest a nesting site or frequent return."

        habits={[
          "Under garden decking or stone slabs",
          "Abandoned construction material or wooden planks",
          "Inside broken AC units or pipe openings",
          "Gaps in brickwork, especially around external boundary walls",
          "Piles of dry leaves or lawn clippings",
          "Poorly sealed doorways or basement crawlspaces",
        ]}


        Heading3="How Accurate Pest Control Handles Arabian Cobra Removal"
        desc3="We take reports of cobra observations seriously at Accurate Pest Control Services LLC Dubai. Our specialists are trained in advanced snake management and emergency response protocols, ensuring your family and pets are protected without delay."
        ListDesc3="Our cobra removal plan includes:"       
        Enddesc3="For added protection, we may also assess outdoor pest conditions, as a high insect population can indirectly attract snakes. For example, our wasp control services are often paired with snake removal to eliminate prey and reduce attraction."
        habitat={[
          { value: "Rapid site inspection and identification of the cobra type"},
          { value: "Safe, humane capture using professional snake-handling tools"},
          { value: "Sealing of potential re-entry points and risk areas"},
          { value: "Deodorization and surface treatment to remove scent trails"},
          { value:"Recommendations for long-term snake deterrence, including habitat changes"},
          {value:"Follow-up services in high-risk areas, especially near natural terrain"},
        ]}





        Heading4="Safety First"
        desc4="Never try to trap or irritate a cobra if you think it may be close. Keep pets and children indoors and contact our emergency pest line immediately."
        ListDesc4=""
        Enddesc4=""
        threats={[]}

        Heading5=""
        desc5=""
        additional={[]}


        ctaHeading="Book Your Arabian Cobra Removal Service Now"
        ctaText={`Don’t take risks when it comes to venomous snakes. Accurate Pest Control Services LLC Dubai offers swift, certified removal services across Dubai, with guaranteed safety and professional follow-up.`}
        ctaButtonText="Book Arabian Cobra Control"
      />
      <Footer />
    </>
  );
};

export default ArabianCobra;
