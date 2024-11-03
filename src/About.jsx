import React from 'react';
import { FaInfoCircle } from 'react-icons/fa';

const About = () => {
  return (
    <div className="section">
      <h2><FaInfoCircle /> About</h2>
      <p>
        The CSS Minifier is a simple and efficient tool that allows you to minimize your CSS code.
        By removing unnecessary whitespace, comments, and other non-essential characters, 
        you can significantly reduce the size of your CSS files, improving load times and performance.
      </p>
    </div>
  );
};

export default About;
