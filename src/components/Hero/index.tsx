import * as C from "./style";

const Hero = () => {
  return (
    <C.Hero>
      <C.HeroContents>
        <div className="heroContents__descriptions">
          <h1>A modern publishing platform</h1>
          <p> Grow your audience and build your online brand</p>
        </div>

        <div className="heroContents__butons">
          <button>Start for Free</button>
          <button>Learn More</button>
        </div>
      </C.HeroContents>
    </C.Hero>
  );
};

export default Hero;
