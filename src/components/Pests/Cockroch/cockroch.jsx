import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicesHero from "@/components/Services/ServicesHero";
import HMheroImg from "@/assets/Pests/Cockroch/heroImg.webp"; // Adjust the path as needed
import TopComponent from "../TopComponent";
import Top1 from "@/assets/Pests/Cockroch/Top1.webp";
import Top2 from "@/assets/Pests/Cockroch/Top2.webp";
import PestRemovalBox from "../PestRemovalBox";
import RemoveAnimals from "../RemoveAnimals";
import Img1 from "@/assets/Pests/Cockroch/Bot1.webp";
import Img2 from "@/assets/Pests/Cockroch/Bot2.webp";
import Img3 from "@/assets/Pests/Cockroch/Bot3.webp";
import Img4 from "@/assets/Pests/Cockroch/Bot4.webp";

const animalsList = [
  {
    img: Img1,
    name: "GERMAN COCKROACH",
    sci: "",
    link: "/german-cockroach",
  },
  {
    img: Img2,
    name: "BROWN-BANDED COCKROACH",
    sci: "",
    link: "/brown-banded-cockroach",
  },
  {
    img: Img3,
    name: "SMOKY BROWN COCKROACH",
    sci: "",
    link: "/smoky-brown-cockroach",
  },
  {
    img: Img4,
    name: "ORIENTAL COCKROACH",
    sci: "",
    link: "/oriental-cockroach",
  },
];

const housemouse = () => {
  return (
    <>
      <div>
        <TopBar />
        <Navbar />
        <ServicesHero
          title="Best Cockroach Killer Services for a Pest Free Home"
          breadcrumb="Home > Pests > Details"
          bgImg={HMheroImg}
        />
        <TopComponent
          image1={Top1}
          image2={Top2}
          heading1="Experts Cockroach Pest Control"
          desc1={`Not only are cockroaches hostile, but they also spread diseases, cause allergies, and compromise personal hygiene. At Accurate Pest Control Services LLC,  we provide expert cockroach pest control Dubai using safe, effective, and lasting methods. Whether the infestation is overwhelming or just beginning, we approach every situation with precision and care. Our durable treatments are perfect for commercial storage units, restaurants, and residential kitchens. Choose our reliable team to protect your property and restore cleanliness with the most trusted solutions in the region.`}
          button1Text="Contact Now"
          heading2="Why Cockroach Control is Important"
          desc2="Cockroaches are solid pests that conceal themselves in difficult-to-reach locations and change quickly:"
          listItems={[
            "They commonly infest kitchens, drains, cabinets, and appliances.",
            "Infect others with bacteria that can lead to food poisoning and respiratory issues.",
            "Grow in warm, humid conditions, frequently going unnoticed until it's too late.",
            "Increase quickly; a minor problem could turn into a major outbreak.",
            "Hard to eliminate without professional cockroach pest control.",
          ]}
        />
        <PestRemovalBox
          heading="Our Cockroach Removal Process"
          subtitle="Efficient and safe Cockroach removal tailored to your space."
          steps={[
            {
              number: "1",
              title: "Inspection and Identification",
              desc: "Our professionals inspect the location, determine the kind of cockroach, and identify areas for nesting and breeding. This step is essential to determine the right cockroach control solution.",
            },
            {
              number: "2",
              title: "Customized Treatment Plan",
              desc: "Based on the infestation level, we apply targeted treatments using eco-friendly gels, baits, and sprays, including trusted cockroach killer products that ensure safety around people and pets.",
            },
            {
              number: "3",
              title: "Prevention and Follow-Up",
              desc: "To stop repetition, we seal entry sites, provide hygienic guidance, and carry out regular monitoring. We take a long-term, active approach.",
            },
          ]}
        />
        <RemoveAnimals heading="Handles all cockroach infestations" animals={animalsList} />
        <Footer />
      </div>
    </>
  );
};

export default housemouse;
