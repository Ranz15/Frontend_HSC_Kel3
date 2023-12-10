const Image = ({ src, alt, onClick }) => {
  return (
    <div className="mx-5 my-2 sm:w-2/3" onClick={onClick}>
      <img src={src} alt={alt} />
    </div>
  );
};

const Section = ({ children }) => {
  return (
    <section className="flex flex-col items-center py-20 ">{children}</section>
  );
};

Section.Image = Image;

export default Section;
