import { Link } from "react-router-dom";
import Input from "../elements/input/input";

const LoginForm = () => {
  return (
    <form action="" className="flex flex-col justify-start w-96 mb-5 text-xs">
      <Input
        containerClass="m-5 ml-0 justify-start"
        htmlFor="email"
        labelClass="mb-2 font-bold"
        title="*Email"
        className="border-[1px] border-solid border-[#dadada] p-3 w-72 h-10"
        type="email"
        name="email"
        id="email"
      />
      <Input
        containerClass="m-5 ml-0 justify-start"
        htmlFor="password"
        labelClass="mb-2 font-bold"
        title="*Kata Sandi"
        className="border-[1px] border-solid border-[#dadada] p-3 w-72 h-10"
        type="password"
        name="password"
        id="password"
      />
      <div className="flex flex-row m-3 ml-0">
        <button
          className="bg-black text-white px-4 py-2 font-bold text-xs hover:opacity-70"
          type="submit"
        >
          MASUK
        </button>
        <Link className="self-center ml-2 text-xs hover:underline" to="#">
          Lupa kata sandi anda?
        </Link>
      </div>
    </form>
  );
};

export default LoginForm;
