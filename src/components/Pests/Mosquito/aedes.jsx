import PestInfoPage from "../PestInfoPage";
import TopBar from "../../TopBar";
import Navbar from "../../Navbar";
import ServicesHero from "../../Services/ServicesHero";
import Footer from "@/components/Footer";
import RodentHeroImg from "@/assets/Pests/Mosquito/aedeshero.webp";
//import React from "react";

const AedesMosquito = () => {
  return (
    <>
      <TopBar />
      <Navbar />
      <ServicesHero
        title="Aedes Mosquito"
        breadcrumb="Home > Pests > Details"
        bgImg={RodentHeroImg}
      />
      <PestInfoPage
        title="About the Aedes Mosquito"
        scientificName=""
        description={`The Aedes Mosquito is one of the most dangerous mosquito species found in Dubai and across the UAE. Recognizable by its black-and-white striped body and legs, this aggressive mosquito is the primary carrier of dengue, chikungunya, and Zika virus.It is much more difficult to avoid because It bites all day long, in contrast to most other species.Aedes mosquitoes are most active in early morning and late afternoon and breed in clean, stagnant water. Their ability to lay eggs that survive in dry conditions for months makes them especially difficult to control without professional intervention.`}
        Heading1="Symptoms of a Possible Mosquito Infestation"
        desc1="Think you may have a Mosquito problem? Look out for these signs:"
        Enddesc1="Because this species is a vector of multiple diseases, even minor infestations should be addressed immediately."
        pestDescription={[
          {
            value:
              "Frequent daytime mosquito bites, especially on ankles and arms",
          },
          { value: "Sightings of small, striped mosquitoes flying indoors" },
          {
            value:
              "Clean water standing in storage tanks, water trays, or plant pots",
          },
          {
            value: "Larvae “wrigglers” visible in water sources",
          },
          {
            value:
              "Increased mosquito activity after rainfall or during humid weather",
          },
        ]}
        List={[]}


        Heading2="Where They Breed"
        desc2="Aedes Mosquitoes prefer clean water in artificial containers and can breed with as little as a few drops. "
        ListDesc2="Common breeding sites include:"
        Enddesc2="Hundreds of eggs can be laid by a single female, and they hatch in a few of days."
        habits={[
          "Flower pots and plant trays",
          "Buckets, tires, and rooftop tanks",
          "AC trays and open water containers",
          "Bathroom drains and utility areas",
          "Water collected on construction sites",
          "Unused or open containers around gardens or backyards",
        ]}


        habitat={[]}
        additional={[]}

        Heading4="How Accurate Pest Control Services LLC Dubai Treats Aedes Mosquito Infestations"
        desc4="At Accurate Pest Control Services LLC Dubai, we provide science backed, eco safe, and effective mosquito control treatments. Our experts use a combination of source reduction, adult mosquito control, and preventive strategies to stop Aedes infestations at every stage."
        ListDesc4="We offer:"
        Enddesc4="We don’t just kill mosquitoes we block their entire life cycle to ensure they don’t return."
        threats={[
          "Targeted spraying using the best mosquito killer products that are safe for families and pets",
          "Site specific advice and installation of barriers or traps in high risk areas",
          "Recommendations on choosing the right mosquito repellent for daily use",
          "Scheduled inspections and follow-up maintenance for long-term protection",
        ]}
        ctaHeading="Book Your Aedes Mosquito Inspection Today"
        ctaText={`DDon't wait until bites turn into serious illness. Our certified team is ready to inspect, treat, and protect your home or business using reliable, affordable solutions.`}
        ctaButtonText="Book Your Aedes Mosquito Service"
      />
      <Footer />
    </>
  );
};

export default AedesMosquito;
