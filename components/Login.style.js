import styled from "styled-components";
import { colors } from "../lib/enums";

export const LoginSection = styled.div`
  padding: 50px;
  display: flex;
  justify-content: center;
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 40%;
`

export const Field = styled.div`
  margin: 5px 0px;

  &.right-20{
    width: 20%;
  }
`;

export const Card = styled.div`
  margin-top: 15px;
  border-radius: 5px;
  padding: 5px 20px; 
  box-shadow: 0px 1px 5px ${(props) => props.color || colors.SECONDARY_TEXT_LIGHT}88;
`;