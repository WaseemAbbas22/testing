import PestInfoPage from "../PestInfoPage";
import TopBar from "../../TopBar";
import Footer from "@/components/Footer";
import Navbar from "../../Navbar";
import ServicesHero from "../../Services/ServicesHero";
import RodentHeroImg from "@/assets/Pests/Tick/lonehero.webp";
//import React from "react";

const LoneStarTick = () => {
  return (
    <>
      <TopBar />
      <Navbar />
      <ServicesHero
        title="Lone Star Tick"
        breadcrumb="Home > Pests > Details"
        bgImg={RodentHeroImg}
      />
      <PestInfoPage
        title="About the Lone Star Tick"
        scientificName=""
        description={`An increasingly common parasite in outdoor green spaces, especially those in nearby of grassy gardens, wooded areas, and animal shelters in Dubai, is the Lone Star Tick. Easily recognized by the distinctive white dot on the female’s back, this tick species is notorious for its painful bite and potential to spread diseases such as ehrlichiosis and Southern tick-associated rash illness (STARI).
Though it’s more common in pets and livestock, humans working in landscaping, gardening, or animal handling are also at risk. Tick infestations may go unnoticed until symptoms like rashes or fatigue appear, making early inspection vital.`}
        
        Int=""
        descInt=""
       
        Heading1="Signs of a Lone Star Tick Infestation"
        desc1="While ticks are small and often hidden, here are key signs that point to their presence:"
        ListDesc1=""
        Enddesc1="Ticks may stick to people and pets undetected and prefer moist, shady areas. If their bites are not removed right away, they can spread germs and trigger allergic reactions."
        pestDescription={[
          {value:"Pets constantly scratching or biting their skin"},
          {value:"Round bite marks or reddish bumps on exposed skin"},
          {value:"Tiny dark-colored insects in pet fur or on furniture"},
          {value:"Presence of wildlife (e.g., stray cats, rodents) that may carry ticks"},
          {value:"Discovery of engorged ticks near pet beds, garden tools, or shoes"},
          {value:"Itchy skin irritation, especially after outdoor activity"},
        ]}
        List={[]}


        Int2=""
        descInt2=""

        Heading2="Where Lone Star Ticks Hide"
        desc2="These pests are skilled at staying out of sight, usually nesting in:"
        ListDesc2=""
        Enddesc2="Their stealthy nature makes tick pest control a necessary preventive service, particularly for homes with outdoor pets or backyard activity zones."

        habits={[
          "Tall grasses and overgrown lawns",
          "Dog kennels, barns, and sheds",
          "Cracks in patios or garden retaining walls",
          "Leaf litter, compost heaps, or mulch beds",
          "Under outdoor furniture cushions or mats",
          "Wildlife trails or pet pathways",
        ]}



        Heading3=""
        desc3=""
        ListDesc3=""       
        Enddesc3=""
        habitat={[]}





        Heading4="How Accurate Pest Control Handles Lone Star Tick Removal"
        desc4="At Accurate Pest Control Services LLC Dubai, we remove ticks and their breeding grounds by combining exact treatment with pet-safe technology."
        ListDesc4="Our specialized approach includes:"
        Enddesc4="We also advise clients on habitat modification, such as trimming vegetation and fencing pet zones,to reduce future tick attraction."
        threats={[
          "Inspection of the entire property to find risk factors and tick nests",
          "Application of eco-conscious acaricides (tick-specific treatments)",
          "Targeted yard and perimeter spraying, especially around pet areas",
          "Sealing of entryways where ticks may hitchhike inside",
          "Elimination of tick eggs and larvae to interfere with their life cycle",
          "Follow-up tick bite treatment guidance and monitoring for recurrence",
        ]}

        Heading5="Safety First"
        desc5="Ticks may seem small, but their health impact is serious. Avoid home remedies or over-the-counter chemicals that may harm pets or fail to kill eggs. Instead, trust licensed tick control experts for complete protection."
        additional={[]}


        ctaHeading="Book Your Lone Star Tick Control Service Today"
        ctaText={`Don’t wait until a bite turns into a medical issue. For compassionate, certified tick control in Dubai, get in touch with Accurate Pest Control Services LLC Dubai right now. Our staff guarantees long-lasting, safe, and successful service.`}
        ctaButtonText="Book Lone Star Tick Control"
      />
      <Footer />
    </>
  );
};

export default LoneStarTick;
