import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicesHero from "@/components/Services/ServicesHero";
import HMheroImg from "@/assets/Pests/Lizard/heroImg.webp"; // Adjust the path as needed
import TopComponent from "../TopComponent";
import Top1 from "@/assets/Pests/Lizard/Top1.webp";
import Top2 from "@/assets/Pests/Lizard/Top2.webp";
import PestRemovalBox from "../PestRemovalBox";
import RemoveAnimals from "../RemoveAnimals";
import Img1 from "@/assets/Pests/Lizard/Bot1.webp";
import Img2 from "@/assets/Pests/Lizard/Bot2.webp";
import Img3 from "@/assets/Pests/Lizard/Bot3.webp";
//import Img4 from "/src/assets/Pests/Termite/Bot4.svg";

const animalsList = [
  {
    img: Img1,
    name: "HOUSE GECKO",
    sci: "",
    link: "/house-gecko",
  },
  {
    img: Img2,
    name: "MEDITERRANEAN GECKO",
    sci: "",
    link: "/mediterranean-gecko",
  },
  {
    img: Img3,
    name: "YELLOW-BELLIED HOUSE GECKO",
    sci: "",
    link: "/yellow-bellied-house-gecko",
  },
  
];

const housemouse = () => {
  return (
    <>
      <div>
        <TopBar />
        <Navbar />
        <ServicesHero
          title="Professional Lizard Pest Control Services in Dubai"
          breadcrumb="Home > Pests > Details"
          bgImg={HMheroImg}
        />
        <TopComponent
          image1={Top1}
          image2={Top2}
          heading1="Safe, Targeted, and Eco-Friendly Solutions for Homes and Businesses"
          desc1={`Homes, villas, and commercial buildings in Dubai are ideal for lizard activity due to the city's warm climate and numerous hiding places. Whether you're managing a restaurant in JLT or living in a high-rise apartment in Downtown Dubai, the unexpected appearance of a lizard on your wall or near your pantry can be unsettling. That’s why Accurate Pest Control Services LLC Dubai offers comprehensive lizard pest control Dubai services tailored to your property’s needs.
Lizards frequently get into small openings to find food and water. They can nest behind furniture, in ceiling gaps, or near kitchen sinks, creating hygiene concerns, especially in food handling areas.`}
          button1Text="Pest Free"
          heading2="Why Lizard Control Is Important"
          desc2="Lizard infestations may seem harmless, but they can lead to hygiene concerns and discomfort in your living space."
          desc3="For safe, long-term results, it’s best to contact a professional lizard pest control service."
          listItems={[
            "Feed on insects, especially in warm, humid areas",
            "Droppings can stain walls and contaminate kitchen surfaces",
            "DIY sprays give short-term relief but may harm pets or kids",
            "Frequent sightings may reveal gaps, open windows, or vents",
          ]}
        />
        <PestRemovalBox
          heading="Our Lizard Extermination Process"
          subtitle="Safe and effective lizard removal customized for your property."
          steps={[
            {
              number: "1",
              title: "Inspection and Site Mapping",
              desc: "We assess infestation severity and locate lizard entry points, like cabinets, AC ducts, and outdoor cracks. Identifying these common hiding spots helps us create a customized lizard control plan that effectively removes them and prevents future invasions on your property.",
            },
            {
              number: "2",
              title: "Strategic Removal and Eco Treatment",
              desc: "We use safe, non-toxic repellents, sticky traps, and outdoor sealing based on your property layout and infestation level. Our lizard control ensures minimal disruption while targeting both the root cause and visible activity for lasting, effective, and safe protection.",
            },
            {
              number: "3",
              title: "Follow-Up and Prevention",
              desc: "Beyond eliminating lizards, we prevent their return through follow-up visits, pest-proofing advice, and tips to reduce insect populations, their main food source. Our post-treatment approach ensures long-term protection and a consistently pest-free environment for your comfort and safety.",
            },
          ]}
        />
        <RemoveAnimals
          heading="We Handle Every Kind of Lizard Infestation"
          animals={animalsList}
        />
        <Footer />
      </div>
    </>
  );
};

export default housemouse;
