import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicesHero from "@/components/Services/ServicesHero";
import HMheroImg from "@/assets/Pests/RedBug/RedBugHeroImg.webp";
import TopComponent from "../TopComponent";
import Top1 from "@/assets/Pests/Rodent/Top1.webp";
import Top2 from "@/assets/Pests/Rodent/Top2.webp";
import PestRemovalBox from "../PestRemovalBox";
import RemoveAnimals from "../RemoveAnimals";
import Img1 from "@/assets/Pests/RedBug/bot1.webp";
import Img2 from "@/assets/Pests/RedBug/bot2.webp";
import Img3 from "@/assets/Pests/RedBug/bot3.webp";
//import Img4 from "@/assets/Pests/Rodent/bot4.webp";

const animalsList = [
  {
    img: Img1,
    name: "CIMEX LECTULARIUS",
    sci: "",
    link: "/cimex-lectularius",
  },
  {
    img: Img2,
    name: "CIMEX HEMIPTERUS",
    sci: "",
    link: "/cimex-hemipterus",
  },
  {
    img: Img3,
    name: "BAT BUGS",
    sci: "",
    link: "/bat-bug",
  },
  
  
];

const housemouse = () => {
  return (
    <>
      <div>
        <TopBar />
        <Navbar />
        <ServicesHero
          title="Reliable Professionals Cure Bed Bugs Treatment in Dubai"
          breadcrumb="Home > Pests > Details"
          bgImg={HMheroImg}
        />
        <TopComponent
          image1={Top1}
          image2={Top2}
          heading1="Bed Bug Pest Control Services"
          desc1={`Dealing with a bedbug infestation,  Accurate Pest Control Services LLC Dubai offers professional bed bug treatment to restore comfort and safety to your home or business. Our licensed technicians use safe, effective methods as part of our comprehensive pest control services to eliminate bed bugs from every corner of your property. Whether you're facing an early infestation or a severe outbreak, we’re equipped to handle it all. Our priorities are rapid response, little trouble, and satisfaction assurance. Select the team Dubai relies on to safeguard your clients, family, and visitors from the health hazards posed by bedbugs.`}
          button1Text="Remove Bugs"
          heading2="Your Guide to the Best Bed Bug Control"
          desc2="Despite their small size, bed bugs cause a great deal of discomfort and harm."
          desc3="Professional bed bug exterminator is essential for complete relief. Choose a trusted bed bug company near you for affordable, long-lasting results. Get the best bed bug control in Dubai with experienced pest control services."
          listItems={[
            "Feed at night while hiding in wall cracks, beds, and furniture.",
            "Leave itchy bite marks and sleepless nights",
            "Lay eggs rapidly, making infestations harder to stop",
            "Travel easily between rooms, spreading throughout your home",
            "Causes allergic reactions, stress, and embarrassment",
            
          ]}
        />
        <PestRemovalBox
          heading="Our Bed Bug Treatment Removal Process"
          subtitle="Effective and secure bug removal made for your area."
          steps={[
            {
              number: "1",
              title: "Bedbug Inspection Service",
              desc: "Our expert team begins with a detailed inspection to locate signs of bedbug activity in your home or business. Early detection is key to effective bed bug control, ensuring we target all hiding spots before treatment.",
            },
            {
              number: "2",
              title: "Professional bed bug exterminator",
              desc: "We apply a customized bed bug treatment using heat, steam, and safe chemicals. Our pest control services are designed to eliminate all bed bugs, from eggs to adults, with minimal disruption to your daily life.",
            },
            {
              number: "3",
              title: "Follow-Up by Bed Bug Experts",
              desc: "To guarantee total eradication, our skilled bed bug extermination staff does follow-up visits. As a trusted bed bug company, we guarantee long-term protection and helpful tips to prevent future infestations.",
            },
          ]}
        />
        <RemoveAnimals heading="We Remove All Types Of Bed Bugs" animals={animalsList} />
        <Footer />
      </div>
    </>
  );
};

export default housemouse;
