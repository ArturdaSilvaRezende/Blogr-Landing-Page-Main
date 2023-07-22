import IllustrationPhones from "../../../assets/img/main/illustration-phones.svg";
import * as C from "./style";

const SectionInfrastructure = () => {
  return (
    <C.SectionInfrastructure>
      <figure className="infrastructure__image">
        <img src={IllustrationPhones} alt="illustration-phones" />
      </figure>
      <div className="infrastructure__description">
        <h1>State of the Art Infrastructure</h1>
        <p>
          With reliability and speed in mind, worldwide data centers provide the
          backbone for ultra-fast connectivity. This ensures your site will load
          instantly, no matter where your readers are, keeping your site
          competitive.
        </p>
      </div>
    </C.SectionInfrastructure>
  );
};

export default SectionInfrastructure;
