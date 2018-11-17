import React, { Component } from 'react';
import styled from 'styled-components';
import { Formik } from 'formik';
import Button from './Button';

const HoneyPot = styled.div`
  position: absolute;
  z-index: -100;
  left: 99999999999px;
  opacity: 0;
  visibility: hidden;
  height: 0;
  width: 0;
`;

const StyledSignUpForm = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  overflow: hidden;
  padding: 4px;
  .SignUpForm__Container {
    width: 625px;
    max-width: 100%;
    background-color: white;
    border-radius: 4px;
    padding: 15px;
    box-shadow: 0px 1px 4px -1px #333;
    .SignUpForm__Form {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      margin-bottom: 0;
      .SignUpForm__Form__Field {
        display: flex;
        flex-direction: column;
        width: 100%;
        margin-bottom: 12px;
        &:first-child {
          padding-bottom: 5px;
        }
        @media (min-width: 600px) {
          width: calc(50% - 5px);
          padding: 0 0;
        }
        .SignUpForm__Form__Field__Input {
          padding: 10px 5px;
          width: calc(100% - 12px);
          &::placeholder {
            color: #cccccc;
            opacity: 1;
          }
        }
        .SignUpForm__Error {
          color: firebrick;
        }
      }
      .SignUpForm__Form__Submit {
        width: 100%;
        .SignUpForm__Form__Submit {
          margin-top: 0;
        }
      }
      .SignUpForm__Message {
        border: 1px solid;
        padding: 12px;
        margin-top: 12px;
        &.Success {
          background: rgba(89, 255, 90, 0.17);
          border-color: green;
        }
        &.Error {
          background: rgba(255, 89, 89, 0.17);
          border-color: firebrick;
        }
      }
    }
  }
`;

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
}

class SignUpForm extends Component {
  state = {};

  validate = values => {
    const errors = {};
    if (!values.name) errors.name = '* Required';
    if (!values.zip) errors.zip = '* Required';
    if (!values.email) errors.email = '* Required';
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email))
      errors.email = 'Invalid email address';
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email))
      errors.email = 'Invalid email address';
    return errors;
  };

  handlePhone = (e, prevValue, formikHandler) => {
    // Remove new non-integers / non dashes
    e.target.value = e.target.value.replace(/[^\d-]/g, '');

    let val = e.target.value;

    // New value added
    if (val.length > prevValue.length) {
      // Insert 2 dashes
      if (val.length >= 7 && val[3] !== '-' && val[7] !== '-')
        val = val.slice(0, 3) + '-' + val.slice(3, 7) + '-' + val.slice(7);
      // Insert just the first dash
      else if (val.length >= 3 && val[3] !== '-')
        val = val.slice(0, 3) + '-' + val.slice(3);
      // Insert just the last dash
      else if (val.length >= 7 && val[7] !== '-')
        val = val.slice(0, 7) + '-' + val.slice(7);

      // Value deleted
    } else {
      // Delete trailing dashes
      if (val.length === 8) val = val.slice(0, 7);
      if (val.length === 4) val = val.slice(0, 3);
    }
    e.target.value = val;
    formikHandler(e);
  };

  submit = values => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...values }),
    })
      .then(() => {
        this.setState({ showError: false, showSuccess: true });
      })
      .catch(error => {
        this.setState({ showSuccess: false, showError: true });
      });
  };

  render() {
    const { showError, showSuccess } = this.state;
    return (
      <StyledSignUpForm>
        <div className="SignUpForm__Container">
          <Formik
            initialValues={{ name: '', email: '', phone: '', zip: '' }}
            validate={this.validate}
            onSubmit={this.submit}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
            }) => (
              <form
                className="SignUpForm__Form"
                id="SignUpForm"
                name="contact"
                onSubmit={handleSubmit}
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
              >
                <input type="hidden" name="form-name" value="contact" />
                <HoneyPot>
                  <label>
                    Don’t fill this out if you're human:{' '}
                    <input name="bot-field" />
                  </label>
                </HoneyPot>
                <label className="SignUpForm__Form__Field">
                  <small>
                    Name{' '}
                    <span className="SignUpForm__Error">
                      {errors.name && touched.name && errors.name}
                    </span>
                  </small>
                  <input
                    type="text"
                    name="name"
                    id="SignUpForm__Name"
                    className="SignUpForm__Form__Field__Input"
                    placeholder="Scooby Doo"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                  />
                </label>
                <label className="SignUpForm__Form__Field">
                  <small>
                    Email{' '}
                    <span className="SignUpForm__Error">
                      {errors.email && touched.email && errors.email}
                    </span>
                  </small>
                  <input
                    type="email"
                    name="email"
                    className="SignUpForm__Form__Field__Input"
                    placeholder="ScoobySnax@mysterygang.com"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                </label>
                <label className="SignUpForm__Form__Field">
                  <small>Phone </small>
                  <input
                    type="text"
                    name="phone"
                    className="SignUpForm__Form__Field__Input"
                    placeholder="909-123-4567"
                    maxLength="12"
                    onChange={e =>
                      this.handlePhone(e, values.phone, handleChange)
                    }
                    onBlur={handleBlur}
                    value={values.phone}
                  />
                </label>
                <label className="SignUpForm__Form__Field">
                  <small>
                    Zip Code{' '}
                    <span className="SignUpForm__Error">
                      {errors.zip && touched.zip && errors.zip}
                    </span>
                  </small>
                  <input
                    type="number"
                    name="zip"
                    className="SignUpForm__Form__Field__Input"
                    placeholder="91737"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.zip}
                  />
                </label>
                <Button
                  className="SignUpForm__Form__Submit"
                  type="submit"
                  disabled={isSubmitting}
                >
                  Woof!
                </Button>
              </form>
            )}
          </Formik>
          {showSuccess && (
            <div className="SignUpForm__Message Success">
              Thank You! <br />
              We will contact you via email within the next 48 hours from our
              email address: thedaddydogwalker@gmail.com.
            </div>
          )}
          {showError && (
            <div className="SignUpForm__Message Error">
              Ruh Oh! Something went wrong. <br />
              Email us at{' '}
              <a href="mailto:thedaddydogwalker@gmail.com">
                thedaddydogwalker@gmail.com
              </a>
              and we'll contact you within 48 hours.
            </div>
          )}
        </div>
      </StyledSignUpForm>
    );
  }
}

export default SignUpForm;
