import { useState } from "react";
import Container from "../Container";

import Loved from "../../assets/icons/Loved.png";
import Compare from "../../assets/icons/Compare.png";
import Object from "../../assets/images/1200px-NASA_TV.png";

const NavBar = () => {
  const [show, setShow] = useState(false);

  const menus = [
    { menu: "Home Page", link: "" },
    { menu: "About Us", link: "" },
    { menu: "About NASA", link: "" },
    { menu: "Search Images", link: "" },
    { menu: "Contact Us", link: "" },
  ];

  return (
    <Container className="flex items-center flex-wrap w-full justify-between relative">
      <div className="flex items-center py-[40px]">
        <div className="mr-4">
          <img src={Object} className="w-[135px]" />
        </div>
        <div
          className={`block absolute lg:relative w-full top-[100%] left-0 shadow-lg lg:py-0 lg:shadow-none items-center bg-blue z-[999] lg:flex menus lg:max-h-full overflow-hidden lg:overflow-visible duration-300 ${
            show ? "max-h-[240px]" : "max-h-0"
          }`}
        >
          {menus.map((menu, index) => (
            <div className="text-white px-4 py-2 lg:py-0" key = {index}>{menu.menu}</div>
          ))}
        </div>
      </div>

      <div className="flex items-center py-[40px]">
        <div className="mr-4">
        <img src={Compare} />
        </div>
        <div className="mr-4">
          <img src={Loved} />
        </div>
        <div className="lg:hidden flex" onClick={() => setShow(!show)}>
          <div className="menu-icon">
            <span className="navicon"></span>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default NavBar;
