import React from 'react';
import styled from 'styled-components';
import { FaCheckCircle } from 'react-icons/fa';

const FeaturesContainer = styled.section`
  padding: 20px;
  background: #f7f7f7;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const FeatureItem = styled.li`
  display: flex;
  align-items: center;
  margin: 10px 0;
`;

const Features = () => {
  return (
    <FeaturesContainer id="features">
      <h2>Features</h2>
      <ul>
        <FeatureItem>
          <FaCheckCircle style={{ marginRight: '10px', color: '#4caf50' }} />
          Minify CSS code
        </FeatureItem>
        <FeatureItem>
          <FaCheckCircle style={{ marginRight: '10px', color: '#4caf50' }} />
          Compress CSS for better performance
        </FeatureItem>
        <FeatureItem>
          <FaCheckCircle style={{ marginRight: '10px', color: '#4caf50' }} />
          Easy to use interface
        </FeatureItem>
        <FeatureItem>
          <FaCheckCircle style={{ marginRight: '10px', color: '#4caf50' }} />
          Copy to clipboard functionality
        </FeatureItem>
      </ul>
    </FeaturesContainer>
  );
};

export default Features;
