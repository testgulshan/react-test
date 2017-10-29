import React from 'react';

import FormErrors from './FormErrors';

class Userform extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      formErrors: { email: '', password: '' },
      emailValid: false,
      passwordValid: false,
      formValid: false,
    };

    this.handleUserInput = this.handleUserInput.bind(this);
    this.errorClass = this.errorClass.bind(this);
    this.formErrors = this.formErrors.bind(this);
  }

  handleUserInput(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value },
      () => { this.ValidateField(name, value); });
  }

  ValidateField(fieldName, value) {
    const fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;

    switch (fieldName) {
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? '' : ' is invalid';
        break;

      case 'password':
        passwordValid = value.length >= 6;
        fieldValidationErrors.password = passwordValid ? '' : ' is too short';
        break;

      default:
        break;
    }

    this.setState({
      formErrors: fieldValidationErrors,
      emailValid,
      passwordValid,
    }, this.validateForm);
  }

  validateForm() {
    this.setState({ formValid: this.state.emailValid && this.state.passwordValid });
  }

  formErrors() {
    return this.state.formErrors;
  }

  errorClass = (error) => {
    return (error.length === 0 ? '' : 'has-error');
  }

  render() {
    return (
      <form className="demoForm">
        <FormErrors formErrors={this.formErrors} />
        <h2>Sign Up</h2>
        <div className={`form-group ${this.errorClass(this.state.formErrors.email)}`}>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={this.state.email}
            onChange={e => this.handleUserInput(e)}
          />
        </div>
        <div className={`form-group ${this.errorClass(this.state.formErrors.password)}`}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            value={this.state.password}
            onChange={e => this.handleUserInput(e)}
          />
        </div>
        <button type="submit" className="btn btn-primary" disabled={!this.state.formValid}>
          Sign up
        </button>
      </form>
    );
  }
}

export default Userform;
