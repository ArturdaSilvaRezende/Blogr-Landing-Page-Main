import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-size: 100%;
    margin: 0;
    padding: 0;
  }

  body {
    font-size: 16px;
  }

  a {
    text-decoration: none;
  }

  button {
    border: none;
    background-color: transparent;
    cursor: pointer;
    font-weight: 700;
  }

  li {
    list-style: none;
  }

  img {
    display: block;
    width: 100%;
  }

  /* font-family: 'Overpass', sans-serif;
  font-family: 'Ubuntu', sans-serif; */

  :root {
    //Primary
    --Light-red-text: hsl(356, 100%, 66%); // (CTA text)
    --Very-light-red: hsl(355, 100%, 74%); // (CTA hover background)
    --Very-dark-blue: hsl(208, 49%, 24%); // (headings)

    //Neutral
    --White: hsl(0, 0%, 100%); // (text)
    --Grayish-blue : hsl(240, 2%, 79%); // (footer text)
    --Very-dark-grayish-blue: hsl(207, 13%, 34%); // (body copy)
    --Very-dark-black-blue: hsl(240, 10%, 16%); // (footer background)

    //dropdown-background
    --gray-bg: #EFEFF1;

    //Text-buttons
    --light-red-buttons: #fe7c86;

    //Gradient

    //Background gradient - Intro/CTA mobile nav:
    --Very-light-red: hsl(13, 100%, 72%);
    --Light-red: hsl(353, 100%, 62%);

    //Background gradient - body:
    --Very-dark-gray-blue: hsl(237, 17%, 21%);
    --Very-dark-desaturated-blue: hsl(237, 23%, 32%);
  }
`;

export default GlobalStyle;
