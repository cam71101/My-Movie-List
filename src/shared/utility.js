export const updateObject = (oldObject, updatedValues) => {
  return {
    ...oldObject,
    ...updatedValues,
  };
};

export const generateTextInput = (
  elementType,
  elementConfigType,
  placeholder,
  value,
  required,
  isEmail,
  minLength,
  maxLength
) => {
  return {
    elementType: elementType,
    elementConfig: {
      type: elementConfigType,
      placeholder: placeholder,
    },
    value: value,
    validation: {
      required: required,
      isEmail: isEmail,
      minLength: minLength,
      maxLength: maxLength,
    },
    valid: false,
    touched: false,
  };
};
