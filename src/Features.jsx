import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const Features = () => {
  return (
    <div className="section">
      <h2><FaCheckCircle /> Features</h2>
      <ul>
        <li>✔️ Easy to use interface for pasting and minifying CSS.</li>
        <li>✔️ One-click copy functionality for the minified output.</li>
        <li>✔️ Responsive design for mobile and desktop use.</li>
        <li>✔️ Syntax highlighting for better readability.</li>
      </ul>
    </div>
  );
};

export default Features;
