import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { FaCopy } from 'react-icons/fa';
import CleanCSS from 'clean-css';
import styled from 'styled-components';
import Prism from 'prismjs';
import 'prismjs/themes/prism.css';
import About from './About';
import Features from './Features';
import FAQ from './FAQ';

const Container = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: auto;
  border: 1px solid #ced4da;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  background-color: white;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 150px;
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ced4da;
  border-radius: 4px;
  font-family: monospace;
  font-size: 1rem;
  transition: border-color 0.3s;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
 `;

const Button = styled.button`
  padding: 10px 15px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

const CssMinifier = () => {
  const [cssInput, setCssInput] = useState('');
  const [minifiedCss, setMinifiedCss] = useState('');

  const handleMinify = () => {
    const cleanCSS = new CleanCSS();
    const minified = cleanCSS.minify(cssInput).styles;
    setMinifiedCss(minified);
  };

  return (
    <Container>
      <h1>CSS Minifier</h1>
      <About />
      <Features />
      <FAQ />
      <TextArea
        placeholder="Paste your CSS here..."
        value={cssInput}
        onChange={(e) => setCssInput(e.target.value)}
      />
      <Button onClick={handleMinify}>Minify CSS</Button>
      <h2>Minified CSS</h2>
      <CopyToClipboard text={minifiedCss}>
        <Button>
          <FaCopy /> Copy
        </Button>
      </CopyToClipboard>
      <pre>
        <code className="language-css">{minifiedCss}</code>
      </pre>
    </Container>
  );
};

export default CssMinifier;
