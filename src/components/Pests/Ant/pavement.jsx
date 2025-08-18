import PestInfoPage from "../PestInfoPage";
import TopBar from "../../TopBar";
import Navbar from "../../Navbar";
import ServicesHero from "../../Services/ServicesHero";
import RodentHeroImg from "@/assets/Pests/Ant/Pahero.webp";
import Footer from "@/components/Footer";
//import React from "react";

const PavementAnt = () => {
  return (
    <>
      <TopBar />
      <Navbar />
      <ServicesHero
        title="Pavement Ants"
        breadcrumb="Home > Pests > Details"
        bgImg={RodentHeroImg}
      />
      <PestInfoPage
        title="About Pavement Ants"
        scientificName=""
        description={`Small, dark brown to black ants called pavement ants (Tetramorium caespitum) frequently make their nests beneath roadways, sidewalks, and building foundations. These ants often make their way indoors through cracks and crevices, especially in search of food. While they’re not aggressive, their persistence and colony size can cause ongoing issues for both homes and businesses in Dubai.`}
        Heading1="Signs of a Pavement Ant Infestation"
        desc1="Though tiny, pavement ants leave behind some noticeable signs:"
        pestDescription={[
          {
            label: "",
            value:
              "Small dirt mounds or sand piles near pavement cracks or baseboards",
          },
          {
            label: "",
            number: "",
            value:
              "Ant trails that lead to food crumbs, pet foods, or garbage.",
          },
          {
            label: "",
            value: "Increased activity during warm weather or after rain",
          },
          {
            label: "",
            value: "Nests around tiles, concrete edges, or basement floors",
          },
        ]}
        List={[]}
        Heading2="Where They Nest and How They Spread"
        desc2=""
        ListDesc2="Pavement ants prefer to nest in:"
        Enddesc2="In search of food, these ants travel far from their colonies. Once a trail is established, they can quickly invade your space in large numbers."
        habits={[
          "Sidewalk joints and under concrete slabs",
          "Gaps in walls, floorboards, and baseboards",
          "Kitchens, pantries, and under appliances once indoors",
        ]}
        Heading3="Health Risks and Property Concerns"
        desc3="While not dangerous to health, pavement ants can:"
        // habitat={[
        //   "Contaminate food by foraging in kitchen areas",
        //   "Attract other pests like cockroaches",
        //   "Spread throughout multi-unit buildings or shared walls",
        //   "Become difficult to eliminate without professional help",
        // ]}
        habitat={[
          { label: "", value: "Contaminate food by foraging in kitchen areas" },
          { label: "", value: "Attract other pests like cockroaches" },
          {
            label: "",
            value: "Spread throughout multi-unit buildings or shared walls",
          },
          {
            label: "",
            value: "Become difficult to eliminate without professional help",
          },
        ]}
        additional={[]}
        Heading4="Controlling Pavement Ants Effectively"
        desc4=""
        Enddesc4="For aggressive infestations near lawns or gardens, specialized fire ant pest control methods may be recommended."
        threats={[
          "Effective control requires more than surface-level sprays. It should include:",
          "Use of ant spray products that reach into cracks and voids",
          "Methods of targeted trapping to kill colonies at their source.",
          "Sealing entry points to block re-entry",
          "Expert guidance on keeping indoor ant infestations from returning",
          "Safe and thorough ant fumigation services in severe or commercial infestations",
        ]}
        ctaHeading="Fast & Professional Pavement Ant Removal in Dubai"
        ctaText={`Pavement ants are common, but they don’t have to stay. Accurate Pest Control Services LLC Dubai provides fast, safe, and effective treatments tailored to your space.`}
        ctaButtonText="Schedule Your Pavement Ant Inspection Today"
      />
      <Footer />
    </>
  );
};

export default PavementAnt;
