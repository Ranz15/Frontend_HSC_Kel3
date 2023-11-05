/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        content1: "url('./assets/images/[2]_Content/Content_1.jpeg')",
        content2: "url('./assets/images/[2]_Content/Content_2.jpeg')",
        content3: "url('./assets/images/[2]_Content/Content_4.jpeg')",
        content4: "url('./assets/images/[2]_Content/Content_5.jpeg')",
        content5: "url('./assets/images/[2]_Content/Content_6.jpeg')",
        contentmen1: "url('./assets/images/Men/men1.jpg')",
        contentmen2: "url('./assets/images/Men/men2.jpg')",
        contentmen3: "url('./assets/images/Men/men3.jpg')",
        offers1: "url('./assets/images/Men/offers-banner1.jpg')",
      },
    },
  },
  plugins: [],
};
