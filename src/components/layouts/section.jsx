const Image = ({ src, alt }) => {
  return (
    <div>
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
