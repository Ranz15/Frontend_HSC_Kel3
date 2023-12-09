const Header = ({ src, alt }) => {
  return (
    <div className="max-w-md">
      <img src={src} alt={alt} className="" />
      <div className="flex flex-row"></div>
    </div>
  );
};

const Title = ({ children }) => {
  return (
    <div className="bg-white px-2 py-4 text-sm">
      <span>Baju Kemeja</span>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate,
        neque. Delectus laudantium sunt molestiae magnam magni vero hic aperiam
        eligendi eum corrupti vitae sequi, architecto eius, iure alias quae
        nulla!
      </p>
    </div>
  );
};

const Product = (props) => {
  const { children } = props;
  return <div className="flex w-full mx-auto">{children}</div>;
};

Product.Header = Header;
Product.Title = Title;
export default Product;
