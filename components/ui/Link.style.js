// import Link from "next/link";

// third party packages
import styled from 'styled-components';

// enum
import { colors } from "../../lib/enums";

// Link
export const NavLink = styled.a`
  font-size: 20px;
  color: ${props => props.color || colors.PRIMARY_TEXT_LIGHT}c4;
  text-decoration: none;
  padding: 8px 12px;
  cursor: pointer;

  &:hover{
    color: ${props => props.color || colors.PRIMARY_TEXT_LIGHT};
  }
`;