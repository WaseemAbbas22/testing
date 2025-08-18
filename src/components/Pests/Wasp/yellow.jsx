import PestInfoPage from "../PestInfoPage";
import TopBar from "../../TopBar";
import Navbar from "../../Navbar";
import ServicesHero from "../../Services/ServicesHero";
import Footer from "@/components/Footer";
import RodentHeroImg from "@/assets/Pests/Wasp/yellowhero.webp";
//import React from "react";

const YellowJacketWasp = () => {
  return (
    <>
      <TopBar />
      <Navbar />
      <ServicesHero
        title="Yellow Jacket Wasp"
        breadcrumb="Home > Pests > Details"
        bgImg={RodentHeroImg}
      />
      <PestInfoPage
        title="About the Yellow Jacket Wasp"
        scientificName=""
        description={`Often mistaken for bees, yellowjackets are aggressive stinging wasps with eye-catching black and yellow bodies. Unlike the more docile yellow paper wasp, yellowjackets are extremely territorial and can sting multiple times, posing serious threats to people, pets, and outdoor gatherings. Their nests, often hidden underground or inside walls, can grow into massive colonies without obvious warning.
If you've noticed sudden wasp swarms near your property, immediate yellow jacket removal is critical to ensure safety and avoid painful stings.`}

        Heading1="Signs of Yellowjacket Infestation"
        desc1="Yellow jackets are rapid and violent, particularly during the height of their colonies in late summer."
        ListDesc1="Warning Signs Include:"
        Enddesc1="Because yellow jackets defend their nests violently, professional help is essential."
        pestDescription={[
          {
            value:
              "High wasp activity near shrubs, garbage bins, or compost",
          },
          { value: "Wasps are entering wall voids, cracks, or underground holes" },
          {
            value:
              "Nests that are visible in basements, ceilings, or spaces in external walls",
          },
          {
            value: "Buzzing sounds behind drywall or in ceiling tiles",
          },
          {
            value:
              "Multiple stings or aggressive behavior near food sources",
          },
        ]}
        List={[]}


        Heading2="Where Yellow Jackets Wasp Hide"
        desc2="Unlike yellow paper wasps, which prefer exposed nests, yellow jackets often nest in concealed or underground spaces."
        ListDesc2="Common hiding spots:"
        Enddesc2="Their stealthy nature makes detection tricky, until it's too late."
        habits={[
          "Underground burrows and soil cracks",
          "Inside wall voids and ceiling gaps",
          "Beneath decks or staircases",
          "Garden sheds, garages, or old pipes",
          "In air conditioning units or outdoor equipment",
          "Attics and crawlspaces",
        ]}


        habitat={[]}
        additional={[]}

        Heading4="Accurate Pest Control’s Yellow Jacket Removal Process"
        desc4="Our specialists provide expert yellow jacket removal using a multi-step, safety-first approach:"
        ListDesc4=""
        Enddesc4="Our methods are designed to protect your property without harming the surrounding environment."
        threats={[
          "Complete site inspection to locate hidden nests",
          "Use of protective suits and regulated application tools",
          "Non-invasive treatments to neutralize the colony",
          "Nest removal and disposal using safety protocols",
          "Exclusion sealing to prevent future infestations",
          "Optional maintenance plans during peak wasp season",
        ]}
        ctaHeading="Get Safe, Fast Yellow Jacket Removal in Dubai"
        ctaText={`Stop worrying about stings and swarms. Accurate Pest Control is your trusted partner for safe and reliable yellow jacket removal in Dubai.`}
        ctaButtonText="Book Yellow Jacket Wasp Removal"
      />
      <Footer />
    </>
  );
};

export default YellowJacketWasp;
