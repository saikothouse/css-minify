import React from 'react';
import { FaQuestionCircle } from 'react-icons/fa';

const FAQ = () => {
  return (
    <div className="section">
      <h2><FaQuestionCircle /> FAQ</h2>
      <h3>What is CSS minification?</h3>
      <p>
        CSS minification is the process of removing all unnecessary characters from the CSS code,
        such as whitespace, comments, and line breaks, without changing its functionality.
      </p>
      <h3>Why should I minify my CSS?</h3>
      <p>
        Minifying CSS reduces file size, which can lead to faster load times and improved performance
        for your website.
      </p>
      <h3>Is this tool free to use?</h3>
      <p>
        Yes, the CSS Minifier tool is completely free to use.
      </p>
    </div>
  );
};

export default FAQ;
