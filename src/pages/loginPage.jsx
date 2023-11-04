import PageDirectory from "../components/fragments/pageDirectory";
import Footer from "../components/layouts/footer";
import Header from "../components/layouts/header";
import Navbar from "../components/layouts/navbar";
import Login from "../components/layouts/login";

const LoginPage = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <PageDirectory />
      <Login />
      <Footer />
    </div>
  );
};

export default LoginPage;
