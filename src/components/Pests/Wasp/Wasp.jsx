import TopBar from "/src/components/TopBar";
import Navbar from "/src/components/Navbar";
import Footer from "/src/components/Footer";
import ServicesHero from "/src/components/Services/ServicesHero";
import HMheroImg from "/src/assets/Pests/Wasp/heroImg.svg"; // Adjust the path as needed
import TopComponent from "../TopComponent";
import Top1 from "/src/assets/Pests/Wasp/Top1.svg";
import Top2 from "/src/assets/Pests/Wasp/Top2.svg";
import PestRemovalBox from "../PestRemovalBox";
import RemoveAnimals from "../RemoveAnimals";
import Img1 from "/src/assets/Pests/Wasp/Bot1.svg";
import Img2 from "/src/assets/Pests/Wasp/Bot2.svg";
import Img3 from "/src/assets/Pests/Wasp/Bot3.svg";
import Img4 from "/src/assets/Pests/Wasp/Bot4.svg";

const animalsList = [
  {
    img: Img1,
    name: "PAPER WASP NEST",
    sci: "",
    link: "",
  },
  {
    img: Img2,
    name: "YELLOW JACKET WASP",
    sci: "",
    link: "",
  },
  {
    img: Img3,
    name: "HORNEST WASP",
    sci: "",
    link: "",
  },
  {
    img: Img4,
    name: "ARABIAN PAPER WASP",
    sci: "",
    link: "",
  },
];

const housemouse = () => {
  return (
    <>
      <div>
        <TopBar />
        <Navbar />
        <ServicesHero
          title="Reliable Wasp Control Services in Dubai"
          breadcrumb="Home > Pests > Details"
          bgImg={HMheroImg}
        />
        <TopComponent
          image1={Top1}
          image2={Top2}
          heading1="Safe and Certified Wasp and Hornet Control for Homes and Businesses"
          desc1={`Wasps can turn a peaceful garden into a dangerous space, particularly during the warmer months in Dubai. They can pose a major health risk, regardless of whether you've noticed flying insects close to your Business Bay office. Because of this, Accurate Pest Control Services LLC Dubai offers quick and environmentally friendly professional wasp control services.
Hidden places like garages, Roof edges, and even trees are common places for these flying pests to build their nests. Without professional help, the situation could quickly get worse, especially if the nest has large colonies or aggressive wasp species.`}
          button1Text="Protect Home"
          heading2="Why Wasp Control Is Essential"
          desc2="Wasp control is essential, which keep the home environment safe and comfortable. More so, effective wasp control eliminates discomfort and health hazards associated with their painful and dangerous stings."
          desc3="Protect your family and property with expert wasp control services."
          listItems={[
            "Reduces the chances of severe allergic reactions among persons allergic to stings",
            "Safe for kids and pets around aggressive wasps",
            "Eliminates nests to prevent property damage caused by wasps",
            "Uses proactive measures to keep your home secure and your loved ones safe",
                ]}
        />
        <PestRemovalBox
          heading="Our Wasp Nest Removal Process"
          subtitle="Targeted wasp solutions built around your needs."
          steps={[
            {
              number: "1",
              title: "Nest Detection",
              desc: "Our experts start with a detailed inspection to locate wasp nests and identify species. We check roofs, balconies, fixtures, and vents to assess risk levels, enabling us to design a precise and property-specific wasp nest removal and control strategy.",
            },
            {
              number: "2",
              title: "Professional Removal",
              desc: "We apply targeted wasp control using safe nest-killer foam, manual nest removal with protective gear, and entry-point sealing. For aggressive infestations, advanced treatments ensure effective elimination of stubborn wasp or hornet colonies in high-risk areas around your property.",
            },
            {
              number: "3",
              title: "Post-Removal Monitoring",
              desc: "Post-treatment, we emphasize prevention with expert landscaping tips, pet care advice, and seasonal follow-ups. We recommend tick collars or vet-approved solutions, while also educating homeowners on early detection and year-round strategies to keep their homes tick-free and safe.",
            },
          ]}
        />
        <RemoveAnimals
          heading="We Remove Wasps And Their Nests Safely"
          animals={animalsList}
        />
        <Footer />
      </div>
    </>
  );
};

export default housemouse;
