import styled from "styled-components";

export const Header = styled.header`
  position: absolute;
  left: 0;
  right: 0;
  top: 50px;
  z-index: 99;

  .header__container {
    display: flex;
  }

  @media screen and (min-width: 768px) and (max-width: 992px) {
    top: 75px;
  }

  @media screen and (max-width: 767px) {
    top: 75px;

    .header__container {
      flex-direction: column;
    }
  }
`;

export const HeaderLogo = styled.div`
  display: flex;
  justify-content: space-between;

  button {
    display: none;
  }

  @media screen and (max-width: 767px) {
    button {
      display: block;
    }
  }
`;

export const HeaderMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  .headerMenu__nav {
    margin-left: 80px;

    .headerMenu__ul {
      display: flex;

      .headerMenu__li {
        cursor: pointer;
        font-size: 20px;
        font-family: "Overpass", sans-serif;
        font-weight: 700;
        position: relative;
        top: 5px;

        & + .headerMenu__li {
          margin-left: 20px;
        }

        .headerMenu__liTitle {
          color: var(--White);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0.8;

          span {
            &:last-child {
              font-size: 1.4rem;
              margin-left: 5px;

              svg {
                position: relative;
                top: 2px;
              }
            }
          }
        }

        .headerMenu__dropdown {
          background-color: var(--White);
          border-radius: 10px;
          padding: 20px 40px 20px 20px;
          box-shadow: 0px 10px 50px -10px var(--Very-dark-black-blue),
            5px 5px 15px 5px rgba(0, 0, 0, 0);
          margin-top: 20px;
          display: flex;
          flex-direction: column;
          position: absolute;

          li + li {
            margin-top: 15px;
          }

          li {
            color: var(--Very-dark-blue);
            font-size: 18px;
            opacity: 0.8;

            &:hover {
              color: #000;
              font-weight: bolder;
            }
          }
        }
      }
    }
  }

  .headerMenu__login {
    button {
      font-weight: 700;
      font-size: 18px;
      transition: 0.3s ease-in;

      &:first-child {
        color: var(--White);
        opacity: 0.8;
        margin-right: 20px;
      }

      &:last-child {
        background-color: var(--White);
        border-radius: 30px;
        color: var(--light-red-buttons);
        padding: 10px;
        margin: 0 auto;
        width: 120px;

        &:hover {
          background-color: var(--light-red-buttons);
          color: var(--White);
        }
      }
    }
  }

  @media screen and (min-width: 768px) and (max-width: 992px) {
    .headerMenu__nav {
      margin-left: 30px;

      .headerMenu__ul {
        .headerMenu__li {
          top: 1px;
        }
      }
    }
  }

  @media screen and (max-width: 767px) {
    background-color: var(--White);
    box-shadow: 0px 10px 50px -10px var(--Very-dark-black-blue),
      5px 5px 15px 5px rgba(0, 0, 0, 0);
    border-radius: 10px;
    flex-direction: column;
    padding: 30px 20px;
    text-align: center;
    position: relative;
    top: 40px;

    .headerMenu__nav {
      margin-left: 0;
      width: 100%;

      .headerMenu__ul {
        margin-bottom: 20px;
        flex-direction: column;

        .headerMenu__li {
          & + .headerMenu__li {
            margin: 20px 0 0 0;
          }

          .headerMenu__liTitle {
            color: var(--Very-dark-blue);

            span {
              &:last-child {
                color: var(--Light-red-text);

                svg {
                  position: relative;
                  top: 2px;
                }
              }
            }
          }

          .headerMenu__dropdown {
            background-color: var(--gray-bg);
            box-shadow: none;
            margin: 20px 0;
            padding: 20px;
            position: relative;

            li + li {
              margin-top: 15px;
            }

            li {
              opacity: 0.9;
            }
          }
        }
      }
    }

    .headerMenu__login {
      border-top: 1px solid var(--Grayish-blue);
      padding-top: 30px;
      display: flex;
      flex-direction: column;

      button {
        &:first-child {
          color: var(--Very-dark-blue);
          margin-bottom: 15px;
        }

        &:last-child {
          background-image: linear-gradient(
            to right,
            var(--Very-light-red),
            var(--Light-red)
          );
          border-radius: 30px;
          color: var(--White);
          padding: 15px;
          margin: 0 auto;
          width: 140px;
        }
      }
    }
  }
`;
