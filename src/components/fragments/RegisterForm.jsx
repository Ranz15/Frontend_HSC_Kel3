import Button from "../elements/button/buttonRegister";
import Input from "../elements/input/input";
import RegisterAgreement from "../elements/RegisterElements/registerAgreement";

const InputForm = () => {
  return (
    <div className="flex flex-col justify-center p-5 text-xs">
      <div className="grid grid-cols-2 gap-7 gap-y-16">
        <Input
          title="* Nama Depan"
          className={"border-[1px] border-solid border-[#dadada] p-3 w-60 h-10"}
          type="text"
          htmlFor="first-name"
          id="first-name"
        />
        <Input
          title="* Nama Terakhir"
          className={"border-[1px] border-solid border-[#dadada] p-3 w-60 h-10"}
          type="text"
          htmlFor="last-name"
          id="last-name"
        />
        <Input
          title="*Email"
          className={"border-[1px] border-solid border-[#dadada] p-3 w-60 h-10"}
          type="email"
          htmlFor="email"
          id="email"
        />
        <Input
          title="*Buat kata sandi"
          className={"border-[1px] border-solid border-[#dadada] p-3 w-60 h-10"}
          type="password"
          htmlFor="password"
          id="password"
        />
      </div>
      <RegisterAgreement />
      <Button />
    </div>
  );
};

export default InputForm;
