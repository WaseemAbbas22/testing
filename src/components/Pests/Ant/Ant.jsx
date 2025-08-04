import TopBar from "/src/components/TopBar";
import Navbar from "/src/components/Navbar";
import Footer from "/src/components/Footer";
import ServicesHero from "/src/components/Services/ServicesHero";
import HMheroImg from "/src/assets/Pests/housemouseHero.png";
import PestRemovalBox from "/src/components/Pests/PestRemovalBox";
import { Import } from "lucide-react";
import RodentImg1 from "/src/assets/Pests/rodent1.png";
import RodentImg2 from "/src/assets/Pests/rodent2.png";
import TopComponent from "/src/components/Pests/TopComponent";
Import;
const Ant = () => {
  return (
    <>
      <div>
        <TopBar />
        <Navbar />
        <ServicesHero
          title="Professional Rat Removal Services"
          breadcrumb="Home > Pests > Rodent"
          bgImg={HMheroImg}
        />

        <TopComponent
          image1={RodentImg1}
          image2={RodentImg2}
          heading1="Professional Ant and Pest Control Solutions"
          desc1={`Facing an ant infestation? Accurate Pest Control Services LLC Dubai offers professional ant pest control to protect your home or business. Our licensed technicians use eco-safe, effective methods to eliminate ants from every corner indoors or outdoors. Whether you're dealing with red ants in the kitchen or ant trails around your garden, we act fast and efficiently. We also provide long-term prevention plans to ensure ants don’t return and disrupt your space again, giving you peace of mind and a pest free environment.`}
          button1Text="Contact Now"
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
        <Footer />
      </div>
    </>
  );
};

export default Ant;
