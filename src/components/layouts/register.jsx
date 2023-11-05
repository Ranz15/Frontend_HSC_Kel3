import PageDirectory from "../fragments/pageDirectory";
import RegisterTitle from "../elements/RegisterElements/registerTitle";
import RegisterForm from "../fragments/registerForm";
const Register = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <PageDirectory />
      <RegisterTitle />
      <RegisterForm />
    </div>
  );
};
export default Register;
