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
        setIsFixed(rect.bottom <= 0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={heroRef} className="relative w-full overflow-hidden" style={{ height: "50vh" }}>
      {/* Responsive Image */}
      <img
        src={bgImg}
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          objectFit: "cover", // ensures it still covers but scales down
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center h-full px-[4vw] text-white">
        <h1
          className="font-bold"
          style={{
            fontSize: "5vw",
            lineHeight: "1.2",
          }}>
          {title}
        </h1>

        <p style={{ fontSize: "2vw", marginTop: "0.5vw" }}>
          {breadcrumb}
        </p>

        <div className={`${isFixed ? "fixed top-2 right-2 z-50" : "absolute bottom-2 right-2"}`}>
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
