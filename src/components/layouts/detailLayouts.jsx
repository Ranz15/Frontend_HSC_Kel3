import ButtonBeli from "../elements/button/buttonBeli";
const Header = ({ src, alt }) => {
  return (
    <div className="max-w-md flex flex-row">
      <div className="flex flex-row justify-center items-center gap-x-3">
        <div className="">00</div>
        <img src={src} alt={alt} className="w-2/3" />
        <div className="">00</div>
      </div>
      <ButtonBeli className={"hidden sm:block"}>BELI</ButtonBeli>
    </div>
  );
};

const Description = ({ children }) => {
  return (
    <div>
      <ButtonBeli className="w-2/3 bg-black flex flex-row justify-center h-auto px-3 py-2 mx-auto my-5 text-white font-bold rounded-sm shadow-md sm:hidden">
        BELI
      </ButtonBeli>
      <div className=" bg-white px-2 py-4 text-sm">
        <h3 className="text-lg font-bold uppercase">Baju Kemeja</h3>
        <p className="text-justify tracking-tight">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate,
          neque. Delectus laudantium sunt molestiae magnam magni vero hic
          aperiam eligendi eum corrupti vitae sequi, architecto eius, iure alias
          quae nulla!
        </p>
      </div>
    </div>
  );
};

const Product = (props) => {
  const { children } = props;
  return <div className="flex flex-col w-full py-20">{children}</div>;
};

Product.Header = Header;
Product.Description = Description;
export default Product;
