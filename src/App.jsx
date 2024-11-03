import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import CssMinifier from './CssMinifier';
import { FaInfoCircle, FaStar, FaCode, FaCheckCircle, FaQuestionCircle } from 'react-icons/fa';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Open Sans', sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f0f4f8;
  }
`;

const Container = styled.div`
  max-width: 800px;
  margin: 40px auto;
  padding: 20px;
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const Section = styled.section`
  margin: 20px 0;
  padding: 15px;
  background: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
`;

const SectionTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
  color: #333;
  display: flex;
  align-items: center;

  & > svg {
    margin-right: 10px;
    color: #4caf50;
  }
`;

const SectionContent = styled.p`
  font-size: 16px;
  line-height: 1.5;
  color: #555;
`;

const FeaturesList = styled.ul`
  list-style-type: none;
  padding: 0;

  & > li {
    display: flex;
    align-items: center;
    margin: 5px 0;

    & > svg {
      margin-right: 10px;
      color: #4caf50;
    }
  }
`;

const App = () => {
  return (
    <Container>
      <GlobalStyle />
      <Header>
        <h1>CSS Minifier Tool</h1>
        <div>
          <a href="https://github.com/your-username/css-minifier" target="_blank" rel="noopener noreferrer">
            <FaStar /> Star on GitHub
          </a>
          <a href="https://www.npmjs.com/package/css-minifier" target="_blank" rel="noopener noreferrer">
            <FaInfoCircle /> View on npm
          </a>
          <a href="https://github.com/your-username/css-minifier/issues" target="_blank" rel="noopener noreferrer">
            <FaCode /> Report an Issue
          </a>
        </div>
      </Header>
      <CssMinifier />
      
      <Section>
        <SectionTitle><FaInfoCircle /> About</SectionTitle>
        <SectionContent>
          The CSS Minifier Tool is designed to help web developers optimize their CSS code by reducing file size
          and improving load times. By removing unnecessary whitespace, comments, and formatting, this tool
          ensures that your stylesheets are as efficient as possible.
        </SectionContent>
      </Section>

      <Section>
        <SectionTitle><FaCheckCircle /> Features</SectionTitle>
        <SectionContent>
          <FeaturesList>
            <li><FaCheckCircle /> Easy to use interface for quick CSS minification.</li>
            <li><FaCheckCircle /> Real-time minification with instant results.</li>
            <li><FaCheckCircle /> Copy to clipboard functionality for convenience.</li>
            <li><FaCheckCircle /> Supports large CSS files with efficient processing.</li>
            <li><FaCheckCircle /> Lightweight and fast, ensuring minimal impact on performance.</li>
          </FeaturesList>
        </SectionContent>
      </Section>

      <Section>
        <SectionTitle><FaQuestionCircle /> FAQ</SectionTitle>
        <SectionContent>
          <strong>Q: What is CSS minification?</strong><br />
          A: CSS minification is the process of removing all unnecessary characters from CSS code without changing its functionality.
          This includes removing spaces, comments, and line breaks to reduce file size and improve loading speed.
        </SectionContent>
        <SectionContent>
          <strong>Q: Why should I minify my CSS?</strong><br />
          A: Minifying CSS helps improve website performance by reducing load times and bandwidth usage. It also helps 
          with SEO as faster loading times can lead to better search engine rankings.
        </SectionContent>
        <SectionContent>
          <strong>Q: Is this tool free to use?</strong><br />
          A: Yes, the CSS Minifier Tool is completely free to use. You can use it anytime without any restrictions.
        </SectionContent>
      </Section>
    </Container>
  );
};

export default App;
