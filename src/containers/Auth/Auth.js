import React, { useState } from 'react';
import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import * as actions from '../../store/actions/index';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import { updateObject, generateTextInput } from '../../shared/utility';
import logo from '../../assets/images/logo.png';

import useStyles from './authStyles';

const email = generateTextInput(
  'input',
  'email',
  'Your Email',
  'test@test.co.uk',
  true,
  true,
  0,
  100
);
const password = generateTextInput(
  'input',
  'password',
  'Password',
  'happy123',
  true,
  false,
  6,
  20
);

const Auth = (props) => {
  const [controls, setControls] = useState({
    email,
    password,
  });
  const [isSignup, setIsSignUp] = useState(false);
  const { onAuth } = props;

  const classes = useStyles();

  const checkValidity = (value, rules) => {
    let isValid = true;

    if (rules.required) {
      isValid = value.trim() !== '' && isValid;
    }

    if (rules.minLength) {
      isValid = value.length >= rules.minLength && isValid;
    }

    if (rules.isEmail) {
      const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
      isValid = pattern.test(value) && isValid;
    }

    return isValid;
  };

  const inputChangedHandler = (event, controlName) => {
    const updatedControls = updateObject(controls, {
      [controlName]: updateObject(controls[controlName], {
        value: event.target.value,
        valid: checkValidity(
          event.target.value,
          controls[controlName].validation
        ),
        touched: true,
      }),
    });
    setControls(updatedControls);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    onAuth(controls.email.value, controls.password.value, isSignup);
  };

  const switchAuthModeHandler = () => {
    setIsSignUp(!isSignup);
  };

  const formElementsArray = [];
  for (let key in controls) {
    formElementsArray.push({
      id: key,
      config: controls[key],
      value: controls[key].value,
    });
  }

  let authRedirect = null;
  if (props.isAuthenticated) {
    authRedirect = <Redirect to="/My-Movie-List" />;
  }

  let errorMessage;

  if (props.error) {
    errorMessage = props.error.data.error.message.replace('_', ' ');
  }

  return (
    <div className={classes.root}>
      {authRedirect}
      <Card className={classes.card}>
        <img className={classes.logo} src={logo} alt="Logo" />
        <form className={classes.form} noValidate autoComplete="off">
          <div className={classes.formContainer}>
            {formElementsArray.map((formElement) => {
              const error = props.error
                ? true
                : !formElement.config.valid && formElement.config.touched
                ? true
                : false;

              return (
                <TextField
                  key={formElement.id}
                  error={error}
                  label={formElement.config.elementConfig.placeholder}
                  helperText={
                    formElement.config.elementConfig.placeholder === 'Password'
                      ? errorMessage
                      : null
                  }
                  variant="filled"
                  type={formElement.config.elementConfig.type}
                  onChange={(event) =>
                    inputChangedHandler(event, formElement.id)
                  }
                  value={formElement.value}
                ></TextField>
              );
            })}
            <Button
              variant="contained"
              color={isSignup ? 'primary' : 'secondary'}
              onClick={submitHandler}
              data-test="button"
            >
              {isSignup ? 'SIGNUP' : 'LOGIN'}
            </Button>
          </div>
        </form>
        <Button
          variant="contained"
          color={isSignup ? 'primary' : 'secondary'}
          onClick={switchAuthModeHandler}
          className={classes.signInUp}
        >
          SWITCH TO {isSignup ? 'SIGNIN' : 'SIGNUP'}
        </Button>
      </Card>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    error: state.auth.error,
    isAuthenticated: state.auth.token !== null,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAuth: (email, password, isSignup) =>
      dispatch(actions.auth(email, password, isSignup)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
