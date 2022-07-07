import styled from "styled-components";

import { colors } from "../../lib/enums";

export const Input = styled.input`
  width: 100%;
  height: 40px;
  padding: 10px;
  margin: 5px 0px;
  border-radius: 5px;
  border: 1px solid ${(props) => props.color || colors.PRIMARY_TEXT_LIGHT}55;
  box-shadow: 0px 1px 5px ${(props) => props.color || colors.SECONDARY_TEXT_LIGHT}22;

  &:focus{
    outline: none;
    border: 1px solid ${(props) => props.color || colors.SECONDARY_TEXT_LIGHT}cc;
  }
`;