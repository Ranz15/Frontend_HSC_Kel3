import BreadCrumb from "../components/fragments/breadCrumb";
import Footer from "../components/layouts/footer";
import Header from "../components/layouts/header";
import Login from "../components/layouts/login";

const LoginPage = () => {
  return (
    <div>
      <Header />
      <BreadCrumb />
      <Login />
      <Footer />
    </div>
  );
};

export default LoginPage;
