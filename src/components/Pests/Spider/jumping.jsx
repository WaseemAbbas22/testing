import PestInfoPage from "../PestInfoPage";
import TopBar from "../../TopBar";
import Footer from "@/components/Footer";
import Navbar from "../../Navbar";
import ServicesHero from "../../Services/ServicesHero";
import RodentHeroImg from "@/assets/Pests/Spider/jumpinghero.webp";


const JumpingSpider = () => {
  return (
    <>
    <TopBar />
      <Navbar />
      <ServicesHero
        title="Jumping Spider"
        breadcrumb="Home > Pests > Details"
        bgImg={RodentHeroImg}
      />
    <PestInfoPage
      title="About the Jumping Spider"
      scientificName=""
      description="In comparison to species that build webs, active hunters are known for their remarkable vision and speed. While small in size, their sudden leaps and curious movements often catch people off guard, giving them a reputation as one of the more scary spiders to encounter indoors. Though generally harmless to humans, their unpredictable behavior and quick movement make them a difficult pest to manage without professional intervention."

      Int=""
      descInt=""
      ListDescInt=""

      Int2=""
      descInt2=""
      ListDescInt2=""

      Heading1="Signs of a Jumping Spider Infestation"
      desc1="You may not see webs, but here’s how to know if Jumping Spiders are inside your home or workspace:"
      ListDesc1=""
      pestDescription={[
        {value:"Frequent sightings of fast-moving, small, hairy spiders"},
        {value:"Tiny droppings or insect carcasses left behind"},
        {value:"Increased indoor insect activity (their prey)"},
        {value:"Spiders seen jumping on walls, counters, or furniture"},
        {value:"Daytime spider activity unusual for other spider types"},
      ]}
      List={[]}
      Enddesc1="If left unchecked, their numbers can grow quickly, especially in bug-prone areas with windows, lights, or high ceilings."

      Heading2="Common Hiding Places and Habits"
      desc2="Jumping spiders are solitary creatures that rely on their speed and vision to stalk prey. They are commonly found in:"
      ListDesc2=""
      habits={[
        "Window sills and curtain folds",
        "Bookshelves and decorative displays",
        "Under cushions or in shoe racks",
        "Near door frames or ceiling corners",
        "In indoor plants or flowerpots",
      ]}
      Enddesc2="They attack the target rather of building webs to seal up it. This makes it challenging to detect their presence until the infestation becomes noticeable."


      Heading3="Professional Spider Control in Dubai"
      desc3="At Accurate Pest Control Services LLC Dubai, our methods are tailored for active species like Jumping Spiders. We use advanced techniques to locate hidden spiders and reduce their food sources (other insects). As a trusted exterminator  Dubai, our team ensures your environment is safe, clean, and spider-free."
      ListDesc3="Our services include:"
      habitat={[
        {value:"Detailed property inspections and pest identification"},
        {value:"Use of precise, eco-safe pest control agents"},
        {value:"Removal of sheltering zones and food sources"},
        {value:"Entry point sealing and long-term deterrent measures"},
        {value:"Custom maintenance plans for homes and businesses"},
      ]}
      Enddesc3="Whether it's one spider or a full infestation, our team handles it with care and expertise."

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

      ctaHeading="Don’t Wait Call an Insect Exterminator You Can Trust"
      ctaText="Ready to reclaim your space from jumping spiders?Let the work be done by a licensed insect exterminator.We serve residential and commercial clients across Dubai."
      ctaButtonText="Book Your Spider Removal Today"
    />
    <Footer />
    </>
  );
};

export default JumpingSpider;
