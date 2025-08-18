import PestInfoPage from "../PestInfoPage";
import TopBar from "../../TopBar";
import Navbar from "../../Navbar";
import ServicesHero from "../../Services/ServicesHero";
import RodentHeroImg from "@/assets/Pests/Flies/fruithero.webp";
import Footer from "@/components/Footer";
//import React from "react";  

const Fruitfly = () => {
  return (
    <>
    <TopBar />
            <Navbar />
            <ServicesHero
              title="Fruit Fly"
              breadcrumb="Home > Pests > Details"
              bgImg={RodentHeroImg}
            />
    <PestInfoPage
      title=" About the Fruit Fly"
      scientificName="Mus musculus"
      description={`Small but persistent, the Fruit Fly is a common invader of kitchens, markets, and restaurants across Dubai. Processing fruits, vegetables, and sweet leftovers attracts these flies, which spread quickly and are challenging to remove. While they don’t bite, their presence is unsanitary and frustrating, especially in food preparation areas where hygiene is critical.`}

      Heading1="Signs You May Have a Fruit Fly Problem"
      desc1="Think you might be dealing with fruit flies? Here are some clear warning signs:"
      Enddesc1="If a few are left untouched under the correct circumstances, infestations can occur in even the cleanest houses and restaurants."
      pestDescription={[
        {  value: "Tiny flies hovering near fruit bowls, garbage bins, or sinks" },
        {  value: "Sour, vinegar-like smell in areas with food residue" },
        {  value: "Flies emerging from drains or wet mop heads" },
        {  value: "Increased activity during warmer, humid days" },
        {  value: "Small clusters of flies in pantries or near open beverages" },
        
      ]}
      List={[]}
      Heading2="Where They Breed and Multiply"
      desc2="Fruit flies lay their eggs in moist, organic matter. Their ideal breeding zones include:"
      Enddesc2="Fruit flies can hatch hundreds of eggs laid by a single female in less than a day, turning a minor problem into a major infestation in a matter of days."
      habits={[
        "Overripe or fermenting fruits and vegetables",
        "Drains with food residue",
        "Empty bottles, cans, and recyclables",
        "Mops, sponges, and dish cloths left damp",
        "Cracks in the wall edges or floor tiles next to the food storage area",
      ]}
     habitat={[]}
     additional={[]}
      Heading4="How Accurate Pest Control Services LLC Dubai Treats Fruit Fly Infestations"
      desc4="At Accurate Pest Control Services LLC Dubai, we use a precision-based approach to eliminate fruit fly problems at the source. Our trained fruit fly exterminator team inspects your property to locate hidden breeding grounds and then applies targeted treatment using safe, food-safe solutions."
      ListDesc4="Our services include:"
      Enddesc4="We not only eliminate the visible flies we break the breeding cycle by targeting the eggs and attractants."
      threats={[
        "Drain and surface treatment with organic-safe insecticides",
        "Removal of attractants and sanitation coaching",
        "Strategic use of fruit fly traps and baits",
        "Deep cleaning recommendations for kitchens and storage areas",
        "Ongoing prevention and monitoring plans",
      ]}

      ctaHeading="Book Expert Fruit Fly Control Services Today"
      ctaText={`Don’t let fruit flies ruin your kitchen, cafe, or grocery store. Set up your inspection with the trusted pest control experts in Dubai right now.`}
      ctaButtonText="Schedule Your Fruit Fly Inspection Now"
    />
    <Footer />
    </>
  );
};

export default Fruitfly;
