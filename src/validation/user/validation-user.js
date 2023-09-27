import Joi from "joi";

export const postUser = Joi.object({
  username: Joi.string().max(64).required(),
}).required();
