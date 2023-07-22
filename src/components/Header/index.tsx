import { useState, useEffect } from "react";
import HeaderLogo from "./HeaderLogo";
import HeaderMenu from "./HeaderMenu";
import { Container } from "../../assets/style/Container";
import * as C from "./style";

const Header = () => {
  const [stateMenu, setStateMenu] = useState(false);

  const handleResize = () => {
    setStateMenu(window.innerWidth > 767);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <C.Header>
      <Container className="header__container">
        <HeaderLogo stateMenu={stateMenu} setStateMenu={setStateMenu} />
        {stateMenu && <HeaderMenu />}
      </Container>
    </C.Header>
  );
};

export default Header;
