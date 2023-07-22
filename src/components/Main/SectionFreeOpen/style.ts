import styled from "styled-components";

export const SectionFreeOpen = styled.section`
  font-family: "Overpass", sans-serif;
  display: flex;
  align-items: center;
  padding: 120px 0;

  .FreeOpen__image {
    .FreeOpen__imageDesktop {
      position: relative;
      left: -225px;
    }
    .FreeOpen__imageMobile {
      display: none;
    }
  }

  .FreeOpen__description {
    width: 50%;
    position: relative;
    left: -120px;
    top: 3px;

    .FreeOpen__item {
      & + .FreeOpen__item {
        margin-top: 30px;
      }

      h2 {
        color: var(--Very-dark-desaturated-blue);
        font-size: 1.6rem;
        margin-bottom: 20px;
      }

      p {
        line-height: 1.5;
        width: 90%;
      }
    }
  }

  @media screen and (min-width: 768px) and (max-width: 992px) {
    flex-direction: column;
    padding: 80px 0;

    .FreeOpen__image {
      .FreeOpen__imageDesktop {
        position: static;
        margin: 0 auto 60px auto;
        width: 50%;
      }
    }

    .FreeOpen__description {
      position: static;
      text-align: center;
      width: 100%;

      .FreeOpen__item {
        p {
          margin: 0 auto;
          width: 80%;
        }
      }
    }
  }

  @media screen and (max-width: 767px) {
    flex-direction: column;
    text-align: center;
    padding: 0 0 50px 0;

    .FreeOpen__description {
      position: static;
      width: 100%;

      .FreeOpen__item {
        h2 {
          font-size: 1.5rem;
        }

        p {
          line-height: 1.7;
          margin: 0 auto;
          width: 87%;
        }
      }
    }

    .FreeOpen__image {
      margin: 50px 0;

      .FreeOpen__imageDesktop {
        display: none;
      }

      .FreeOpen__imageMobile {
        display: block;
      }
    }
  }
`;
