import express from "express";
import validationHandler from "../../middleware/validation-handler.js";
import { postChat } from "../../validation/chat/validation-chat.js";
import chat from "./chat.js";

const router = express.Router();

export default router
  .post("/get", chat.GET)
  .post("/add", validationHandler(postChat), chat.POST);
