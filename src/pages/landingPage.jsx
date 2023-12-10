import Footer from "../components/layouts/footer";
import Header from "../components/layouts/header";
import Section from "../components/layouts/section";

const LandingPage = () => {
  const image = [
    { image: "./public/assets/images/Men/men1.jpg" },
    { image: "./public/assets/images/Men/men2.jpg" },
    { image: "./public/assets/images/Men/men3.jpg" },
  ];
  return (
    <div>
      <Header />
      <Section>
        {image.map((e, i) => (
          <Section.Image key={i} src={e.image} onClick={}/>
        ))}
      </Section>
      <Footer />
    </div>
  );
};

export default LandingPage;
