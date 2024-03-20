import { useState } from "react";

const Nav = () => {
  const open = "./images/icon-hamburger.svg";
  const close = "./images/icon-close.svg";
  const [isopen, setIsOpen] = useState(false);
  return (
    <nav className="flex items-center justify-between md:mx-auto">
      <span className="z-20">
        <img className="w-[150px] h-[25px]" src="./images/logo.svg" alt="logo" />
      </span>
      <div className="z-20 block md:hidden">
        <img
          onClick={() => setIsOpen(!isopen)}
          src={isopen ? close : open}
          alt="hamburger"
        />
      </div>
      <ul
        className={`${isopen ? "translate-y-0" : "-translate-y-full md:translate-y-0"}`}
      >
        <li className="my-5 w-fit">About</li>
        <li className="my-5 w-fit">Careers</li>
        <li className="my-5 w-fit">Events</li>
        <li className="my-5 w-fit">Products</li>
        <li className="my-5 w-fit">Support</li>
      </ul>
    </nav>
  );
};

export default Nav;
