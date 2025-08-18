import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicesHero from "@/components/Services/ServicesHero";
import HMheroImg from "@/assets/Pests/housemouseHero.webp";
import TopComponent from "../TopComponent";
import Top1 from "@/assets/Pests/Mosquito/Top1.webp";
import Top2 from "@/assets/Pests/Mosquito/Top2.webp";
import PestRemovalBox from "../PestRemovalBox";
import RemoveAnimals from "../RemoveAnimals";
import Img1 from "@/assets/Pests/Mosquito/Bot1.webp"; //"C:\Users\Waseem Abbas\Downloads\testing-main\src\assets\Pests\Mosquito\Bot1.svg"
import Img2 from "@/assets/Pests/Mosquito/Bot3.webp";
import Img3 from "@/assets/Pests/Mosquito/Bot2.webp";
//import Img4 from "/src/assets/Pests/Mosquito/Bot4.svg";

const animalsList = [
  {
    img: Img1,
    name: "AEDES MOSQUITO",
    sci: "",
    link: "/aedes-mosquito",
  },
  {
    img: Img2,
    name: "ANOPHELES MOSQUITO",
    sci: "",
    link: "/anopheles-mosquito",
  },
  {
    img: Img3,
    name: "CULEX MOSQUITO",
    sci: "",
    link: "/culex-mosquito",
  },
  
];

const housemouse = () => {
  return (
    <>
      <div>
        <TopBar />
        <Navbar />
        <ServicesHero
          title="Expert Pest Mosquito Control Services in Dubai"
          breadcrumb="Home > Pests > Details"
          bgImg={HMheroImg}
        />
        <TopComponent
          image1={Top1}
          image2={Top2}
          heading1="Best Mosquito Protection for Homes and Businesses"
          desc1={`In the humid and fast developing environments of Dubai, Sharjah, and Ajman, mosquitoes in Dubai are not just annoying they are a genuine threat to health and comfort. These blood feeding pests thrive in shaded gardens, construction zones, water tanks, and even indoor corners. Whether you're managing a home in Downtown Dubai, a clinic in Sharjah, or an outdoor café in Ajman, mosquitoes can disrupt life and business operations if not controlled professionally.Maintaining hygiene, avoiding illnesses like dengue and malaria, and enhancing the standard of living for both locals and tourists all depend on timely medical care.`}
          button1Text="Contact Now"
          heading2="The Importance of Professional Mosquito Treatment"
          desc2="DIY sprays give quick relief but miss breeding sites, making them ineffective long-term."
          listItems={[
            "A mosquito fogger can reduce adult mosquitoes briefly, but they’ll return without treating breeding sources.",
            "Standing water in pots, fountains, or tanks allows mosquitoes to breed rapidly targeting larvae is crucial.",
            "Mosquitoes mature in 7–10 days in warm climates, so regular, targeted treatment is key.",
          ]}
        />
        <PestRemovalBox
          heading="Our Mosquito Extermination Process"
          subtitle="Our process goes beyond just fogging we eliminate mosquitoes at the breeding level with a strategic, eco conscious approach."
          steps={[
            {
              number: "1",
              title: "Property Inspection and Risk Mapping",
              desc: "We start by carefully inspecting your property. Our team identifies stagnant water sources, plant-based breeding zones, shady resting areas, and any existing mosquito hotspots. This helps us determine the scope of infestation and the most effective intervention points for a targeted mosquito pest control strategy.",
            },
            {
              number: "2",
              title: "Targeted Spider Control Treatment",
              desc: "We deploy spider-specific treatment plans using eco-safe agents. This includes vacuuming web clusters, applying targeted insecticides in nesting areas, and sealing entry points. In cases where spiders coexist with other insects, our approach integrates wasp control methods to fully secure the premises.",
            },
            {
              number: "3",
              title: "Post-Treatment Monitoring and Maintenance",
              desc: "To ensure lasting relief, we offer scheduled follow-up visits and monthly plans. These include site checks, prevention measures, and touch-ups to avoid reinfestation. You’ll also receive professional tips on selecting the best mosquito repellent for your property’s specific environment whether for children, pets, or sensitive areas.",
            },
          ]}
        />
        <RemoveAnimals heading="We Remove All Types Of Mosquitoes" animals={animalsList} />
        <Footer />
      </div>
    </>
  );
};

export default housemouse;
