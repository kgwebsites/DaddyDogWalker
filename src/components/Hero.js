import React from 'react';
import styled from 'styled-components';
import SignupForm from './SignUpForm';

const StyledHero = styled.div`
  margin: 0px auto;
  max-width: 960px;
  padding: 0 10px;
  height: 90vh;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  .Hero__Title {
    text-align: center;
    margin-top: 1.5rem;
    color: white;
  }
  .Hero__Subtitle {
    text-align: center;
    font-weight: 100;
    color: white;
  }
`;

const Hero = () => (
  <StyledHero>
    <h2 className="Hero__Title">
      The one to trust with your furry kids in Rancho Cucamonga.
    </h2>
    <h3 className="Hero__Subtitle">Sign up for 50% off your first walk!</h3>
    <SignupForm />
  </StyledHero>
);

export default Hero;
