import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.section`
  padding: 20px;
  background: #f7f7f7;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const AboutImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 8px;
`;

const About = () => {
  return (
    <AboutContainer id="about">
      <h2>About This Tool</h2>
      <AboutImage src="https://via.placeholder.com/600x300" alt="About CSS Minifier" />
      <p>This tool helps you minify and compress your CSS code for better performance and faster load times.</p>
    </AboutContainer>
  );
};

export default About;
