import Joi from "joi";

export const formikValidateUsingJoi = (schema) => {
  return (values) => {
    const { error } = Joi.object(schema).validate(values, {
      abortEarly: false,
    });

    if (!error) {
      return null;
    }

    const errors = {};
    for (const detail of error.details) {
      errors[detail.path[0]] = detail.message;
    }

    return errors;
  };
};

export default formikValidateUsingJoi;

