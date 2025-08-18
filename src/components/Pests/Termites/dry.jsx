import PestInfoPage from "../PestInfoPage";
import TopBar from "../../TopBar";
import Footer from "@/components/Footer";
import Navbar from "../../Navbar";
import ServicesHero from "../../Services/ServicesHero";
import RodentHeroImg from "@/assets/Pests/Termite/dryhero.webp";
//import React from "react";

const DrywoodTermites = () => {
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
        title="About Drywood Termites"
        scientificName=""
        description={`Drywood termites, like their underground family, do not need to come into contact with soil in order to survive. These pests live and feed directly within wooden structures from furniture and floorboards to wall frames and decorative pieces. In dry and warm climates like Dubai, they pose a serious threat to homes, especially where moisture levels are low but wood is abundant.`}
        
        Int=""
        descInt=""
       
        Heading1="Common Signs of a Drywood Termite Infestation"
        desc1="Timely Drywood Termite detection can prevent costly damage."
        ListDesc1="Look for:"
        Enddesc1="These pests don’t rely on mud tubes, making them harder to spot without expert inspection."
        pestDescription={[
          { value: "Small piles of wood colored droppings (frass)"},
          { value: "Hollow sounding or cracked wooden surfaces"},
          { value: "Bubbling paint or unexplained blisters in wood"},
          { value: "Tunnels or galleries inside wooden furniture"},
          { value:"Discarded wings near windows or wooden structures"},
        ]}
        List={[]}


        Int2=""
        descInt2=""

        Heading2="How They Live and Spread"
        desc2="Drywood Termites build their colonies directly inside wood, without needing soil moisture. Unlike subterranean species, they don’t require large water sources or ground access."
        ListDesc2="They are commonly found in:"
        Enddesc2="Because the infestation is usually internal, they can spread quietly from one piece of wood to another, especially if furniture is moved or shared."

        habits={[
          "Antique wooden furniture",
          "Roof timbers and attic beams",
          "Doors, cabinets, and wooden frames",
          "Hardwood floors and decorative trims",
        ]}


        Heading3="Effective Solutions for Long-Term Protection"
        desc3="At Accurate Pest Control Services LLC, Dubai, we provide the best termite treatment designed specifically for Drywood infestations. Our integrated approach includes both prevention and removal, offering maximum protection."
        Enddesc3="We also educate homeowners on minimizing clutter and reducing indoor insect populations to cut off the spider’s food supply."
        ListDesc3="Our termite solutions include:"       
        habitat={[
          { value: "Precision injection treatments targeting wood cavities"},
          { value: "Fumigation for severe, widespread infestations"},
          { value: "Surface treatments that penetrate deep into timber"},
          { value: "Preventive coatings for new wooden installations"},
          { value:"Follow-up inspections to ensure no recurrence"},
        ]}





        Heading4=""
        desc4=""
        ListDesc4=""
        Enddesc4=""
        threats={[]}

        Heading5=""
        desc5=""
        additional={[]}


        ctaHeading="Book the Pest Control Services"
        ctaText={`Get professional assistance from Dubai best pest control companies. We use advanced, eco-friendly methods to eliminate Drywood colonies and protect your home or office from future attacks.`}
        ctaButtonText="Schedule Your Drywood Termite Inspection Today"
      />
      <Footer />
    </>
  );
};

export default DrywoodTermites;
