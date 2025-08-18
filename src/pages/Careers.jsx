import Navbar from "../components/Navbar";
import TopBar from "../components/TopBar";
import ServicesHero from "../components/Services/ServicesHero";
import ServicesSection from "../components/Services/ServicesSection";
import BlogsHeroImg from "@/assets/Career/heroImg.webp"; // Adjust the path as necessary
import ServicesImg from "@/assets/Career/image99.webp"; // Adjust the path as
import Footer from "../components/Footer";
//import Careers from "../components/Careers/Careers"
import CareersList from "../components/Careers/Careers";

const Careers = () => {
  return (
    <>
      <div>
        <TopBar />
        <Navbar />
        <ServicesHero
          title="Careers"
          breadcrumb="Home > Careers"
          bgImg={BlogsHeroImg}
        />
        <ServicesSection
          title={
            <div>
              <div className="text-4xl 3xl:text-[50px] font-bold text-gray-800 mb-1">
                Join Dubai's Pest-Free Mission
              </div>
            </div>
          }
          Subtitle={
            <div>
              <div>
                Explore Job Openings In Dubai & Be Part of Something Great!
              </div>
            </div>
          }
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sollicitudin, lorem sed tincidunt porta, dui odio ultricies neque, a interdum odio est sed risus. Nam eu sem malesuada dui cursus vestibulum. Duis nec ligula arcu. Nunc vitae rhoncus orci. Proin porttitor dictum neque id dapibus. Ut in condimentum risus. In quis urna id tellus hendrerit placerat non sed nunc. Vestibulum commodo sit amet neque ac posuere. Donec iaculis nisi quis ipsum rhoncus, in bibendum elit tempor. Integer vestibulum velit sit amet finibus eleifend. Nulla facilisi. Quisque et vestibulum quam. Quisque at erat faucibus eros consequat pharetra.
Morbi nec vestibulum ante. Pellentesque blandit lacus rutrum nulla ornare, ac condimentum odio finibus. Donec malesuada vehicula auctor."
          image={ServicesImg}
        />

        <CareersList />
        <Footer />
      </div>
    </>
  );
};

export default Careers;
