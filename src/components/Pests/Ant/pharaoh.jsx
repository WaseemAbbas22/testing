import PestInfoPage from "../PestInfoPage";
import TopBar from "../../TopBar";
import Navbar from "../../Navbar";
import ServicesHero from "../../Services/ServicesHero";
import RodentHeroImg from "@/assets/Pests/Ant/Phhero.webp";
import Footer from "@/components/Footer";
//import React from "react";

const PharaohAnt = () => {
  return (
    <>
      <TopBar />
      <Navbar />
      <ServicesHero
        title="Pharaoh Ants"
        breadcrumb="Home > Pests > Details"
        bgImg={RodentHeroImg}
      />
      <PestInfoPage
        title="About Pharaoh Ants"
        scientificName=""
        description={`The tiny, light yellow to reddish ants with darker abdomens are known as pharaoh ants (Monomorium pharaonis). Despite their small size, they are among the most troublesome indoor pests, particularly in hospitals, restaurants, and residential buildings. Known for forming multiple colonies and splitting when disturbed, they require advanced control strategies beyond standard ant treatments.`}
        Heading1="Signs of a Pharaoh Ant Infestation"
        desc1="These ants are hard to detect early on, but look out for:"
        pestDescription={[
          {
            label: "",
            value:
              "Long trails of tiny ants in kitchens, bathrooms, and utility rooms",
          },
          {
            label: "",
            number: "",
            value:
              "Ants emerging from wall voids, electrical outlets, or cracks",
          },
          {
            label: "",
            value: "Food contamination, especially in sweet or greasy items",
          },
          {
            label: "",
            value: "Difficulty eliminating them with DIY sprays or traps",
          },
        ]}
        Heading2="Where They Nest and How They Spread"
        desc2=""
        ListDesc2="Pharaoh ants are especially hard to control because of their unique behavior. They build nests in:"
        Enddesc2="This ant breed reproduces rapidly and forms satellite colonies, allowing them to spread across entire floors or buildings within weeks."
        habits={[
          "Wall voids, behind baseboards, and inside cabinets",
          "Electrical appliances and switch boxes",
          "Warm, humid areas like boiler rooms or laundries",
        ]}
        Heading3="Health Concerns and Risks"
        desc3="Pharaoh ants are known carriers of harmful pathogens. They can:"
        // habitat={[
        //   "Contaminate medical equipment, food, and sterile environments",
        //   "Spread bacteria such as Salmonella and Streptococcus",
        //   "Cause recurring infestations due to colony splitting when disturbed",
        // ]}
        habitat={[
          {
            label: "",
            value:
              "Contaminate medical equipment, food, and sterile environments",
          },
          {
            label: "",
            value: "Spread bacteria such as Salmonella and Streptococcus",
          },
          {
            label: "",
            value:
              "Cause recurring infestations due to colony splitting when disturbed",
          },
        ]}
        List={[]}
        additional={[]}
        Heading4="Effective Pharaoh Ant Control Strategies"
        desc4="Because they multiply so quickly, a specialized approach is required:"
        Enddesc4=""
        threats={[
          "Use of slow-acting ant poison baits that worker ants transport back to the nest, ensuring colony-wide elimination",
          "Careful monitoring and expert treatment plans designed for long-term control and prevention",
          "Strategic product placement to avoid colony splitting and hidden nest formation",
          "Stay away from strong sprays and do-it-yourself techniques that could make the infestation worse.",
        ]}
        ctaHeading="Safe & Proven Pharaoh Ant Solutions in Dubai"
        ctaText={`Pharaoh ants pose health risks, especially in sensitive spaces. Accurate Pest Control Services LLC Dubai offers discreet, safe, and effective treatments for clinics, kitchens, and offices.`}
        ctaButtonText="Book Your Pharaoh Ant Inspection Today"
      />
      <Footer />
    </>
  );
};

export default PharaohAnt;
