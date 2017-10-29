import React from 'react';
import PropTypes from 'prop-types';

const FormErrors = ({ formErrors }) => {
  return (
    <div className="form-errors">
      {Object.keys(formErrors).map((fieldName, i) => {
        if (formErrors[fieldName].length > 0) {
          const k = i;
          return (
            <p key={`${fieldName}-${k}`}>{fieldName} {formErrors[fieldName]}</p>
          );
        }
        return '';
      })}
    </div>
  );
};

FormErrors.defaultProps = {
  formErrors: {
    email: 'email error',
    password: 'password error',
  },
};

FormErrors.propTypes = {
  formErrors: PropTypes.func,
};


export default FormErrors;
