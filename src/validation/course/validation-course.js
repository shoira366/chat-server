import Joi from "joi";

export const postCourse = Joi.object({
  course_name: Joi.string().max(64).required(),
  course_duration: Joi.string().required(),
}).required();
