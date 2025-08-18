import PestInfoPage from "../PestInfoPage";
import TopBar from "../../TopBar";
import Navbar from "../../Navbar";
import ServicesHero from "../../Services/ServicesHero";
import RodentHeroImg from "@/assets/Pests/Ant/Arhero.webp";
import Footer from "@/components/Footer";
//import React from "react";

const ArgentineAnt = () => {
  return (
    <>
      <TopBar />
      <Navbar />
      <ServicesHero
        title="Argentine Ants"
        breadcrumb="Home > Pests > Details"
        bgImg={RodentHeroImg}
      />
      <PestInfoPage
        title="About Argentine Ants"
        scientificName=""
        description={`The tiny, light to dark brown Argentine ants (Linepithema humile) are famous for establishing large colonies and breaking into houses and other structures. Originating in South America, these ants have spread all over the world and are especially tenacious in hot climates like Dubai. They frequently enter through foundations, pipes, and cracks and are attracted to moist, sugary meals.Their sheer numbers and ability to relocate quickly make professional control necessary.`}
        Heading1="Signs of an Argentine Ant Infestation"
        desc1="You may not notice them at first, but these are clear indicators of their presence:"
        pestDescription={[
          {
            label: "",
            value:
              "Long trails of tiny brown ants, especially in kitchens and bathrooms",
          },
          {
            label: "",
            number: "",
            value:
              "Sightings of ants near pet food, trash cans, or leaky faucets",
          },
          {
            label: "",
            value: "Small nests outdoors near concrete, mulch, or garden beds",
          },
          {
            label: "",
            value: "Rapid reappearance even after cleaning or spraying",
          },
        ]}
        Heading2="Where They Nest and How They Spread"
        desc2="Argentine ants are unique in their nesting behavior. Unlike other ant species, they don’t compete with neighboring colonies  instead, they join together, forming massive supercolonies."
        ListDesc2="They typically nest in:"
        Enddesc2="They spread indoors by following smell tracks to water and food sources. Their colonies can cover large neighborhoods while they're outside."
        habits={[
          "Soil under patios or stones",
          "Cracks in walls and under tiles",
          "Electrical outlets, kitchen sinks, and wall voids",
          "Moist places like bathrooms and HVAC systems",
        ]}
        Heading3="Dangers and Property Concerns"
        desc3="Argentine ants cause additional issues even when they don't sting like fire ants:"
        habitat={[
          {
            label: "",
            value:
              "When they come in big numbers, they may enter pantries and kitchens.",
          },
          {
            label: "",
            value:
              "Their presence can attract other pests like aphids due to mutualistic relationships",
          },
          {
            label: "",
            value:
              "They may damage electrical systems by nesting inside appliances",
          },
          {
            label: "",
            value: "Infestations often return without proper treatment",
          },
        ]}
        List={[]}
        additional={[]}
        Heading4="Effective Ant Control Solutions"
        desc4="Managing Argentine ants takes more than a quick fix. A comprehensive strategy ensures long-term results:"
        threats={[
          "Smart use of targeted ant traps to disrupt their movement and feeding",
          "Application of professional-grade sprays to reach hidden nesting sites",
          "Fumigation in severe cases where colonies are deeply embedded",
          "Inspection in detail to find and seal all possible entrance points",
          "Ongoing monitoring to ensure the infestation doesn't return",
        ]}
        ctaHeading="Safe & Targeted Argentine Ant Control in Dubai"
        ctaText={`Seeing ant trails on your floor or sink? Accurate Pest Control Services LLC Dubai offers fast, reliable solutions to restore cleanliness with lasting results.`}
        ctaButtonText="Book Your Argentine Ant Inspection Today"
      />
      <Footer />
    </>
  );
};

export default ArgentineAnt;
