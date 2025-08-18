import PestInfoPage from "../PestInfoPage";
import TopBar from "../../TopBar";
import Footer from "@/components/Footer";
import Navbar from "../../Navbar";
import ServicesHero from "../../Services/ServicesHero";
import RodentHeroImg from "@/assets/Pests/Mosquito/culexhero.webp";
//import React from "react";

const CulexMosquito = () => {
  return (
    <>
      <TopBar />
      <Navbar />
      <ServicesHero
        title="Culex Mosquito"
        breadcrumb="Home > Pests > Details"
        bgImg={RodentHeroImg}
      />
      <PestInfoPage
        title="About the Culex Mosquito"
        scientificName=""
        description={`It is a common night-biting species found throughout Dubai and the UAE. Though smaller in size, it poses serious health risks and is one of the main sources of mosquitoes around house during evenings.`}
        
        Int="Why Culex Mosquitoes Are a Concern"
        descInt="Culex is a silent biter and a proven carrier of West Nile Virus, encephalitis, and filariasis. Though not aggressive, its disease risk is real."
       
        Heading1="How to Identify Culex Mosquitoes"
        desc1=""
        Enddesc1=""
        pestDescription={[
          {
            value: "Dull-brown body",
          },
          { value: "Small size and low flight"},
          {
            value: "Rest flat on surfaces",
          },
          {
            value:
              "TActive during dusk and nighttime",
          },
        ]}
        List={[]}
        Int2="Know the Mosquito Lifecycle"
        descInt2="The average mosquito lifespan for Culex ranges from 10 days to several weeks. Females can lay hundreds of eggs at once making infestations hard to manage without help."

        Heading2="Signs of a Culex Mosquito Infestation"
        desc2=""
        ListDesc2=""
        Enddesc2=""
        habits={[
          "Itchy bites while sleeping",
          "Increased mosquitoes near drains and pipes",
          "Mosquitoes flying low indoors at night",
          "Unpleasant buzzing sounds in bedrooms",
          "Water puddles in gutters or bathrooms",
        ]}
        Heading3="Where Do Culex Mosquitoes Breed?"
        ListDesc3="They lay eggs in:"       
        habitat={[
          { value: "Storm drains and sewer lines" },
          { value: "Clogged gutters and irrigation ditches" },
          { value: "Birdbaths, pet bowls, and old tires"},
          { value: "AC overflow trays and garden puddles"},
        ]}





        Heading4="How We Eliminate Culex Mosquitoes"
        desc4="Accurate Pest Control Services LLC Dubai offers:"
        ListDesc4=""
        Enddesc4=""
        threats={[
          "Mosquito fogging for fast relief",
          "Drain and gutter larvicide treatments",
          "Traps in mosquito entry zones",
          "Expert advice for mosquito-proofing your property",
          "Regular service visits to ensure zero return",
        ]}

        Heading5="Culex Prevention at Home"
        desc5="Keep drains clear and dry"
        additional={[
          {value:"Eliminate standing water"},
          {value:"Install window and door screens"},
          {value:"Keep outdoor areas clean and clutter-free"},
        ]}


        ctaHeading="Book Your Anopheles Mosquito Service Today"
        ctaText={`Don't let a single mosquito turn into a health hazard. Accurate Pest Control Services LLC Dubai is ready with expert solutions, affordable packages, and fast response times.`}
        ctaButtonText="Book Your Anopheles Mosquito Service"
      />
      <Footer />
    </>
  );
};

export default CulexMosquito;
