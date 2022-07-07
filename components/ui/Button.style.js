import styled from "styled-components";
import { colors } from "../../lib/enums";

export const Button = styled.button`
  height: 40px;
  background: ${(props) => props.bgColor || colors.SECONDARY_TEXT_LIGHT};
  color: ${(props) => props.color || colors.PRIMARY_TEXT_DARK};
  border: none;
  width: 100%;
  border-radius: 5px;
  margin: 10px 0px;
  cursor: pointer;
  font-size: 16px;

  &:hover{
    background: ${(props) => props.bgColor || colors.SECONDARY_TEXT_LIGHT}f5;
  }

  &:disabled{
    background: ${(props) => props.bgColor || colors.SECONDARY_TEXT_LIGHT}dd;
  }
`; 