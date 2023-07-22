import styled from "styled-components";
import BgHeroDesktop from "../../assets/img/Hero/bg-pattern-intro-desktop.svg";
import BgHeroMobile from "../../assets/img/Hero/bg-pattern-intro-mobile.svg";

export const Hero = styled.section`
  border-radius: 0 0 0 180px;
  position: relative;
  background-image: linear-gradient(
    120deg,
    var(--Very-light-red),
    var(--Light-red)
  );

  @media screen and (max-width: 767px) {
    border-radius: 0 0 0 140px;
  }
`;

export const HeroContents = styled.div`
  background: url(${BgHeroDesktop}) no-repeat;
  background-size: auto 480%;
  background-position: 24% 53%;
  font-family: "Overpass", sans-serif;
  height: 90vh;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .heroContents__descriptions {
    h1 {
      color: var(--White);
      font-size: 3rem;
      margin-top: 50px;
    }

    p {
      color: var(--White);
      font-size: 17px;
      opacity: 0.8;
      margin: 15px 0 40px 0;
    }
  }

  .heroContents__butons {
    button {
      border-radius: 30px;
      padding: 15px;
      transition: 0.3s ease-in;
      width: 140px;

      &:first-child {
        background-color: var(--White);
        color: var(--light-red-buttons);
        margin-right: 15px;

        &:hover {
          background-color: var(--light-red-buttons);
          color: var(--White);
        }
      }

      &:last-child {
        border: 1px solid var(--White);
        color: var(--White);

        &:hover {
          background-color: var(--White);
          color: var(--light-red-buttons);
        }
      }
    }
  }

  @media screen and (min-width: 768px) and (max-width: 992px) {
    background-size: auto 215%;
    background-position: 30% 55%;
    height: 60vh;
  }

  @media screen and (max-width: 767px) {
    background: url(${BgHeroMobile}) no-repeat;
    background-size: auto 213%;
    background-position: 36% 33%;
    border-radius: 0 0 0 140px;

    .heroContents__descriptions {
      h1 {
        font-size: 1.9rem;
        margin: -20px auto 30px auto;
        width: 76%;
      }
      p {
        font-size: 1rem;
        margin: 0 auto;
        width: 75%;
      }
    }

    .heroContents__butons {
      position: relative;
      top: 70px;
    }
  }
`;
