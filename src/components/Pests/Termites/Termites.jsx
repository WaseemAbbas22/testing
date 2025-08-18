import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicesHero from "@/components/Services/ServicesHero";
import HMheroImg from "@/assets/Pests/Termite/heroImg.webp"; // Adjust the path as needed
import TopComponent from "../TopComponent";
import Top1 from "@/assets/Pests/Termite/Top1.webp";
import Top2 from "@/assets/Pests/Termite/Top2.webp";
import PestRemovalBox from "../PestRemovalBox";
import RemoveAnimals from "../RemoveAnimals";
import Img1 from "@/assets/Pests/Termite/Bot1.webp";
import Img2 from "@/assets/Pests/Termite/Bot2.webp";
import Img3 from "@/assets/Pests/Termite/Bot3.webp";
import Img4 from "@/assets/Pests/Termite/Bot4.webp";

const animalsList = [
  {
    img: Img1,
    name: "SUBTERRANEAN TERMITES",
    sci: "",
    link: "/subterranean-termites",
  },
  {
    img: Img2,
    name: "DRYWOOD TERMITES",
    sci: "",
    link: "/drywood-termites",
  },
  {
    img: Img3,
    name: "FORMOSAN TERMITES",
    sci: "",
    link: "/formosan-termites",
  },
  {
    img: Img4,
    name: "DAMPWOOD TERMITES",
    sci: "",
    link: "/dampwood-termites",
  },
];

const housemouse = () => {
  return (
    <>
      <div>
        <TopBar />
        <Navbar />
        <ServicesHero
          title="Professionals for Termite Treatment Dubai"
          breadcrumb="Home > Pests > Details"
          bgImg={HMheroImg}
        />
        <TopComponent
          image1={Top1}
          image2={Top2}
          heading1="Anti-Termite Treatment for Homes and Businesses"
          desc1={`Dealing with termites in house or office? Accurate Pest Control Services LLC, Dubai, offers trusted and effective solutions to protect your property from structural damage. Our licensed professionals locate, treat, and stop termite activity using modern, environmentally safe technology. Whether it's a newly built home or an older property, our customized treatment ensures your investment stays protected.`}
          button1Text="Contact Now"
          heading2="Effective Termite Treatment Solutions"
          desc2="Termites may be small, but the destruction they cause is massive and often invisible until it's too late. Here's why timely intervention matters:"
          desc3="DIY sprays and store bought treatments offer only temporary relief. For complete, lasting results, professional termite control is essential."
          listItems={[
            "Invaders that are silent and consume insulation, paper, and wood.",
            "Tunnel through beams, floors, and foundation walls",
            "Often undetected until costly damage is done",
            "Spread fast, especially in humid or poorly ventilated areas",
            "Weaken the residential and commercial buildings' foundational strength",
          ]}
        />
        <PestRemovalBox
          heading="Our Termite Control Process"
          subtitle="Reliable, safe, and long-term solution to Dubai’s environment."
          steps={[
            {
              number: "1",
              title: "Property Inspection and Termite Detection",
              desc: "Our trained team conducts a thorough inspection of your property using advanced detection tools. We identify signs of termites in home, including mud tubes, hollow sounding wood, and droppings. The secret to reducing harm is early discovery.",
            },
            {
              number: "2",
              title: "Anti-Termite Treatment Application",
              desc: "We apply targeted treatment using industry approved solutions that eliminate termite colonies at their root. Depending on severity, we may use termite spray, soil barriers, or baiting systems all safe for families and pets.",
            },
            {
              number: "3",
              title: "Ongoing Protection and Follow-Up",
              desc: "Our job doesn’t end after the first treatment. We schedule follow-ups to ensure complete extermination and monitor for signs of reinfestation. Whether you're in a villa, apartment, or commercial unit, our termite treatment Dubai services offer peace of mind with every visit.",
            },
          ]}
        />
        <RemoveAnimals heading="We Treat And Prevent All Types Of Termites" animals={animalsList} />
        <Footer />
      </div>
    </>
  );
};

export default housemouse;
