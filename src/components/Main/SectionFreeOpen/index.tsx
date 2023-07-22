import IllustrationLaptopDesktop from "../../../assets/img/main/illustration-laptop-desktop.svg";
import IllustrationLaptopMobile from "../../../assets/img/main/illustration-laptop-mobile.svg";
import * as C from "./style";

const SectionFreeOpen = () => {
  return (
    <C.SectionFreeOpen>
      <figure className="FreeOpen__image">
        <img
          className="FreeOpen__imageMobile"
          src={IllustrationLaptopMobile}
          alt="illustration-laptop-mobile"
        />
        <img
          src={IllustrationLaptopDesktop}
          alt="illustration-laptop-desktop"
          className="FreeOpen__imageDesktop"
        />
      </figure>
      <div className="FreeOpen__description">
        <div className="FreeOpen__item">
          <h2>Free, open, simple</h2>
          <p>
            Blogr is a free and open source application backed by a large
            community of helpful developers. It supports features such as code
            syntax highlighting, RSS feeds, social media integration,
            third-party commenting tools, and works seamlessly with Google
            Analytics. The architecture is clean and is relatively easy to
            learn.
          </p>
        </div>
        <div className="FreeOpen__item">
          <h2>Powerful tooling</h2>
          <p>
            Batteries included. We built a simple and straightforward CLI tool
            that makes customization and deployment a breeze, but capable of
            producing even the most complicated sites.
          </p>
        </div>
      </div>
    </C.SectionFreeOpen>
  );
};

export default SectionFreeOpen;
