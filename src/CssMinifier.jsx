import React, { useState } from 'react';
import styled from 'styled-components';
import CleanCSS from 'clean-css';
import { FaCompress, FaClipboard } from 'react-icons/fa';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Prism from 'prismjs';
import 'prismjs/themes/prism.css';

const Container = styled.div`
  padding: 20px;
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  margin: 20px 0;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.02);
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 200px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 10px;
  font-family: 'Courier New', Courier, monospace;
  resize: none;
  font-size: 14px;

  &:focus {
    border-color: #4caf50;
    outline: none;
  }
`;

const Button = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 10px;
  font-size: 14px;
  transition: background-color 0.3s, transform 0.2s;

  &:hover {
    background-color: #45a049;
    transform: translateY(-2px);
  }
`;

const ResultArea = styled.pre`
  background: #282c34;
  color: #f8f8f2;
  padding: 10px;
  border-radius: 4px;
  overflow: auto;
  margin-top: 10px;
  font-family: 'Courier New', Courier, monospace;
  font-size: 14px;
`;

const LoadingIndicator = styled.div`
  display: ${props => (props.loading ? 'block' : 'none')};
  text-align: center;
  margin: 10px 0;
`;

const CopyButton = styled(CopyToClipboard)`
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;

  &:hover {
    background-color: #0056b3;
    transform: translateY(-2px);
  }
`;

const CssMinifier = () => {
  const [cssInput, setCssInput] = useState('');
  const [minifiedCss, setMinifiedCss] = useState('');
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleMinify = () => {
    setLoading(true);
    const output = new CleanCSS().minify(cssInput);
    setMinifiedCss(output.styles);
    setLoading(false);
    Prism.highlightAll();
  };

  return (
    <Container>
      <h2>CSS Minifier Tool</h2>
      <TextArea
        value={cssInput}
        onChange={(e) => setCssInput(e.target.value)}
        placeholder="Paste your CSS here..."
      />
      <Button onClick={handleMinify}>
        <FaCompress /> Minify CSS
      </Button>
      <LoadingIndicator loading ={loading}>
        <p>Loading...</p>
      </LoadingIndicator>
      <ResultArea>
        <code className="language-css">{minifiedCss}</code>
      </ResultArea>
      <CopyButton text={minifiedCss} onCopy={() => setCopied(true)}>
        <Button>
          <FaClipboard /> {copied ? 'Copied!' : 'Copy to Clipboard'}
        </Button>
      </CopyButton>
    </Container>
  );
};

export default CssMinifier;
