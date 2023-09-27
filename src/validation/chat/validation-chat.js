import Joi from "joi";

export const postChat = Joi.object({
  name: Joi.string().max(32).required(),
  users: Joi.array().items(Joi.string()),
}).required();
