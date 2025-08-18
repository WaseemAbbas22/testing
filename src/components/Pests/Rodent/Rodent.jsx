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
import Img1 from "@/assets/Pests/Rodent/bot1.webp";
import Img2 from "@/assets/Pests/Rodent/bot2.webp";
import Img3 from "@/assets/Pests/Rodent/bot3.webp";
import Img4 from "@/assets/Pests/Rodent/bot4.webp";

const animalsList = [
  {
    img: Img1,
    name: "HOUSE MOUSE ",
    sci: "(MUS MUSCULUS)",
    link: "/house-mouse",
  },
  {
    img: Img2,
    name: "ROOF RAT ",
    sci: "(RATTUS RATTUS)",
    link: "/roof-rat",
  },
  {
    img: Img3,
    name: "BANDICOOT RAT ",
    sci: "(BANDICOTA BENGALENSIS)",
    link: "/bandicoot-rat",
  },
  {
    img: Img4,
    name: "NORWAY RAT ",
    sci: "(RATTUS NORVEGICUS)",
    link: "/norway-rat",
  },
];

const Rodent = () => {
  return (
    <>
      <div>
        <TopBar />
        <Navbar />
        <ServicesHero
          title="Trusted Rodent Exterminator Services"
          breadcrumb="Home > Pests > Details"
          bgImg={RodentHeroImg}
        />
        <TopComponent
          image1={Top1}
          image2={Top2}
          heading1="Comprehensive Pest Control for Rats in Dubai"
          desc1={`Rats not only ruin property but also pose serious health risks. Our expert team offers reliable pest solutions tailored to your property’s needs. From residential buildings to large warehouses, we identify the root cause and implement effective treatment plans. Our advanced rodent removal methods stop infestation, nesting, and re-entry. We use eco-friendly approaches that ensure safety without compromising results. Our goal is not just to eliminate visible rats, but to secure your space long-term. Choose Accurate Pest Control Services LLC for expert care, timely service, and peace of mind because rodents don’t belong in your home or business.`}
          button1Text="Book Now"
          heading2="Why Rodent Removal is Important"
          desc2="Rats may be small, but their impact on your home or business is dangerously big."
          desc3="For your property to be protected from future rat threats and to successfully remove current infestations, professional rodent control is required."
          listItems={[
            "Invade kitchens, basements, ceilings, and offices",
            "Chew through wires risk of electrical fires",
            "Contaminate surfaces with disease-causing bacteria",
            "Spread illnesses like typhoid and leptospirosis",
            "Cause expensive structural damage over time",
          ]}
        />
        <PestRemovalBox
          heading="Our Mosquito Extermination Process"
          subtitle="Our process goes beyond just fogging we eliminate mosquitoes at the breeding level with a strategic, eco conscious approach."
          steps={[
            {
              number: "1",
              title: "First Examination and Detection",
              desc: "In order to identify possible entry points, nesting locations, and early indicators of rodent activity, our certified specialists thoroughly inspect the whole property. This aids in our comprehension of the problem's scope and the selection of the best control strategies.",
            },
            {
              number: "2",
              title: "Customized Removal Method",
              desc: "After the assessment, we develop a personalized removal strategy that may include the following:",
              list: [
                "Safe trapping methods to quickly capture mice in crowded situations",
                "For the best results, hide places to feed for pets and children. Sealing off any openings and structural cracks is necessary to stop further attack.",
              ],
            },
            {
              number: "3",
              title: "Constant Monitoring and Prevention",
              desc: "We keep an eye on your area to make sure rats don't come back. In order to guarantee long-term protection, our staff rechecks every possible entryway and modifies treatment plans as necessary.",
            },
          ]}
        />

        <RemoveAnimals
          heading="We Remove The Following Animals"
          animals={animalsList}
        />

        <Footer />
      </div>
    </>
  );
};

export default Rodent;
