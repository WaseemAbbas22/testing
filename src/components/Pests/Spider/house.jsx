import PestInfoPage from "../PestInfoPage";
import TopBar from "../../TopBar";
import Footer from "@/components/Footer";
import Navbar from "../../Navbar";
import ServicesHero from "../../Services/ServicesHero";
import RodentHeroImg from "@/assets/Pests/Spider/househero.webp";
//import React from "react";

const HouseSpider = () => {
  return (
    <>
      <TopBar />
      <Navbar />
      <ServicesHero
        title="House Spider"
        breadcrumb="Home > Pests > Details"
        bgImg={RodentHeroImg}
      />
      <PestInfoPage
        title="About the House Spider"
        scientificName=""
        description={`One of the most common indoor arachnids found in homes across Dubai. Typically non-aggressive, these spiders often build messy webs in corners, basements, or near ceilings to catch insects. While most house spiders are harmless, some like the brown house spider can trigger concern due to their fast reproduction and tendency to hide in furniture or storage. In rare cases, people mistake them for more dangerous species. Regardless of their level of threat, no one enjoys sharing their home with spiders.`}
        
        Int=""
        descInt=""
       
        Heading1="Signs You May Have a House Spider Problem"
        desc1="Do you think there might be unwanted eight legged visitors in your space?"
        ListDesc1="Look out for these signs of infestation:"
        Enddesc1="Look out for these signs of infestation:"
        pestDescription={[
          { value: "Cobwebs in room corners or ceiling edges",},
          { value: "Frequent spider sightings, especially at night"},
          { value: "Egg sacs tucked in undisturbed places",},
          { value: "Musty smells in dark storage areas",},
          {value:"Insects are suddenly disappearing (spiders may be feeding)"},
        ]}
        List={[]}


        Int2=""
        descInt2=""

        Heading2="Where They Hide and Multiply"
        desc2="House spiders prefer dark, secluded spots where food sources (insects) are abundant."
        ListDesc2="Common hiding zones include:"
        Enddesc2="Their ability to remain unseen for long periods allows them to grow in number quickly."

        habits={[
          "Behind furniture and appliances",
          "Inside wall crevices and baseboards",
          "Under staircases and shelves",
          "Near windows, especially with outdoor lighting",
          "In garages, attics, or garden sheds",
        ]}


        Heading3="How Accurate Pest Control Services LLC Dubai Treats Spider Infestations"
        desc3="To successfully remove home spider infestations, Accurate Pest Control Services LLC Dubai use modern techniques and pest control chemicals. Our expert team conducts a thorough inspection of your property to identify webbing, nesting zones, and egg sacs before beginning treatment."
        Enddesc3="We also educate homeowners on minimizing clutter and reducing indoor insect populations to cut off the spider’s food supply."
        ListDesc3="We offer:"       
        habitat={[
          { value: "Safe, eco friendly application of professional grade insecticides" },
          { value: "Complete web and egg removal" },
          { value: "Entry-point sealing and environmental adjustments"},
          { value: "Tailored indoor and outdoor treatment plans"},
          {value:"Long-term monitoring and control services"},
        ]}





        Heading4=""
        desc4=""
        ListDesc4=""
        Enddesc4=""
        threats={[]}

        Heading5=""
        desc5=""
        additional={[]}


        ctaHeading="Book Expert Spider Control Services Today"
        ctaText={`Don’t let a few webs turn into a widespread infestation. Our certified experts offer trustworthy spider removal services designed for Dubai residences and commercial buildings.`}
        ctaButtonText="Schedule Your Spider Inspection Now"
      />
      <Footer />
    </>
  );
};

export default HouseSpider;
