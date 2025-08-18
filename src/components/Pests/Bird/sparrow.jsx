import PestInfoPage from "../PestInfoPage";
import TopBar from "../../TopBar";
import Footer from "@/components/Footer";
import Navbar from "../../Navbar";
import ServicesHero from "../../Services/ServicesHero";
import RodentHeroImg from "@/assets/Pests/Bird/sparrowhero.webp";
//import React from "react";

const HouseSparrow = () => {
  return (
    <>
      <TopBar />
      <Navbar />
      <ServicesHero
        title="House Sparrow"
        breadcrumb="Home > Pests > Details"
        bgImg={RodentHeroImg}
      />
      <PestInfoPage
        title="About the House Sparrow"
        scientificName=""
        description={`The House Sparrow is one of the most widespread bird species found in urban Dubai. Small, brown-grey in color, and highly adaptive, these birds are commonly seen nesting around rooftops, windows, AC units, and even within wall cavities. While seemingly harmless, sparrow infestations can lead to hygiene problems, property damage, and excessive noise, especially in commercial buildings.
Beyond the chirping and clutter, they may also attract parasites and cause blockages in drainage or vents, making proper management critical for maintaining a clean and safe environment.`}
        
        Int=""
        descInt=""
       
        Heading1="Symptoms of a House Sparrow Infestation"
        desc1=""
        ListDesc1=""
        Enddesc1="These signs often indicate an ongoing or developing issue requiring expert bird removal services."
        pestDescription={[
          { value: "Accumulation of droppings on window frames or under nesting areas"},
          { value: "Nesting materials such as straw, feathers, or paper in vents or eaves"},
          { value: "Persistent chirping, especially at dawn or dusk"},
          { value: "The existence of bug bites or bird mites indoors"},
          {value:"Damage to insulation or wires in walls and ceilings"},
          {value:"Foul odor from decaying nesting material"},
          {value:"A sudden increase in pest insects attracted to droppings"},
        ]}
        List={[]}


        Int2=""
        descInt2=""

        Heading2="Where House Sparrows Nest"
        desc2="Sparrows prefer enclosed, elevated spots with warmth and access to food."
        ListDesc2="Common nesting locations include:"
        Enddesc2="They are persistent and can return unless effectively deterred."

        habits={[
          "Rooftop gutters or rainwater pipes",
          "Holes in walls or broken air vents",
          "Behind signage or AC compressor units",
          "Ceiling panels in warehouses",
          "Garage rafters or open attic spaces",
          "Outdoor lighting fixtures",
          "Eaves and balconies of residential buildings",
        ]}


        Heading3="How Accurate Pest Control Removes House Sparrows"
        desc3="We understand that effective bird control involves humane practices, legal compliance, and long-term prevention."
        ListDesc3="Here’s how we manage sparrow infestations:"       
        Enddesc3="Our experts guarantee little disturbance while producing results that last."
        habitat={[
          { value: "Professional bird repeller device installation (ultrasonic or physical deterrents)"},
          { value: "Cleaning and removing nests to get rid of germs and insects"},
          { value: "Structural sealing to block future nesting spots"},
          { value: "Use of reflective deterrents or spike strips on ledges and sills"},
          { value: "Tailored removal strategy based on location and infestation level"},
          { value: "Education and awareness for homeowners or building managers"},
        ]}





        Heading4=""
        desc4=""
        ListDesc4=""
        Enddesc4=""
        threats={[]}

        Heading5=""
        desc5=""
        additional={[]}


        ctaHeading="Book Your House Sparrow Removal Today"
        ctaText={`Don’t let sparrows take over your home or business. For quick, considerate, effective bird removal services throughout Dubai, get in touch with Accurate Pest Control Services LLC Dubai.`}
        ctaButtonText="Book Your House Sparrow Service"
      />
      <Footer />
    </>
  );
};

export default HouseSparrow;
