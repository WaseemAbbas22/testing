import { useEffect } from "react";

export default function TawkToChat() {
  useEffect(() => {
    // --- Load Tawk.to Chat ---
    var Tawk_API = window.Tawk_API || {};
    var Tawk_LoadStart = new Date();

    const s1 = document.createElement("script");
    s1.async = true;
    s1.src = "https://embed.tawk.to/689adb6e2b2f371923cecf42/1j2eeialn";
    s1.charset = "UTF-8";
    s1.setAttribute("crossorigin", "*");

    const s0 = document.getElementsByTagName("script")[0];
    s0.parentNode.insertBefore(s1, s0);

    // --- Load Google Tag (gtag.js) ---
    const gtagScript = document.createElement("script");
    gtagScript.async = true;
    gtagScript.src = "https://www.googletagmanager.com/gtag/js?id=AW-11285092238";
    document.head.appendChild(gtagScript);

    // Inline script to initialize gtag
    const gtagInit = document.createElement("script");
    gtagInit.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'AW-11285092238');
    `;
    document.head.appendChild(gtagInit);

    // Cleanup on component unmount
    return () => {
      s1.remove();
      gtagScript.remove();
      gtagInit.remove();
    };
  }, []);

  return null; // This component doesn't render anything
}
