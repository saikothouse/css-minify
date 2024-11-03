import React, { useState } from 'react';
import styled from 'styled-components';
import CleanCSS from 'clean-css';
import { FaCompress } from 'react-icons/fa';

const Container = styled.div`
  padding: 20px;
  @media (max-width: 600px) {
    padding: 10px;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 200px;
  margin-bottom: 10px;
`;

const Button = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #45a049;
  }
`;

const ResultArea = styled.textarea`
  width: 100%;
  height: 200px;
  margin-top: 10px;
`;

const LoadingIndicator = styled.div`
  display: ${props => (props.loading ? 'block' : 'none')};
  text-align: center;
  margin: 10px 0;
`;

const CssMinifier = () => {
  const [cssInput, setCssInput] = useState('');
  const [minifiedCss, setMinifiedCss] = useState('');
  const [loading, setLoading] = useState(false);

  const handleMinify = () => {
    setLoading(true);
    const output = new CleanCSS().minify(cssInput);
    setMinifiedCss(output.styles);
    setLoading(false);
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
      <LoadingIndicator loading={loading}>
        <p>Loading...</p>
      </LoadingIndicator>
      <ResultArea value={minifiedCss} readOnly placeholder="Minified CSS will appear here..." />
    </Container>
  );
};

export default CssMinifier;
