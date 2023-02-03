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

  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-image: url("https://rare-gallery.com/mocahbig/450675-black-dark-texture.jpg");
  background-size: cover;
  color: white;
  font-family: "Montserrat";

  .fullcontainer {
    margin: auto;
    width: 60vw;
  }
`;
