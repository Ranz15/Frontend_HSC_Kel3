import BreadCrumb from "../fragments/breadCrumb";
import RegisterTitle from "../elements/RegisterElements/registerTitle";
import RegisterForm from "../fragments/Auth/registerForm";
const Register = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <BreadCrumb />
      <RegisterTitle />
      <RegisterForm />
    </div>
  );
};
export default Register;
