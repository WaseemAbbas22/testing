import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicesHero from "@/components/Services/ServicesHero";
import HMheroImg from "@/assets/Pests/Tick/heroImg.webp"; // Adjust the path as needed
import TopComponent from "../TopComponent";
import Top1 from "@/assets/Pests/Tick/Top1.webp";
import Top2 from "@/assets/Pests/Tick/Top2.webp";
import PestRemovalBox from "../PestRemovalBox";
import RemoveAnimals from "../RemoveAnimals";
import Img1 from "@/assets/Pests/Tick/Bot1.webp";
import Img2 from "@/assets/Pests/Tick/Bot2.webp";
import Img3 from "@/assets/Pests/Tick/Bot3.webp";
//import Img4 from "/src/assets/Pests/Termite/Bot4.svg";

const animalsList = [
  {
    img: Img1,
    name: "DEER TICK",
    sci: "",
    link: "/deep-tick",
  },
  {
    img: Img2,
    name: "LONE STAR TICK",
    sci: "",
    link: "/lone-star-tick",
  },
  {
    img: Img3,
    name: "BROWN DOG TICK",
    sci: "",
    link: "/brown-dog-tick",
  },
  
];

const housemouse = () => {
  return (
    <>
      <div>
        <TopBar />
        <Navbar />
        <ServicesHero
          title="Professional Tick Pest Control Services in Dubai"
          breadcrumb="Home > Pests > Details"
          bgImg={HMheroImg}
        />
        <TopComponent
          image1={Top1}
          image2={Top2}
          heading1="Certified Tick Control for Residential and Commercial Properties"
          desc1={`Dubai’s warm climate and expanding greenery create an ideal environment for ticks to thrive, especially in shaded gardens, pet zones, and landscaped villas. Whether you're managing a veterinary clinic or living in a family home, encountering a tick insect on your pet or skin can be a serious concern. That’s why Accurate Pest Control Services LLC Dubai offers swift, professional tick pest control services tailored to your property's layout, exposure, and risk level.Ticks may cling to pet fur, clothing, or outdoor furniture and make their way into indoor spaces. Because they feed on blood, their bites can lead to skin irritation or even disease transmission, making fast and expert removal crucial for safety.`}
          button1Text="Contact Now"
          heading2="Why Tick Control Is Essential"
          desc2="Ticks may be tiny, but they pose serious risks to your family and pets. Quick action is key to avoid infestation and health concerns."
          listItems={[
            "Hide in tall grass, gardens, and outdoor seating areas",
            "Feed for hours without being noticed",
            "Carry diseases that affect both humans and pets",
            "Insect repellents offer limited protection",
            "DIY sprays don’t stop the breeding cycle",
            "Professional tick control ensures safe, long-term results"
        ]}
        />
        <PestRemovalBox
          heading="Our Tick Control and Removal Process"
          subtitle="Safe and targeted tick removal, perfect for any space."
          steps={[
            {
              number: "1",
              title: "Site Assessment and Risk Analysis",
              desc: "We begin with a detailed inspection to find tick breeding grounds, like pet areas, garden edges, and under furniture. This helps us design a customized tick removal plan tailored to your property’s specific exposure risks and infestation conditions.",
            },
            {
              number: "2",
              title: "Targeted Treatment and Eco-Friendly Application",
              desc: "Following assessment, we use professional tick repellents and surface treatments around fences, patios, and pet zones. We eliminate tick habitats by clearing tall grass and mulch. Certified treatments target both adult ticks and eggs for lasting, safe protection.",
            },
            {
              number: "3",
              title: "Monitoring, Advice, and Prevention",
              desc: "Post-treatment, we emphasize prevention with expert landscaping tips, pet care advice, and seasonal follow-ups. We recommend tick collars or vet-approved solutions, while also educating homeowners on early detection and year-round strategies to keep their homes tick-free and safe.",
            },
          ]}
        />
        <RemoveAnimals
          heading="We Remove All Types of Ticks from Your Space"
          animals={animalsList}
        />
        <Footer />
      </div>
    </>
  );
};

export default housemouse;
