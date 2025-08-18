
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicesHero from "@/components/Services/ServicesHero";
import HMheroImg from "@/assets/Pests/Venomous/heroImg.webp"; // Adjust the path as needed
import TopComponent from "../TopComponent";
import Top1 from "@/assets/Pests/Venomous/Top1.webp";
import Top2 from "@/assets/Pests/Venomous/Top2.webp";
import PestRemovalBox from "../PestRemovalBox";
import RemoveAnimals from "../RemoveAnimals";
import Img1 from "@/assets/Pests/Venomous/Bot1.webp";
import Img2 from "@/assets/Pests/Venomous/Bot2.webp";
import Img3 from "@/assets/Pests/Venomous/Bot3.webp";
//import Img4 from "/src/assets/Pests/Termite/Bot4.svg";

const animalsList = [
  {
    img: Img1,
    name: "ARABIAN COBRA",
    sci: "",
    link: "/arabian-cobra",
  },
  {
    img: Img2,
    name: "SAND BOA",
    sci: "",
    link: "/sand-boa",
  },
  {
    img: Img3,
    name: "ARABIAN HORNED VIPER",
    sci: "",
    link: "/arabian-horned-cobra",
  },
  
];

const housemouse = () => {
  return (
    <>
      <div>
        <TopBar />
        <Navbar />
        <ServicesHero
          title="Professional Snake Pest Control Services in Dubai"
          breadcrumb="Home > Pests > Details"
          bgImg={HMheroImg}
        />
        <TopComponent
          image1={Top1}
          image2={Top2}
          heading1="Certified Snake Control for Residential and Commercial Properties"
          desc1={`Dubai's mix of urban expansion and green areas creates the perfect environment for unexpected snake intrusions, particularly near gardens, construction zones, and storage spaces. Whether you're running a warehouse or living near desert fringes in Arabian Ranches, a surprise encounter with a snake can spark immediate fear and risk. For such reasons, Accurate Pest Control Services LLC Dubai offers quick and dependable snake control treatment services that are tailored to your property's structure and environmental risks. Snakes often slither into properties through foundation cracks, garden gaps, or drainage openings. Some are harmless, but others may be venomous, making fast, professional action crucial for safety.`}

          button1Text="Call Today"
          heading2="Why Snake Control Is Essential"
          desc2="Snake sightings, even non-venomous ones, can cause fear, stress, and hygiene concerns in any home. These reptiles often hide in basements, shaded areas, gardens, or outdoor storage spaces, making them hard to detect. Their droppings and shed skin can lead to sanitation problems and even damage property. Snakes may enter through open vents, cracks, or door gaps. DIY methods are risky and usually ineffective. For safe and reliable removal, it’s best to call professional snake control services."
        //   listItems={[""]}
        />
        <PestRemovalBox
          heading="Our Snake Control and Removal Process"
          subtitle="Professional and safe snake removal tailored to your property."
          steps={[
            {
              number: "1",
              title: "Site Assessment and Risk Analysis",
              desc: "We begin with a detailed inspection to identify snake species, habitats, and entry points like gardens, crawlspaces, and storage areas. Understanding these hotspots helps us develop a targeted plan to safely and effectively control snakes on your property.",
            },
            {
              number: "2",
              title: "Professional Removal and Targeted Measures",
              desc: "Once the snake is located and identified, we apply humane removal techniques using approved methods. We prevent re-entry with traps, eliminate food sources like rodents, and apply eco-safe repellents along property perimeters to ensure long-lasting snake control.",
            },
            {
              number: "3",
              title: "Ongoing Prevention and Monitoring",
              desc: "We offer expert advice on sealing openings and enhancing yard hygiene, installing natural deterrents and barriers, and providing follow-up visits. Our snake control services also include optional monthly or quarterly monitoring, perfect for properties near farmlands or green belts.",
            },
          ]}
        />
        <RemoveAnimals heading="We Remove All Types of Snakes, Safely and Quickly" animals={animalsList} />
        <Footer />
      </div>
    </>
  );
};

export default housemouse;
