import { Link } from "react-router-dom";

const NavLink = ({ href, value }) => {
  return (
    <li>
      <Link
        to={href}
        className="flex items-center justify-center text-[#53bf23] h-16 p-2 text-xl transition duration-1000 hover:text-[#abfa88]"
      >
        {value}
      </Link>
    </li>
  );
};

export default NavLink;
