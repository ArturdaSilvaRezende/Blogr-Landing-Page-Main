import styled from "styled-components";

export const Footer = styled.footer`
  background-color: var(--Very-dark-black-blue);
  border-radius: 0 110px 0 0;
  padding: 60px 0;

  .footer__container {
    display: flex;
    justify-content: space-between;

    .footer__logo {
      img {
        margin: 0 auto;
        width: 120px;
      }
    }

    .footer__item {
      color: var(--White);
      font-family: "Ubuntu", sans-serif;

      h2,
      li {
        font-size: 20px;
      }

      h2 {
        margin-bottom: 60px;
      }

      ul {
        li {
          cursor: pointer;
          margin-top: 15px;
          opacity: 0.9;

          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }

  .attribution {
    margin-top: 60px;
    font-size: 20px;
    text-align: center;

    a {
      color: var(--Light-red-text);
      transition: 0.3s ease;

      &:hover {
        color: var(--Very-light-red);
      }
    }

    span {
      color: var(--White);
    }
  }

  @media screen and (max-width: 767px) {
    text-align: center;
    margin-top: 60px;
    padding: 80px 0;

    .footer__container {
      flex-direction: column;

      .footer__logo {
        margin-bottom: 60px;
      }

      .footer__item {
        & + .footer__item {
          margin-top: 40px;
        }

        h2 {
          margin-bottom: 40px;
        }
      }
    }
  }
`;
