import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: #282c34;
  padding: 20px;
  color: white;
  text-align: center;
  position: relative;
  bottom: 0;
  width: 100%;
`;

const FooterLink = styled.a`
  color: #61dafb;
  text-decoration: none;
  margin: 0 10px;

  &:hover {
    text-decoration: underline;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>&copy; 2023 CSS Minifier Tool. All rights reserved.</p>
      <FooterLink href="#about">About</FooterLink>
      <FooterLink href="#features">Features</FooterLink>
    </FooterContainer>
  );
};

export default Footer;
