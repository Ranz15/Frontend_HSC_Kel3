import Footer from "../components/layouts/Footer";
import Navbar from "../components/layouts/Navbar";
import Section1 from "../components/layouts/Section1";
import Section2 from "../components/layouts/Section2";

const LandingPage = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <Navbar />
        <Section1 />
        <Section2 />
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
