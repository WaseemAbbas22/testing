import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import ServicesHero from "@/components/Services/ServicesHero";
import RodentHeroImg from "@/assets/Pests/Rodent/rodenthero.webp"; // Adjust the path as
import Footer from "@/components/Footer";
import TopComponent from "../TopComponent";
import Top1 from "@/assets/Pests/Rodent/Top1.webp";
import Top2 from "@/assets/Pests/Rodent/Top2.webp";
import PestRemovalBox from "../PestRemovalBox";
import RemoveAnimals from "../RemoveAnimals";
import Img1 from "@/assets/Pests/Flies/Bot1.webp";
import Img2 from "@/assets/Pests/Flies/Bot2.webp";
import Img3 from "@/assets/Pests/Flies/Bot3.webp";
//import Img4 from "/src/assets/Pests/Rodent/bot4.png";

const animalsList = [
  {
    img: Img1,
    name: "HOUSE FLY",
    sci: "",
    link: "/housefly",
  },
  {
    img: Img2,
    name: "CLUSTER FLY",
    sci: "",
    link: "/clusterfly",
  },
  {
    img: Img3,
    name: "FRUIT FLY",
    sci: "",
    link: "/fruitfly",
  },
  
];


const Rodent = () => {
  return (
    <>
      <div>
        <TopBar />
        <Navbar />
        <ServicesHero
          title="Experts in Fly Control Services Dubai"
          breadcrumb="Home > Pests > Details"
          bgImg={RodentHeroImg}
        />
        <TopComponent
          image1={Top1}
          image2={Top2}
          heading1="Safe and Effective Flying Insect Protection for Homes and Businesses"
          desc1={`In the warm, humid environment of Dubai, Sharjah, and Ajman, flying insects such as fruit flies and house flies are more than just a problem. These pests may enter residences, eateries, and workplaces throughout the region, including clinics in Sharjah, cafes in Ajman, and villas in Arabian Ranches. They also breed quickly. Maintaining your reputation, health, and environment requires regular flying bug pest management.`}
          button1Text="Start Now"
          heading2="The Importance of House Fly Control"
          desc3="Don’t just spray get lasting protection from experts who understand flying insects in Dubai and the city’s unique pest climate."
          listItems={[
            "Flies breed rapidly and can turn into a serious health risk if not controlled early.",
            "Store-bought insect repellent is often ineffective against breeding sites & eggs",
            "Various types of flies, such as drain flies, cluster flies, and blowflies, may indicate hidden sanitation issues.",
            "DIY solutions mostly target adult flies and miss eggs, entry points, and nesting zones.",
            "Unchecked infestations can cause hygiene problems, customer complaints, and even closures in commercial areas.",
          ]}
        />
        <PestRemovalBox
          heading="Our Fly Extermination Process"
          subtitle="We don’t just treat the surface we eliminate the root cause of infestations to ensure long-term relief."
          steps={[
            {
              number: "1",
              title: "Inspection ",
              desc: "Our certified team begins with a full property inspection to identify breeding spots, attractants, and active entry zones. We evaluate garbage areas, drains, kitchen vents, food storage, and windows. This step helps us classify the fly insect species whether it's common house flies, fruit flies, or drain flies and assess the infestation size.",
            },
            {
              number: "2",
              title: "Customized Fly Control Treatment Plan",
              desc: "We implement targeted treatment using industry-approved fly traps, insect light traps, and non-toxic bait stations. For outdoor and high-risk areas, we may also apply localized fogging or spot spraying to reduce adult fly activity. If insects are contributing to the problem, our integrated approach also includes wasp control to keep your base completely insect-free.",
            },
            {
              number: "3",
              title: "Ongoing Monitoring ",
              desc: "Post-treatment, our team provides practical advice on waste disposal, airflow control, and sanitation improvements. We also offer monthly maintenance plans to safeguard your space from reinfestation. Our fly control solutions don’t just kill flies they keep them away using proven, proactive methods.",
            },
          ]}
        />

        <RemoveAnimals heading="We remove all types of flies" animals={animalsList} />

        <Footer />
      </div>
    </>
  );
};

export default Rodent;
