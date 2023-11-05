const HotCard = ({ children, className }) => {
  return (
    <div className="w-full my-5">
      <div className={className}>{children}</div>
    </div>
  );
};

export default HotCard;
