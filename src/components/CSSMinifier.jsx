import React, { useState } from 'react';
import CleanCSS from 'clean-css';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import styled from 'styled-components';
import Prism from 'prismjs';
import 'prismjs/themes/prism.css'; // Import Prism CSS

const MinifierContainer = styled.section`
  padding: 20px;
  background: #f7f7f7;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  margin: 20px 0;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 200px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
  resize: none;
`;

const MinifiedOutput = styled.pre`
  background: #f5f5f5;
  padding: 10px;
  border-radius: 4px;
  overflow: auto;
  margin-top: 10px;
`;

const Button = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 10px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #45a049;
  }
`;

const Message = styled.div`
  margin-top: 10px;
  color: #4caf50;
`;

const CSSMinifier = () => {
  const [cssInput, setCssInput] = useState('');
  const [minifiedCss, setMinifiedCss] = useState('');
  const [copySuccess, setCopySuccess] = useState('');
  const [loading, setLoading] = useState(false);

  const minifyCSS = () => {
    setLoading(true);
    const output = new CleanCSS().minify(cssInput);
    setMinifiedCss(output.styles);
    setLoading(false);
  };

  const handleCopy = () => {
    setCopySuccess('CSS copied to clipboard!');
    setTimeout(() => {
      setCopySuccess('');
    }, 2000);
  };

  // Use useEffect to highlight the code whenever minifiedCss changes
  React.useEffect(() => {
    if (minifiedCss) {
      Prism.highlightAll();
    }
  }, [minifiedCss]);

  return (
    <MinifierContainer>
      <h2>CSS Minifier</h2>
      <TextArea
        placeholder="Paste your CSS code here"
        value={cssInput}
        onChange={(e) => setCssInput(e.target.value)}
      />
      <Button onClick={minifyCSS} disabled={loading}>
        {loading ? 'Minifying...' : 'Minify CSS'}
      </Button>
      <h3>Minified CSS:</h3>
      <MinifiedOutput>
        <code className="language-css">{minifiedCss}</code>
      </MinifiedOutput>
      <CopyToClipboard text={minifiedCss} onCopy={handleCopy}>
        <Button disabled={!minifiedCss}>Copy to Clipboard</Button>
      </CopyToClipboard>
      {copySuccess && <Message>{copySuccess}</Message>}
    </MinifierContainer>
  );
};

export default CSSMinifier;
