import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import DogWalking from '../images/svg/dog-walking.svg';
import Home from '../images/svg/Home.svg';

const StyledServices = styled.section`
  padding: 72px 12px;
  .Services__Service {
    min-width: 200px;
    margin: 12px;
  }
  .Services__Title {
    text-align: center;
    font-weight: 100;
    margin-bottom: 12px;
  }
  .Services__Body {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    height: 100%;
    max-width: 100%;
    width: 600px;
    margin: auto;
    .Services__Service__Title {
      display: flex;
      align-items: center;
      font-weight: 700;
      margin-bottom: 12px;
      .Services__Service__Icon {
        margin-right: 12px;
      }
    }
    .Services__Service__Price {
      list-style: none;
      margin: 0;
      li {
        display: flex;
        justify-content: space-between;
      }
    }
  }
  .Services__Footer {
    text-align: center;
    .Services__Action {
      width: 400px;
    }
  }
`;

const Services = () => (
  <StyledServices>
    <h2 className="Services__Title">Services</h2>
    <div className="Services__Body">
      <div className="Services__Service">
        <div className="Services__Service__Title">
          <span className="Services__Service__Icon">
            <DogWalking width="35" height="35" />
          </span>
          Dog Walking
        </div>
        <ul className="Services__Service__Price">
          <li>
            <div className="Price__Desc">15 Minute Walk</div>
            <div className="Price__Cost">$18</div>
          </li>
          <li>
            <div className="Price__Desc">30 Minute Walk</div>
            <div className="Price__Cost">$25</div>
          </li>
          <li>
            <div className="Price__Desc">1 Hour Walk</div>
            <div className="Price__Cost">$40</div>
          </li>
          <li>
            <div className="Price__Desc">Waste Disposal Add On</div>
            <div className="Price__Cost">$5</div>
          </li>
          <li>
            <div className="Price__Desc">Feeding Add On</div>
            <div className="Price__Cost">$2</div>
          </li>
        </ul>
      </div>

      <div className="Services__Service">
        <div className="Services__Service__Title">
          <span className="Services__Service__Icon">
            <Home width="35" height="35" />
          </span>
          House Visits
        </div>
        <ul className="Services__Service__Price">
          <li>
            <div className="Price__Desc">15 Minute House Visit</div>
            <div className="Price__Cost">$15</div>
          </li>
          <li>
            <div className="Price__Desc">30 Minute House Visit</div>
            <div className="Price__Cost">$22</div>
          </li>
          <li>
            <div className="Price__Desc">1 Hour House Visit</div>
            <div className="Price__Cost">$25</div>
          </li>
        </ul>
      </div>
    </div>

    <div className="Services__Footer">
      <strong>Weekly packages available at discounted rates</strong>
      <div>
        <Button
          className="Services__Action"
          type="submit"
          onClick={e => {
            e.preventDefault();
            window.scroll({ top: 0, behavior: 'smooth' });
            document.getElementById('SignUpForm__Name').focus();
          }}
        >
          Sign Up For 50% Off First Walk!
        </Button>
      </div>
    </div>
  </StyledServices>
);

export default Services;
