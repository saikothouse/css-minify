import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background: #282c34;
  padding: 20px;
  color: white;
  text-align: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
`;

const Logo = styled.h1`
  font-size: 2.5rem;
  margin: 0;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo>CSS Minifier & Compressor</Logo>
    </HeaderContainer>
  );
};

export default Header;
