import Service1 from "@/assets/Pests/ant.png";
import Service2 from "@/assets/Pests/termites.png";
import Service3 from "@/assets/Pests/cockroch.png";
import Service4 from "@/assets/Pests/redbug.png";
import Service5 from "@/assets/Pests/mosquitoes.png";
import Service6 from "@/assets/Pests/rodent.png";
import Service7 from "@/assets/Pests/flies.png";
import Service8 from "@/assets/Pests/spider.png";

const Services = () => {
  const services = [
    { img: Service1, title: "ANTS", subtitle: "Treatment" },
    { img: Service3, title: "COCKROACHES", subtitle: "Treatment" },
    { img: Service4, title: "BED BUGS", subtitle: "Treatment" },
    { img: Service6, title: "RODENTS", subtitle: "Treatment" },
    { img: Service7, title: "FLIES ", subtitle: "Treatment" },
    { img: Service5, title: "MOSQUITOES", subtitle: "Treatment" },
    { img: Service8, title: "SPIDERS", subtitle: "Treatment" },
    { img: Service2, title: "TERMITES", subtitle: "Treatment" },
  ];

  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "#f5f5f5",
        paddingTop: "clamp(48px, 8vw, 64px)",
        paddingBottom: "clamp(48px, 8vw, 64px)",
        paddingLeft: "clamp(16px, 4vw, 128px)",
        paddingRight: "clamp(16px, 4vw, 128px)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Heading */}
      <h2
        style={{
          fontWeight: "bold",
          textAlign: "center",
          color: "#333",
          marginBottom: "clamp(8px, 1.5vw, 16px)",
          fontSize: "clamp(24px, 3vw, 40px)",
        }}
      >
        Our Services
      </h2>

      {/* Subtext */}
      <p
        style={{
          textAlign: "center",
          color: "#666",
          marginBottom: "clamp(24px, 4vw, 40px)",
          maxWidth: "640px",
          fontSize: "clamp(12px, 2vw, 16px)",
          lineHeight: "1.5",
        }}
      >
        We provide comprehensive pest control and treatment services tailored to your needs.
        <br />
        Our expert team ensures effective, safe, and long-lasting solutions.
      </p>

      {/* Gallery Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(clamp(200px, 25vw, 300px), 1fr))",
          gap: "clamp(16px, 2vw, 24px)",
          width: "100%",
          marginBottom: "clamp(24px, 4vw, 40px)",
        }}
      >
        {services.map((service, index) => (
          <div
            key={index}
            style={{
              position: "relative",
              borderRadius: "8px",
              overflow: "hidden",
            }}
          >
            {/* Image */}
            <img
              src={service.img}
              alt={service.title}
              style={{
                width: "100%",
                height: "clamp(180px, 50vw, 600px)",
                objectFit: "cover",
                transition: "transform 0.5s",
              }}
              className="group-hover:scale-105"
            />

            {/* Dark Overlay */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                backgroundColor: "rgba(0, 0, 0, 0.4)",
                transition: "background-color 0.5s",
              }}
              className="group-hover:bg-opacity-50"
            ></div>

            {/* Overlay Text */}
            <div
              style={{
                position: "absolute",
                bottom: "clamp(8px, 1.5vw, 16px)",
                left: "clamp(8px, 1.5vw, 16px)",
                color: "#fff",
              }}
            >
              <h3
                style={{
                  fontWeight: "600",
                  fontSize: "clamp(14px, 2vw, 20px)",
                  margin: 0,
                }}
              >
                {service.title}
              </h3>
              <p
                style={{
                  fontSize: "clamp(10px, 1.5vw, 14px)",
                  margin: 0,
                }}
              >
                {service.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Learn More Button */}
      <button
        style={{
          backgroundColor: "#16a34a",
          color: "#fff",
          fontWeight: "600",
          border: "none",
          borderRadius: "4px",
          fontSize: "clamp(12px, 1.8vw, 16px)",
          padding: "clamp(6px, 1vw, 10px) clamp(12px, 2vw, 20px)",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
          cursor: "pointer",
          transition: "background-color 0.3s",
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#15803d")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "#16a34a")}
      >
        View More
      </button>
    </div>
  );
};

export default Services;
