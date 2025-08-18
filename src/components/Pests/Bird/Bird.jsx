import Navbar from "@/components/Navbar";
import TopBar from "@/components/TopBar";
import Footer from "@/components/Footer";
import ServicesHero from "@/components/Services/ServicesHero";
import HMheroImg from "@/assets/Pests/Bird/heroImg.webp";
import TopComponent from "../TopComponent";
import Top1 from "@/assets/Pests/Bird/Top1.webp";
import Top2 from "@/assets/Pests/Bird/Top2.webp";
import PestRemovalBox from "../PestRemovalBox";
import RemoveAnimals from "../RemoveAnimals";
import Img1 from "@/assets/Pests/Bird/Bot1.webp";
import Img2 from "@/assets/Pests/Bird/Bot2.webp";
import Img3 from "@/assets/Pests/Bird/Bot3.webp";
//import Img4 from "/src/assets/Pests/Termite/Bot4.svg";

const animalsList = [
  {
    img: Img1,
    name: "COMMON MYNA",
    sci: "",
    link: "/common-myna",
  },
  {
    img: Img2,
    name: "HOUSE SPARROW",
    sci: "",
    link: "/house-sparrow",
  },
  {
    img: Img3,
    name: "PIGEONS",
    sci: "",
    link: "/pigeons",
  },
  
];

const housemouse = () => {
  return (
    <>
      <div>
        <TopBar />
        <Navbar />
        <ServicesHero
          title="Expert Bird Control in Dubai"
          breadcrumb="Home > Pests > Details"
          bgImg={HMheroImg}
        />
        <TopComponent
          image1={Top1}
          image2={Top2}
          heading1="Managing a Bird's Life Cycle with Expert Bird Control"
          desc1={`From city balconies in Dubai to villa rooftops in Sharjah, birds can quickly turn into a major nuisance. Whether it’s pest pigeons roosting on ledges or sparrows nesting in air ducts, the resulting droppings, noise, and property damage require immediate professional intervention. At Accurate Pest Control, we offer reliable bird control in Dubai that safeguards your home, garden, or commercial premises. Bird infestations are common across the UAE, especially in high-rise structures, warehouses, and heritage sites. Nesting materials and acidic droppings not only spoil building exteriors but can also transmit bacteria and parasites. Our goal is not only to remove but to humanely deter and prevent re-entry using science-backed strategies.`}
          button1Text="End Infestation"
          heading2="Why Bird Pest Control Dubai Services Matter"
          desc2="Bird problems in urban areas are more than a nuisance and they pose serious health and property risks if not handled properly."
          desc3="For safe, effective, and legal solutions, rely on professional bird control services that offer humane, long-term protection."
          listItems={[
            "Pigeons, crows, and other birds nest year-round and adapt quickly",
            "Droppings damage buildings and carry harmful bacteria",
            "DIY methods often fail and may break local wildlife laws",
            "Noise, feathers, and nests add to the mess and stress",  ]}
        />
        <PestRemovalBox
          heading="Our Bird Control Process"
          subtitle="Safe and reliable bird control designed for your space."
          steps={[
            {
              number: "1",
              title: "Bird Activity Assessment",
              desc: "We start with a detailed survey to identify bird species, nesting zones, and entry points like rooftops, chimneys, and balconies. This allows us to create a tailored bird control plan designed specifically for effective protection across Dubai properties.",
            },
            {
              number: "2",
              title: "Tailored Bird Deterrent Solutions",
              desc: "We use eco-friendly, approved bird deterrents like spikes, netting, and motion-activated systems tailored to your infestation. Safe for pets and wildlife, our solutions also include cleanup services to remove droppings and sanitize all affected areas thoroughly.",
            },
            {
              number: "3",
              title: "Monitoring and Long-Term Prevention",
              desc: "Our bird control team in Dubai offers more than treatment, and we provide ongoing monitoring, seasonal inspections, and education. We help reduce attractants through waste control, block nesting sites, and install lasting deterrents, protecting families from health risks and bird aggression.",
            },
          ]}
        />
        <RemoveAnimals heading="Built to Handle Pigeons, Sparrows & Beyond" animals={animalsList} />
        <Footer />
      </div>
    </>
  );
};

export default housemouse;
