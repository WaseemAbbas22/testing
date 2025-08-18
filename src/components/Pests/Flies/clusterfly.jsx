import PestInfoPage from "../PestInfoPage";
import TopBar from "../../TopBar";
import Navbar from "../../Navbar";
import ServicesHero from "../../Services/ServicesHero";
import RodentHeroImg from "@/assets/Pests/Flies/clusterhero.webp";
//import React from "react";  
import Footer from "@/components/Footer";

const Clusterfly = () => {
  return (
    <>
    <TopBar />
            <Navbar />
            <ServicesHero
              title="Cluster Fly"
              breadcrumb="Home > Pests > Details"
              bgImg={RodentHeroImg}
            />
    <PestInfoPage
      title="About the Cluster Fly"
      scientificName=""
      description={`Often mistaken for house flies, the Cluster Fly is slower-moving, quieter, and known for gathering in large numbers around windows and Storage areas, especially during cooler months. Unlike house flies, they don’t reproduce indoors or feed on garbage instead, they enter homes seeking warmth and shelter. Though harmless, their large groups and tendency to reappear year after year make them a persistent tension for many Dubai residents.`}

      Heading1="Signs You May Have a Cluster Fly Problem"
      desc1="Look for these common symptoms of a cluster fly presence."
      Enddesc1="While they don't bite or carry disease like house flies, cluster flies can stain walls, die in ventilation systems, and create unpleasant indoor conditions."
      pestDescription={[
        {value: "In areas with sunny windows, especially on upper floors, flies gather." },
        {value: "Slow, lazy flying behavior, unlike typical buzzing house flies" },
        {value: "Many dead or slow-moving flies in storage spaces" },
        {value: "Over time, a musty smell from flies remains" },
        {value: "Re-infestation during cooler seasons when flies re-enter to hibernate" },
 
      ]}
      List={[]}

      Heading2="Where They Hide and Gather"
      desc2="Cluster flies usually enter through small cracks and gaps in walls, roofing, or window frames. Once within, they hide in big groups in locations like:"
      Enddesc2="During warm days in winter, they may become active again, flying toward sunlight and disturbing indoor peace."
      habits={[
        "Attics and crawl spaces",
        "Window sills and behind curtains",
        "Inside wall voids or ceiling cracks",
        "Behind picture frames or electrical outlets",
        "Garages and storage sheds",
      ]}
      
        habitat={[]}
        additional={[]}

      Heading4="How to Treat Cluster Fly Infestations"
      desc4="To eliminate these seasonal invaders, Accurate Pest Control Services LLC Dubai uses targeted methods that go beyond surface-level solutions. Our fly killer treatments are safe, effective, and customized based on the size and layout of your property. We begin with a complete inspection, followed by strategic application of treatments in nesting and entry areas."
      ListDesc4="Our services include:"
      Enddesc4="If needed, our certified wasp exterminator team will handle attic or outdoor entry point infestations as part of the treatment plan."
      threats={[
        "Application of long-lasting, low-toxicity insecticides",
        "Sealing of entry points and wall cracks",
        "Vacuum removal of large fly groups and their remains",
        "Preventive outdoor treatments before fly season",
        "Full sanitation advice and support",
      ]}
      ctaHeading="Book Expert Cluster Fly Control Services Today"
      ctaText={`Avoid allowing group flies to colonize your peaceful areas. Contact Accurate Pest Control Services LLC Dubai, for professional fly control and lasting prevention.`}
      ctaButtonText="Schedule Your Cluster Fly Inspection Now"
    />
    <Footer />
    </>
  );
};

export default Clusterfly;
