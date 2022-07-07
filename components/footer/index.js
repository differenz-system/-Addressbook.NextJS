//third party packages
import React from 'react';

// styled component
import { FooterSection, FooterContainer } from "./Footer.style";
import {
  Text16
} from "../ui";

const Footer = () => {
  return (
    <FooterSection>
      <FooterContainer className="mx-auto">
        <Text16>
          © {new Date().getFullYear()} Address book, All rights reserved.
        </Text16>
      </FooterContainer>
    </FooterSection>
  )
}

export default Footer