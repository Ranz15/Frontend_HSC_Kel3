import { useNavigate } from "react-router";
import LoginForm from "../fragments/loginForm";

const Login = () => {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/register");
  };
  return (
    <div className="bg-[#faf9f8]">
      <div className="flex justify-center mx-auto font-hmSansLatinBold">
        <section className="flex flex-col">
          <h4 className="mb-4 font-bold text-xl">MASUK</h4>
          <div className="flex">
            <div className="flex flex-col">
              <h4 className="font-bold text-lg mb-5">PELANGGAN LAMA</h4>
              <p className="mb-5 w-96 text-xs font-hmSansLatinRegular">
                Selamat datang kembali! Masuk ke akun Anda untuk melakukan
                Pembayaran yang lebih cepat
              </p>
              <LoginForm />
            </div>
            <div className="flex flex-col ml-20">
              <h4 className="text-lg mb-5 font-bold">PELANGGAN BARU</h4>
              <div className="mb-10 w-64 text-xs font-hmSansLatinRegular">
                <p>Buat akun untuk berbelanja lebih lancar dan mudah!</p>
              </div>
              <button
                className="border-2 border-solid border-[#222] w-auto hover:opacity-70 text-xs text-[#1a1a1a] font-bold py-2 px-3"
                onClick={handleButtonClick}
              >
                BERGABUNGLAH DENGAN KAMI
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Login;
