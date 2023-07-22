import styled from "styled-components";
import BgPatternCircles from "../../../assets/img/main/bg-pattern-circles.svg";

export const SectionInfrastructure = styled.section`
  background-image: linear-gradient(
    to left,
    var(--Very-dark-desaturated-blue),
    var(--Very-dark-gray-blue)
  );
  border-radius: 0 100px 0 100px;
  font-family: "Overpass", sans-serif;
  height: 60vh;
  margin-top: 30px;
  position: relative;
  display: flex;

  .infrastructure__image {
    background: url(${BgPatternCircles}) no-repeat;
    background-size: auto 210%;
    background-position: -175px -360px;
    width: 50%;

    img {
      position: absolute;
      left: 60px;
      top: -60px;
      width: 39.5%;
    }
  }

  .infrastructure__description {
    position: relative;
    top: 120px;
    left: -90px;
    width: 50%;

    h1 {
      color: var(--White);
      font-size: 2.2rem;
      margin-bottom: 25px;
    }

    p {
      color: var(--Grayish-blue);
      line-height: 1.5;
      font-size: 17px;
      width: 80%;
    }
  }

  @media screen and (min-width: 768px) and (max-width: 992px) {
    height: 30vh;
    text-align: center;

    .infrastructure__image {
      background-size: auto 190%;
      background-position: center -300px;

      img {
        left: 20px;
        top: 3px;
        width: 40%;
      }
    }

    .infrastructure__description {
      left: 0;
      top: 30px;
      width: 70%;

      p {
        margin: 0 auto;
        width: 80%;
      }
    }
  }

  @media screen and (max-width: 767px) {
    background-image: linear-gradient(
      to top,
      var(--Very-dark-desaturated-blue),
      var(--Very-dark-gray-blue)
    );
    border-radius: 0 110px 0 110px;
    height: auto;
    flex-direction: column;
    margin-top: 190px;
    padding-bottom: 100px;

    .infrastructure__image,
    .infrastructure__description {
      width: 100%;
    }

    .infrastructure__image {
      background-size: auto 139%;
      background-position: center -270px;
      border-radius: 0 110px 0 110px;
      height: 440px;
      width: 100%;

      img {
        position: relative;
        top: -220px;
        left: -2px;
        width: 100%;
      }
    }

    .infrastructure__description {
      margin-top: -240px;
      text-align: center;
      position: static;

      h1 {
        font-weight: 400;
        font-size: 2.2rem;
      }

      p {
        line-height: 1.7;
        margin: 0 auto;
        width: 80%;
      }
    }
  }
`;
