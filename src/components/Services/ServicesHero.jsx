import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import PhoneCallBox from "/src/components/Home/PhoneCallBox";

const ServicesHero = ({ title = "Services", breadcrumb = "Home > Services", bgImg }) => {
  const [isFixed, setIsFixed] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        if (rect.bottom <= 0) {
          setIsFixed(true); // hero is out of view, fix to top
        } else {
          setIsFixed(false); // hero is in view, keep absolute bottom
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    // call once to set initial position
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={heroRef} className="relative w-full h-[50vh]">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${bgImg})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="relative z-10 flex flex-col justify-center h-full pl-10 text-white ml-12">
        <h1 className="text-5xl font-bold">{title}</h1>
        <p className="text-sm mt-2">{breadcrumb}</p>

        <div className={`${isFixed ? "fixed top-2 right-2 z-50" : "absolute bottom-0 right-2"}`}>
          <PhoneCallBox
            title="Call for free Inspection"
            phone="0800-25456158"
            containerWidth="180px"
            containerHeight="44px"
          />
        </div>
      </div>
    </div>
  );
};

ServicesHero.propTypes = {
  title: PropTypes.string,
  breadcrumb: PropTypes.string,
  bgImg: PropTypes.string
};

export default ServicesHero;
