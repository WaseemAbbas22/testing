// TawkToWidget.jsx
import { useEffect } from "react";

const TawkToWidget = () => {
  useEffect(() => {
    const Tawk_API = window.Tawk_API || {};
    const Tawk_LoadStart = new Date();

    const s1 = document.createElement("script");
    s1.src = "https://embed.tawk.to/68876099201332192519dd9b/1j18d2mpv";
    s1.async = true;
    s1.charset = "UTF-8";
    s1.setAttribute("crossorigin", "*");

    document.body.appendChild(s1);

    // 🛡️ Title protection logic
    const originalTitle = document.title;
    const interval = setInterval(() => {
      if (document.title !== originalTitle) {
        document.title = originalTitle;
      }
    }, 1000); // every 0.5 seconds

    // Clean up interval when component unmounts
    return () => {
      clearInterval(interval);
    };
  }, []);

  return null;
};

export default TawkToWidget;
