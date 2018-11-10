import React from 'react';
import styled from 'styled-components';
import background from '../images/dog-with-family.jpg';

const StyledAbout = styled.section`
  background-image: url(${background});
  background-size: cover;
  background-position: center center;
  padding: 148px 12px;
  .About__Container {
    background-color: rgba(255, 255, 255, 0.75);
    border-radius: 5px;
    padding: 24px 48px;
    width: 400px;
    max-width: calc(100% - 96px);
    margin: auto;
  }
  .About__Title {
    text-align: center;
    font-weight: 100;
  }
`;

const About = () => (
  <StyledAbout>
    <div className="About__Container">
      <h2 className="About__Title">About</h2>
      <div className="About__Body">
        <p>Hey there!</p>
        <p>
          I'm Jason and I've been working for over 15 years in the pet
          hospitality industry, managing 2 of the busiest pet hotels in the
          country and handling thousands of dogs and cats.
        </p>
        <p>
          Whatever you or your pet's needs are, we can work together to find the
          best solution and customize a schedule that works best for you.
        </p>
        <p>
          I am a pet lover and will treat your babies as my own{' '}
          <span role="img" aria-label="Smiling">
            😃
          </span>
        </p>
      </div>
    </div>
  </StyledAbout>
);

export default About;
