import Footer from "../components/layouts/footer";
import Navbar from "../components/layouts/navbar";
import Section1 from "../components/layouts/section1";
import Section2 from "../components/layouts/section2";
import Header from "../components/layouts/header";

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
