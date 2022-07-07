// third party packages
import styled from 'styled-components';

// enums
import { colors } from "../../lib/enums";

export const Navbar = styled.div`
  padding: 8px;
  border-bottom: 1px solid ${props => props.color || colors.PRIMARY_TEXT_LIGHT}26;
  box-shadow: 0px 2px 5px ${props => props.color || colors.PRIMARY_TEXT_LIGHT}15;
  background: ${props => props.bgColor || colors.PRIMARY_BG_LIGHT};
  position: fixed;
  top: 0;
  z-index: 30;
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 4rem;

  nav{
    display: flex;
    justify-content: space-between;
    height: 50px;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  cursor: pointer;

  .logo-text-container{
    margin-left: 5px;
  }
`;

export const LogoText = styled.div`
  font-size: 22px;
  font-weight: 600;
  line-height: 1.1em;
  letter-spacing: 0.075em;
  color: ${props => props.color}
`;

export const LogoSubText = styled.div`
  opacity: 0.8;
  line-height: 20px;
  font-size: 15px;
  letter-spacing: 0.1em;
  color: ${props => props.color}
`;

export const NavLinkContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 0.5rem;
  gap: 0.5rem;
  margin: 0px 15px;
`;