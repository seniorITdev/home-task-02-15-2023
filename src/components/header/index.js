import NavBar from "./Navbar";
import Title from "./Title";
import Search from "./Search";
import Container from "../Container";

import Background from "../../assets/images/background.png";

const Header = () => {
  return (
    <div className="h-[485px]">
      <div
        style={{ backgroundImage: `url(${Background})` }}
        className="h-full bg-[length:100%_100%]"
      >
        <div className="relative h-full">
          <NavBar />
          <div className="absolute md:bottom-[15%] bottom-[10%] w-full">
            <Container>
              <Title />
              <Search />
            </Container>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header