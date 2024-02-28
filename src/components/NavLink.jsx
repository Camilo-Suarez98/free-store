const NavLink = ({ href, value }) => {
  return (
    <li>
      <a
        href={href}
        className="flex items-center justify-center text-[#2a5fff] h-16 p-2 text-xl"
      >
        {value}
      </a>
    </li>
  );
};

export default NavLink;
