const AsideList = (props) => {
  const { children, href } = props;
  return (
    <li className="text-sm py-1">
      <a href={href} className="hover:underline">
        {children}
      </a>
    </li>
  );
};
export default AsideList;
