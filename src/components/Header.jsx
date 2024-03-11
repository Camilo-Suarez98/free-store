import { useState } from "react";
import NavLink from "./NavLink";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  }

  const navLinks = [
    { href: '/', value: 'Home' },
    { href: "/characters", value: "Characters" },
    { href: "/episodes", value: "Episodes" },
    { href: "/locations", value: "Locations" }
  ]

  return (
    <div className="w-full flex justify-between items-center pt-4 px-4 sm:px-12 lg:px-4">
      <section className="w-24">
        <a href="/">
          <img src="../../logo.png" alt="logo" />
        </a>
      </section>
      <section className="sm:hidden">
        <input type="checkbox" id="checkbox" onClick={handleShowMenu} />
        <label htmlFor="checkbox" className="toggle">
          <div className="bar bar--top"></div>
          <div className="bar bar--middle"></div>
          <div className="bar bar--bottom"></div>
        </label>

        {showMenu &&
          <section
            className='bg-[#292929] absolute top-28 left-0 right-0 h-screen z-50 sm:hidden'
          >
            <ul className="flex flex-col justify-around mt-5">
              {navLinks.map(({ href, value }) => (
                <NavLink
                  key={Math.random()}
                  href={href}
                  value={value}
                />
              ))}
            </ul>
          </section>
        }
      </section>

      {/* Desktop view */}

      <section className="hidden sm:block sm:w-96">
        <ul className="flex justify-around">
          {navLinks.map(({ href, value }) => (
            <NavLink
              key={Math.random()}
              href={href}
              value={value}
            />
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Header;
