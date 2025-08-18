import PestInfoPage from "../PestInfoPage";
import TopBar from "../../TopBar";
import Footer from "@/components/Footer";
import Navbar from "../../Navbar";
import ServicesHero from "../../Services/ServicesHero";
import RodentHeroImg from "@/assets/Pests/Tick/brownhero.webp";
//import React from "react";

const BrownDogTick = () => {
  return (
    <>
      <TopBar />
      <Navbar />
      <ServicesHero
        title="Brown Dog Tick"
        breadcrumb="Home > Pests > Details"
        bgImg={RodentHeroImg}
      />
      <PestInfoPage
        title="About the Brown Dog Tick"
        scientificName=""
        description={`The Brown Dog Tick is one of the most persistent tick species found in urban environments, particularly in homes, kennels, and pet care facilities throughout Dubai. Since this species can live its whole life cycle indoors, unlike many others, it is particularly difficult to kill once an infestation has started. Its reddish-brown, flat body becomes engorged after feeding on a dog’s blood, often going unnoticed until it’s too late.
This tick species primarily targets dogs but may occasionally bite humans. Left untreated, it can transmit serious infections such as canine ehrlichiosis and babesiosis.`}
        
        Int=""
        descInt=""
       
        Heading1="Signs of a Brown Dog Tick Infestation"
        desc1="These ticks are stealthy but not invisible. Watch for the following signs:"
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

        Heading5=""
        desc5=""
        additional={[]}


        ctaHeading="Book Your Lone Star Tick Control Service Today"
        ctaText={`Don’t wait until a bite turns into a medical issue. For compassionate, certified tick control in Dubai, get in touch with Accurate Pest Control Services LLC Dubai right now. Our staff guarantees long-lasting, safe, and successful service.`}
        ctaButtonText="Book Lone Star Tick Control"
      />
      <Footer />
    </>
  );
};

export default BrownDogTick;
