import { Exception } from "../exception/exception.js";

export default (schema) => {
  return (req, _, next) => {
    const { error, value } = schema.validate(req.body);

    console.log(value);

    if (error) {
      return next(new Exception(error.message, 422));
    }

    req.filtered = value;
    next();
  };
};
