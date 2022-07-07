// third party packages
import styled from 'styled-components';

// enum
import { colors } from "../../lib/enums";


// Text
export const H1 = styled.h1`
  color: ${props => props.color || colors.PRIMARY_TEXT_LIGHT};
  font-size: ${props => props.fontSize || "2em"}
`;

export const H2 = styled.h2`
  color: ${props => props.color || colors.PRIMARY_TEXT_LIGHT};
`;

export const Text16 = styled.p`
  font-size: 1em;
  color: ${props => props.color || colors.PRIMARY_TEXT_LIGHT};
  font-weight: ${props => props.fontWeight || 400};
`;

export const Text18 = styled.p`
  font-size: 18px;
  color: ${props => props.color || colors.PRIMARY_TEXT_LIGHT};
  font-weight: ${props => props.fontWeight || 400};
`