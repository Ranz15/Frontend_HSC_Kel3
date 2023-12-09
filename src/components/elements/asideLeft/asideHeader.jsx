const AsideHeader = (props) => {
  const { title, children } = props;
  return (
    <div className="mb-5 justify-end">
      <h3 className="font-bold text-base">{title}</h3>
      <ul>{children}</ul>
    </div>
  );
};
export default AsideHeader;
