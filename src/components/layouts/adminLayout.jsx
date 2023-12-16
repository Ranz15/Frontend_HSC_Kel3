import Input from "../elements/input/input";
import { Link } from "react-router-dom";
const CreateAdmin = () => {
  return (
    <form action="" className=" flex flex-col mb-5 text-xs">
      <h2 className="text-xl font-bold">CREATE ADMIN</h2>
      <Input
        containerClass="m-3 ml-0 justify-start"
        htmlFor="fullname"
        labelClass="mb-2 font-bold"
        title="Full Name"
        className="border-[1px] border-solid border-[#dadada] p-3 w-72 h-5"
        type="text"
        name="fullname"
        id="fullname"
      />
      <Input
        containerClass="m-3 ml-0 justify-start"
        htmlFor="username"
        labelClass="mb-2 font-bold"
        title="Username"
        className="border-[1px] border-solid border-[#dadada] p-3 w-72 h-5"
        type="text"
        name="username"
        id="username"
      />
      <Input
        containerClass="m-3 ml-0 justify-start"
        htmlFor="email"
        labelClass="mb-2 font-bold"
        title="Email"
        className="border-[1px] border-solid border-[#dadada] p-3 w-72 h-5"
        type="email"
        name="email"
        id="email"
      />
      <Input
        containerClass="m-3 ml-0 justify-start"
        htmlFor="password"
        labelClass="mb-2 font-bold"
        title="*Kata Sandi"
        className="border-[1px] border-solid border-[#dadada] p-3 w-72 h-5"
        type="password"
        name="password"
        id="password"
      />
      <span className="text-sm">Jenis Kelamin</span>
      <div className="flex flex-row">
        <Input
          containerClass="m-3 ml-0 justify-start"
          htmlFor="gender"
          labelClass="mb-2 font-bold"
          title="Pria"
          className="border-[1px] border-solid border-[#dadada] p-3 w-16 h-5"
          type="radio"
          name="gender"
          id="gender"
        />
        <Input
          containerClass="m-3 ml-0 justify-start"
          htmlFor="gender"
          labelClass="mb-2 font-bold"
          title="Wanita"
          className="border-[1px] border-solid border-[#dadada] p-3 w-16 h-5"
          type="radio"
          name="gender"
          id="gender"
        />
      </div>
      <Input
        containerClass="m-3 ml-0 justify-start"
        htmlFor="phone-number"
        labelClass="mb-2 font-bold"
        title="Nomor Telepon"
        className="border-[1px] border-solid border-[#dadada] p-3 w-72 h-5"
        type="string"
        name=""
        id="phone-number"
      />
      <div className="flex flex-row m-3 ml-0">
        <button
          className="bg-black w-1/2 text-white px-4 py-2 font-bold text-xs hover:opacity-70"
          type="submit"
        >
          CREATE ADMIN
        </button>
      </div>
    </form>
  );
};
export default CreateAdmin;
