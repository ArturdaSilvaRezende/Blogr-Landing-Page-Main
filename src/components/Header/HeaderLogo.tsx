import { useCallback } from "react";
import Logo from "../../assets/img/header/logo.svg";
import IconHamburger from "../../assets/img/header/icon-hamburger.svg";
import IconClose from "../../assets/img/header/icon-close.svg";

import * as C from "./style";

interface handleMenu {
  setStateMenu: (props: boolean) => void;
  stateMenu: boolean;
}

const HeaderLogo = (props: handleMenu) => {
  const handleMenuToggle = useCallback(() => {
    props.setStateMenu(!props.stateMenu);
  }, [props]);

  return (
    <C.HeaderLogo>
      <a href="/">
        <img src={Logo} alt="Blogr-landing-page-logo" />
      </a>
      <button onClick={handleMenuToggle}>
        <img
          src={props.stateMenu ? IconClose : IconHamburger}
          alt="Icon Hamburger"
        />
      </button>
    </C.HeaderLogo>
  );
};

export default HeaderLogo;
