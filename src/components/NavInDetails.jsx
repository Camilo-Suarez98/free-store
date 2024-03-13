import { Link } from "react-router-dom";

const NavInDetails = ({ to, children }) => {
  return (
    <Link
      to={to}
      className='border-2 border-[#3c6a28] text-[#53bf23] cursor-pointer p-4 rounded-lg transition duration-1000 hover:bg-[#a6ff81] hover:text-white hover:text-bold'
    >
      {children}
    </Link>
  );
};

export default NavInDetails;
