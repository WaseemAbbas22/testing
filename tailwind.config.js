/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  
  // darkMode: 'class', // Enable dark mode support
  // Alternatively, you can use 'media' for system preference based dark mode
  // Example:
  // darkMode: 'media', // Use this if you want to enable dark mode based
  darkMode: 'media',

  theme: {
    extend: {

    screens: {
      sm: '640px',    // Small devices
      md: '768px',    // Medium devices (tablets)
      lg: '1024px',   // Large devices (laptops)
      xl: '1280px',   // Extra large devices (desktops)
      '2xl': '1600px', // 2x extra large (large desktops)
      '3xl': '1920px',
      '4xl': '2500px', // 4x extra large screens
    },
/* Custom utility classes should be added via plugins or in your CSS file, not directly in the config. */


      fontFamily: {
        inter: ["Inter", "sans-serif"],
        poppins: ["Poppins","sans-serif"]
      },
   

      colors: {
        'textcolorgray': '#666666',
        'darkgreen':'#32A849',
        'gray': '#444444',
        'Border': '#F2F2F2',
        'bggray': '#F0F0F0',
        'custom-brown': '#DED4CA',
        'custom-border': '#F0E5DB',
      },
      keyframes: {
        parallax: {
          '0%': { transform: 'translateY(0) scale(1.1)' },
          '50%': { transform: 'translateY(-10px) scale(1.1)' },
          '100%': { transform: 'translateY(0) scale(1.1)' },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' }, // scroll effect for continuous content
        },
      },
      animation: {
        parallax: 'parallax 20s infinite linear',
        scroll: 'scroll 0s linear infinite', // adjust duration for slower scrolling
        marquee: "marquee 40s linear infinite",
      },
    },
  },
  plugins: [],
};

