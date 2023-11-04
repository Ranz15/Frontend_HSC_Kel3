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
      },
    },
  },
  plugins: [],
};
