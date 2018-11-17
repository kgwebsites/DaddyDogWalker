import React from 'react';
import styled from 'styled-components';
import SignupForm from './SignUpForm';

const StyledHero = styled.div`
  margin: 0px auto;
  max-width: 960px;
  padding: 0 10px;
  min-height: 90vh;
  position: absolute;
  top: -88px;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  @media (max-height: 500px) {
    display: block;
    margin-top: 100px;
  }
  .Hero__Title {
    text-align: center;
    margin-top: 2.5rem;
    margin-bottom: 0.5rem;
    color: white;
  }
  .Hero__Areas {
    display: block;
    color: white;
    margin-bottom: 1.5rem;
    text-align: center;
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
      The one to trust with your furry kids in Rancho Cucamonga <br />
      and surrounding areas*.
    </h2>
    <small className="Hero__Areas">
      * Alta Loma, Etiwanda, Upland, Ontario, Fontana, and Rialto
    </small>
    <h3 className="Hero__Subtitle">Sign up for 50% off your first walk!</h3>
    <SignupForm />
  </StyledHero>
);

export default Hero;
