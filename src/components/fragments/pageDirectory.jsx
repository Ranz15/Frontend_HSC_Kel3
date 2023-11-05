import { Link } from "react-router-dom";
const PageDirectory = () => {
  return (
    <section className="flex justify-center items-center gap-14 text-center">
      <div className="text-xs py-5 w-80">
        <Link to="/" className="hover:underline">
          HM.COM
        </Link>
        <span className="text-gray-400">/</span>
        <Link to="/login" className="hover:underline">
          Masuk Akun/Daftar Akun
        </Link>
      </div>
    </section>
  );
};
export default PageDirectory;
