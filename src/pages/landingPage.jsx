import Footer from "../components/layouts/footer";
import Header from "../components/layouts/header";
import Section from "../components/layouts/section";

const LandingPage = () => {
  return (
    <div className="">
      <Header />
      <Section>
        <Section.Image src="./public/assets/images/Men/men1.jpg" />
      </Section>
      <Footer />
    </div>
  );
};

export default LandingPage;
