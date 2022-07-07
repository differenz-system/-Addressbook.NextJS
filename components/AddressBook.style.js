import styled from "styled-components";

export const ContactForm = styled.form`
  width: 100%;
`;

export const Grid = styled.div`
  display: grid;
  grid-gap: 25px;
  grid-template-columns: 49% 49%;

  @media(max-width: 1200px){
    grid-gap: 45px;
    grid-template-columns: 48% 48%;
  }

  @media(max-width: 992px){
    grid-gap: 32px;
    grid-template-columns: 48% 48%;
  }

  @media(max-width: 767px){
    grid-gap: 0px;
    grid-template-columns: 100%;
  }
`;

export const GridItem = styled.div`
  ${'' /* background-color: yellow;  */}
`;