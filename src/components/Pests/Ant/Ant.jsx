import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicesHero from "@/components/Services/ServicesHero";
import HMheroImg from "@/assets/Pests/Ant/heroImg.webp";
import PestRemovalBox from "@/components/Pests/PestRemovalBox";
//import { Import } from "lucide-react";
import Top1 from "@/assets/Pests/Ant/Top1.webp";
import Top2 from "@/assets/Pests/Ant/Top2.webp";
import TopComponent from "@/components/Pests/TopComponent";
import RemoveAnimals from "@/components/Pests/RemoveAnimals";
import Img1 from "@/assets/Pests/Ant/Bot1.webp";
import Img2 from "@/assets/Pests/Ant/Bot2.webp";
import Img3 from "@/assets/Pests/Ant/Bot3.webp";
import Img4 from "@/assets/Pests/Ant/Bot4.webp";

const animalsList = [
  {
    img: Img1,
    name: "ARGENTINE ANTS",
    sci: "",
    link: "/argentine-ant",
  },
  {
    img: Img2,
    name: "PAVEMENT ANTS",
    sci: "",
    link: "/pavement-ant",
  },
  {
    img: Img3,
    name: "PHARAOH ANTS",
    sci: "",
    link: "/pharaoh-ant",
  },
  {
    img: Img4,
    name: "CARPENTER ANTS",
    sci: "",
    link: "/carpenter-ant",
  },
];
const Ant = () => {
  return (
    <>
      <div>
        <TopBar />
        <Navbar />
        <ServicesHero
          title="Trusted Ant Exterminator Services"
          breadcrumb="Home > Pests > Details"
          bgImg={HMheroImg}
        />

        <TopComponent
          image1={Top1}
          image2={Top2}
          heading1="Professional Ant and Pest Control Solutions"
          desc1={`Facing an ant infestation? Accurate Pest Control Services LLC Dubai offers professional ant pest control to protect your home or business. Our licensed technicians use eco-safe, effective methods to eliminate ants from every corner indoors or outdoors. Whether you're dealing with red ants in the kitchen or ant trails around your garden, we act fast and efficiently. We also provide long-term prevention plans to ensure ants don’t return and disrupt your space again, giving you peace of mind and a pest free environment.`}
          button1Text="Call Experts"
          heading2="Your Guide to Choosing the Right Ant Control Company"
          desc2="Although small, ants can cause significant problems, especially in homes and food establishments."
          listItems={[
            "Build nests in walls, under tiles, and near electrical appliances",
            "Leave scent trails, attracting hundreds more",
            "Bite and sting, especially aggressive red ants",
            "Contaminate food and surfaces",
            "Multiply rapidly, making infestations harder to manage",
          ]}
        />
        <PestRemovalBox
          heading="Our Ant Treatment and Removal Process"
          subtitle="Reliable, environmentally friendly pest removal designed for Dubai's specific conditions."
          steps={[
            {
              number: "1",
              title: "Ant Inspection and Identification",
              desc: "To find nests and access locations, our knowledgeable pest team starts with a thorough inspection of your property. Understanding the species helps determine the right treatment for successful pest control for ants.",
            },
            {
              number: "2",
              title: "Ant Control and Elimination",
              desc: "Our team applies safe and effective ant pesticide treatments that target colonies at their source. Whether indoors or outdoors, our customized approach using gels, baits, and sprays delivers quick results without risking the safety of pets or children.",
            },
            {
              number: "3",
              title: "Follow-Up by Ant Control Experts",
              desc: "We keep on offering our services after the initial visit. Our team sets up follow-up inspections to ensure ants don't return. As a nearby ant control company, we also provide prevention advice to keep your area ant free in the future.",
            },
          ]}
        />
        <RemoveAnimals heading="We Treat All Types Of Ant Infestations" animals={animalsList} />
        <Footer />
      </div>
    </>
  );
};

export default Ant;
