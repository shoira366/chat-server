import express from "express";
import validationHandler from "../../middleware/validation-handler.js";
import { postUser } from "../../validation/user/validation-user.js";
import user from "./user.js";

const router = express.Router();

export default router
  .get("/get", user.GET)
  .post("/add", validationHandler(postUser), user.POST);
