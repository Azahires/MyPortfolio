import styled from "styled-components";
import Montserrat from "@assets/font/Montserrat/Montserrat-VariableFont_wght.ttf";
import MontserratBold from "@assets/font/Montserrat/Montserrat-Italic-VariableFont_wght.ttf";

export default styled.div`
  @font-face {
    font-family: Montserrat;
    src: url(${Montserrat});
  }

  @font-face {
    font-family: MontserratBold;
    src: url(${MontserratBold});
  }

  .navbar {
    margin-top: 3rem;
    font-family: "Montserrat";
    border-top: 1px solid white;
    border-bottom: 1px solid white;
  }

  li {
    margin: 1.5rem;
    font-size: 4rem;
    color: white;
  }

  a {
    text-decoration: none;
  }

  p {
    margin-right: 13rem;
  }

  ul {
    display: flex;
  }

  .family-name {
    font-size: 5rem;
  }
  .name {
    font-size: 2rem;
    margin-left: 0.3rem;
  }
`;
