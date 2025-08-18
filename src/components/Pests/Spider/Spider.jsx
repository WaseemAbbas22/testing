import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicesHero from "@/components/Services/ServicesHero";
import HMheroImg from "@/assets/Pests/Spider/heroImg.webp"; // Adjust the path as needed
import TopComponent from "../TopComponent";
import Top1 from "@/assets/Pests/Spider/Top1.webp";
import Top2 from "@/assets/Pests/Spider/Top2.webp";
import PestRemovalBox from "../PestRemovalBox";
import RemoveAnimals from "../RemoveAnimals";
import Img1 from "@/assets/Pests/Spider/Bot1.webp";
import Img2 from "@/assets/Pests/Spider/Bot2.webp";
import Img3 from "@/assets/Pests/Spider/Bot3.webp";
//import Img4 from "/src/assets/Pests/Spider/Bot4.svg";

const animalsList = [
  {
    img: Img1,
    name: "HOUSE SPIDER",
    sci: "",
    link: "/house-spider",
  },
  {
    img: Img2,
    name: "JUMPING SPIDER",
    sci: "",
    link: "/jumping-spider",
  },
  {
    img: Img3,
    name: "BLACK WIDOW SPIDER",
    sci: "",
    link: "/black-widow-spider",
  },
  
];

const housemouse = () => {
  return (
    <>
      <div>
        <TopBar />
        <Navbar />
        <ServicesHero
          title="Experts in Spider Control Services Dubai"
          breadcrumb="Home > Pests > Details"
          bgImg={HMheroImg}
        />
        <TopComponent
          image1={Top1}
          image2={Top2}
          heading1="Safe Home and Business Pest Solutions"
          desc1={`Creepy crawlies like spiders can disrupt your peace of mind and even pose health risks, especially if species like the Brown Recluse Spider are involved. At Accurate Pest Control Services LLC Dubai, we provide reliable pest control for spiders near me to detect, eliminate, and prevent infestations in both residential and commercial settings. Whether it’s your home, office, or warehouse, our licensed team delivers expert care using safe and targeted methods tailored to your environment.`}
          button1Text="Schedule Visit"
          heading2="How a Pest Exterminator Helps Manage Spider Infestations"
          desc2="Their presence can also indicate a deeper pest issue, like an abundance of other insects they prey on. Here’s why professional pest control matters:"
          desc3="Instead of wasting money on sprays and brooms, let the quality pest control professionals handle the situation with precision."
          listItems={[
            "Spiders build webs in corners, on ceilings, behind furniture, and in basements.",
            "Infestation may suggest poor sanitation or another pest presence",
            "Venomous spiders like the Brown Recluse may be dangerous if left unchecked",
            "DIY methods rarely eliminate the eggs, leading to fast repopulation",
            "Businesses may face hygiene complaints and customer discomfort",
          ]}
        />
        <PestRemovalBox
          heading="Our Proven Spider Removal Process"
          subtitle="We don’t just spray and go our method ensures your property stays spider free for the long term."
          steps={[
            {
              number: "1",
              title: "Complete Property Assessment",
              desc: "Using advanced tools, our team inspects common spider hotspots such as ceilings, cracks, vents, basements, and storage areas. We identify the type of spider, including dangerous species like the Brown Recluse Spider, and check for related pest issues like ants, flies, or even wasps.",
            },
            {
              number: "2",
              title: "Targeted Spider Control Treatment",
              desc: "We deploy spider specific treatment plans using eco safe agents. This includes vacuuming web clusters, applying targeted insecticides in nesting areas, and sealing entry points. In cases where spiders coexist with other insects, our approach integrates wasp control methods to fully secure the premises.",
            },
            {
              number: "3",
              title: "Follow-up Monitoring and Prevention",
              desc: " After the initial treatment, our certified pest exterminator team schedules re-inspections and provides expert guidance on lighting, moisture, and clutter control. We also offer long-term prevention strategies and customized maintenance plans for lasting results.",
            },
          ]}
        />
        <RemoveAnimals heading="We Remove All Types Of Spiders" animals={animalsList} />
        <Footer />
      </div>
    </>
  );
};

export default housemouse;
