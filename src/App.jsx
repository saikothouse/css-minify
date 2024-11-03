import React from 'react';
import styled from 'styled-components';
import CssMinifier from './CssMinifier';
import { FaInfoCircle, FaStar, FaQuestionCircle, FaHome } from 'react-icons/fa';

const Header = styled.header`
  background: #282c34;
  padding: 20px;
  color: white;
  text-align: center;
`;

const Section = styled.section`
  padding: 20px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Footer = styled.footer`
  background: #282c34;
  color: white;
  text-align: center;
  padding: 10px;
  position: relative;
  bottom: 0;
  width: 100%;
`;

const App = () => {
  return (
    <div>
      <Header>
        <h1>CSS Minifier Tool</h1>
      </Header>
      <Section>
        <h2><FaInfoCircle /> About</h2>
        <p>This tool allows you to minify your CSS code easily. Just paste your CSS in the input area and click the button to get the minified version.</p>
      </Section>
      <Section>
        <h2><FaStar /> Features</h2>
        <ul>
          <li>Easy to use interface</li>
          <li>Instant CSS minification</li>
          <li>Copy minified CSS to clipboard</li>
        </ul>
      </Section>
      <Section>
        <h2><FaQuestionCircle /> FAQ</h2>
        <p><strong>Q:</strong> What is CSS minification?</p>
        <p><strong>A:</strong> It is the process of removing all unnecessary characters from the CSS code to reduce its size.</p>
      </Section>
      <CssMinifier />
      <Footer>
        <p>&copy; 2023 CSS Minifier Tool</p>
      </Footer>
    </div>
  );
};

export default App;
