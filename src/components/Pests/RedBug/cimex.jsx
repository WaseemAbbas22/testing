import PestInfoPage from "../PestInfoPage";
import TopBar from "../../TopBar";
import Navbar from "../../Navbar";
import ServicesHero from "../../Services/ServicesHero";
import heroImg from "@/assets/Pests/RedBug/Lehero.webp"; //import React from "react";

const CimexLectularius = () => {
  return (
    <>
      <TopBar />
      <Navbar />
      <ServicesHero
        title="Cimex lectularius"
        breadcrumb="Home > Pests > Details"
        bgImg={heroImg}
      />
      <PestInfoPage
        title="About Cimex lectularius"
        scientificName="(Common Bed Bug)"
        description={`Cimex lectularius is the scientific name for the common bedbugs found in homes, hotels, and apartments worldwide. These small, reddish-brown insects feed on human blood and are most active at night. They look oval and flat, and they may go months without eating. While they don't spread disease, they cause discomfort, allergic reactions, and psychological stress, making timely bed bug pest control Dubai services essential.`}

        Heading1="Signs of a Bed Bug Infestation"
        desc1="You may not see the bugs right away, but here are the most common signs:"
        ListDesc1=""
        Enddesc1=""
        pestDescription={[
          {
            label: "",
            value: "Itchy red bites in a line or cluster, usually on exposed skin",
          },
          { label: "", 
            number: "", 
            value:"Tiny blood stains on sheets or mattresses" },
          {
            label: "",
            value: "Dark fecal spots near seams, corners, or wall edges",
          },
          {
            label: "",
            value: "Shed skins and translucent bed bug eggs in crevices or fabric folds",
          },
          { label: "",
            value: "A musty, sweet odor in heavily infested rooms" },
          
        ]}
        List={[]}
        Heading2="Where They Hide and How They Spread"
        desc2="Bed bugs are experts at hiding in:"
        Enddesc2=""
        ListDesc2=""
        habits={[
          "Mattress seams, box springs, and bed frames",
          "Cracks in walls, furniture, and flooring",
          "Luggage, backpacks, clothing, and second hand furniture",
        ]}

        Heading3="Dangers and Health Effects"
        desc3="Though they don’t transmit diseases, the effects of bed bugs can be serious:"
        ListDesc3 = ""
        Enddesc3=""
        habitat={[
          {value:"Constant itching and secondary skin infections from scratching"},
          {value:"Sleep disturbances and anxiety"},
          {value:"Risk of allergic reactions"},
          {value:"In urban areas, bed bug Dubai cases can quickly infest entire homes or buildings."},
        ]}
        additional={[]}
        Heading4="Effective Bed Bug Control"
        desc4="A successful strategy requires more than just sprays. It includes:"
        threats={[
          "Deep vacuuming and steam treatment",
          "Professional bed bug pest control that targets all life stages",
          "Safe and certified insecticides like bed bug killer spray for furniture and cracks",
          "Full-service bed bug treatment Dubai plans for residential or commercial spaces",
          "Continuous monitoring to prevent reinfestation",        
        ]}
        ctaHeading="Fast & Safe Bed Bug Treatment in Dubai"
        ctaText={`Worried about bites, strange smells, or spotting bed bug eggs? Our trusted bed bug exterminator Dubai team offers fast, safe, and targeted bed bug pest control to protect your home.`}
        ctaButtonText="Book Your Free Bed Bug Inspection Today"
      />
    </>
  );
};

export default CimexLectularius;
