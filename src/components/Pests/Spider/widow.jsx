import PestInfoPage from "../PestInfoPage";
import TopBar from "../../TopBar";
import Footer from "@/components/Footer";
import Navbar from "../../Navbar";
import ServicesHero from "../../Services/ServicesHero";
import RodentHeroImg from "@/assets/Pests/Spider/blackhero.webp";


const BlackWidowSpider = () => {
  return (
    <>
    <TopBar />
      <Navbar />
      <ServicesHero
        title="Black Widow Spider"
        breadcrumb="Home > Pests > Details"
        bgImg={RodentHeroImg}
      />
    <PestInfoPage
      title="Black Widow Spider"
      scientificName=""
      description="The Black Widow Spider is one of the most venomous spiders found in residential environments. Recognized by its shiny black body and red hourglass marking, this spider prefers dark, undisturbed areas such as garages, basements, and storage sheds. Although bites are rare and usually defensive, they can pose serious health risks, especially to children and the elderly, requiring immediate attention."

      Int=""
      descInt=""
      ListDescInt=""

      Int2=""
      descInt2=""
      ListDescInt2=""

      Heading1="Recognizing the Black Widow Spider  and Its Web"
      desc1="These venomous spiders are known for building irregular, tangled webs close to the ground or in secluded corners. Here’s how to identify them:"
      ListDesc1=""
      pestDescription={[
        {value:"A sleek, glossy black body with a bright or orange abdomen that resembles an hourglass"},
        {value:"Females are larger and more dangerous than males"},
        {value:"Irregular, messy looking webs in undisturbed areas"},
        {value:"Found in dry, warm locations like sheds, woodpiles, crawlspaces, or outdoor furniture"},
      ]}
      List={[]}
      Enddesc1="Although often confused with other brown and black spider species, the Black Widow’s appearance and web style are distinctive."

      Heading2="Risks and the Need for Prompt Removal"
      desc2="Black widow bites can result in severe pain, nausea, and cramping in the muscles. While not usually fatal, their venom can lead to medical emergencies. Homeowners must remain alert, especially in spaces not regularly cleaned or monitored.For this reason, active house pest treatment is important for security."
      ListDesc2="Signs of potential infestation include:"
      habits={[
        "Webs with egg sacs (white, papery spheres)",
        "Spider sightings in storage or outdoor areas",
        "Frequent insect activity attracting web-builders",
        "Previous history of spider issues on the property",
      ]}
      Enddesc2=""

      Heading3="Get Expert Help with Black Widow Spider Control"
      desc3="At Accurate Pest Control Services LLC Dubai, we offer targeted solutions for dealing with venomous spiders. Our team is trained to identify, eliminate, and prevent future infestations of dangerous species like the Black Widow."
      ListDesc3="Our spider services include:"
      habitat={[
        {value:"Safe removal of spiders and egg sacs"},
        {value:"Careful inspection of attics, garages, and crawlspaces"},
        {value:"Application of Dubai Municipality approved control agents"},
        {value:"Tips for long-term prevention and area maintenance"},
      ]}
      Enddesc3=""

      Heading4=""
      desc4=""
      ListDesc4=""
      threats={[]}
      Enddesc4=""

      Heading5=""
      desc5=""
      ListDesc5=""
      additional={[]}
      Enddesc5=""

      ctaHeading="Book Your Black Widow Inspection Today"
      ctaText="Whether you’ve spotted a brown and black spider or suspect a hidden nest, don’t take chances. Let our professional pest control team make sure your house is safe."
      ctaButtonText="Schedule Your Inspection Now"
    />
    <Footer />
    </>
  );
};

export default BlackWidowSpider;
