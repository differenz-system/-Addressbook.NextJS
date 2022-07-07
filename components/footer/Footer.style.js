// third party packages
import styled from "styled-components";

// enums
import { colors } from "../../lib/enums";

export const FooterSection = styled.footer`
  max-width: 100%;
  border-top: 1px solid ${props => props.color || colors.PRIMARY_TEXT_LIGHT}26;
  box-shadow: 0px -2px 5px ${props => props.color || colors.PRIMARY_TEXT_LIGHT}15;
`;

export const FooterContainer = styled.div`
  padding: 20px 0px;
  max-width: 1280px;
  display: flex;
  justify-content: space-between;
`;