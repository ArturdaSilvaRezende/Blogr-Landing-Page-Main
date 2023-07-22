import styled from "styled-components";

export const SectionDesigned = styled.section`
  font-family: "Ubuntu", sans-serif;
  padding: 40px 0;
  position: relative;
  overflow: hidden;

  .designed__title,
  h2 {
    color: var(--Very-dark-desaturated-blue);
    font-weight: 500;
  }

  .designed__title {
    text-align: center;
    font-size: 2.2rem;
    position: relative;
    top: 90px;
    left: -20px;
  }

  .designed__container {
    display: flex;
    align-items: center;

    .designed__description {
      margin-left: 120px;

      .designed__description-item {
        & + .designed__description-item {
          margin-top: 90px;
        }
        h2 {
          font-size: 1.7rem;
          margin-bottom: 15px;
        }
        p {
          color: var(--Very-dark-grayish-blue);
          font-size: 17px;
          line-height: 1.5;
          width: 61%;
        }
      }
    }

    .designed__image {
      .image-desktop {
        display: block;
        position: relative;
        left: -310px;
        width: 270%;
      }
      .image-mobile {
        display: none;
      }
    }
  }

  @media screen and (min-width: 768px) and (max-width: 1024px) {
    .designed__title {
      top: 0;
      left: 0;
      margin: 40px 0;
    }
    .designed__container {
      flex-direction: column;
      margin: 0 auto;
      width: 90%;

      .designed__description {
        margin-left: 0;
        order: 2;
        text-align: center;

        .designed__description-item {
          p {
            width: 100%;
          }
        }
      }

      .designed__image {
        order: 1;
        margin-bottom: 40px;

        .image-desktop {
          left: 0;
          margin: 0 auto;
          width: 60%;
        }
      }
    }
  }

  @media screen and (max-width: 767px) {
    padding: 80px 0;
    text-align: center;

    .designed__title {
      font-size: 1.6rem;
      margin-bottom: 40px;
      top: 0;
      left: 0;
    }

    .designed__container {
      flex-direction: column;

      .designed__description {
        margin-left: 0;
        order: 2;
        width: 90%;

        .designed__description-item {
          & + .designed__description-item {
            margin-top: 40px;
          }

          h2 {
            font-size: 1.6rem;
            margin: 0 auto 20px auto;
            width: 80%;
          }

          p {
            line-height: 1.8;
            margin: 0 auto;
            width: 93%;
          }
        }
      }

      .designed__image {
        order: 1;
        margin-bottom: 50px;

        .image-desktop {
          display: none;
        }

        .image-mobile {
          display: block;
        }
      }
    }
  }
`;
