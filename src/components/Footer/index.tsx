import { Container } from "../../assets/style/Container";
import Logo from "../../assets/img/header/logo.svg";
import * as C from "./style";

const Footer = () => {
  return (
    <C.Footer>
      <Container className="footer__container">
        <a href="/" className="footer__logo">
          <img src={Logo} alt="Logo" />
        </a>
        <div className="footer__item">
          <h2>Product</h2>
          <ul>
            <li>Overview</li>
            <li>Pricing</li>
            <li>Marketplace</li>
            <li>Features</li>
            <li>Integrations</li>
          </ul>
        </div>
        <div className="footer__item">
          <h2>Company</h2>
          <ul>
            <li>About</li>
            <li>Team</li>
            <li>Blog</li>
            <li>Careers</li>
          </ul>
        </div>
        <div className="footer__item">
          <h2>Connect</h2>
          <ul>
            <li>Contact</li>
            <li>Newsletter</li>
            <li>LinkedIn</li>
          </ul>
        </div>
      </Container>
      <div className="attribution">
        <div>
          <span>Challenge by </span>
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
        </div>
        <div>
          <span>Coded by </span>
          <a
            href="https://www.frontendmentor.io/profile/ArturdaSilvaRezende"
            target="_blank"
          >
            Artur da Silva Rezende
          </a>
        </div>
      </div>
    </C.Footer>
  );
};

export default Footer;
