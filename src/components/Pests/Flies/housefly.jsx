import PestInfoPage from "../PestInfoPage";
import TopBar from "../../TopBar";
import Navbar from "../../Navbar";
import ServicesHero from "../../Services/ServicesHero";
import RodentHeroImg from "@/assets/Pests/Flies/househero.webp";
import Footer from "@/components/Footer";
import { House } from "lucide-react";
//import React from "react";

const Housefly = () => {
  return (
    <>
      <TopBar />
      <Navbar />
      <ServicesHero
        title="House Fly"
        breadcrumb="Home > Pests > Details"
        bgImg={RodentHeroImg}
      />
      <PestInfoPage
        title="About the House Fly"
        scientificName=""
        description={`One of the most widespread indoor pests in Dubai, the House Fly is more than just a tension. It breeds rapidly, feeds on waste, and is known for spreading bacteria and viruses. Flies land on food, kitchen counters, garbage bins, and even your skin, contaminating everything they touch. Understanding their habits and how fast they reproduce is key to stopping an infestation early.`}
        Heading1="Symptoms of a Possible House Fly Issue"
        desc1="Wondering if your home or workplace is dealing with a fly issue? Watch out for these signs:"
        Enddesc1="Even a small fly presence can escalate quickly if not addressed, especially in areas with poor ventilation or food waste."
        pestDescription={[
          {
            value: "Flies hovering near drains, trash bins, or uncovered food",
          },
          { value: "Constant buzzing or swarming around windows and lights" },
          { value: "Clusters of tiny, white eggs in moist or dirty areas" },
          {
            value:
              "Dark, sticky patches (fly droppings) next to kitchen countertops or sinks",
          },
          {
            value: "A sudden increase in fly activity in humid or hot weather",
          },
        ]}
        List={[]}
        Heading2="Where They Breed and Multiply"
        desc2="Warm, humid conditions with easy access to organic matter are perfect for house flies. "
        ListDesc2="Common breeding zones include:"
        Enddesc2="A house fly's life is short but powerful.In just 7–10 days, an egg can become an adult fly, and a single female can lay hundreds of eggs in her lifetime. That’s why immediate action is so critical."
        habits={[
          "Kitchen trash cans and compost bins",
          "Uncovered food, especially fruits and meats",
          "Drain openings, especially in commercial kitchens",
          "Animal waste or litter areas",
          "Gaps around windows, vents, or doors",
        ]}
        habitat={[]}
        additional={[]}
        Heading4="How Accurate Pest Control Services LLC Dubai Treats House Fly Infestations"
        desc4="To eliminate fly problems, Accurate Pest Control Services LLC Dubai, uses advanced insect removal solutions backed by science and experience. We begin with a full inspection to locate breeding areas, entry points, and contributing conditions before applying any treatment."
        ListDesc4="We offer:"
        Enddesc4="Our team also educates clients on daily hygiene habits, food storage techniques, and airflow improvements to reduce future risks."
        threats={[
          "Use of safe, approved sprays and fly bait traps",
          "Targeted treatment for drains, vents, and food zones",
          "Professional sanitation support and prevention strategies",
          "Customized indoor and outdoor fly control plans",
          "Ongoing maintenance and monitoring visits",
        ]}
        ctaHeading="Book Expert Fly Control Services Today"
        ctaText={`Don’t let flies take over your kitchen or workspace. Our licensed pest control experts are prepared to bring comfort and cleanliness back.`}
        ctaButtonText="Schedule Your House Fly Inspection Now]"
      />
      <Footer />
    </>
  );
};

export default Housefly;
