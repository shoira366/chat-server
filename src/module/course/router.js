import express from "express";
import validationHandler from "../../middleware/validation-handler.js";
import { postCourse } from "../../validation/course/validation-course.js";
import course from "./course.js";

const router = express.Router();

export default router
  .get("/get", course.GET)
  .post("/post", validationHandler(postCourse), course.POST);
